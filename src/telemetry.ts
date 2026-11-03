/**
 * PromptSmith Telemetry & Learning Engine
 * Captures real-world prompt interactions, token deltas, and model behavior
 * to feed the continuous improvement and fine-tuning pipeline.
 */

import * as vscode from "vscode";
import * as https from "https";
import * as http from "http";

export interface TelemetryPayload {
  sessionId: string;
  installationId: string;
  runtime: string;
  timestamp: string;
  action: "improve" | "insert" | "copy" | "select_vector" | "change_profile" | "unlock_key";
  profile: string;
  audience?: string;
  discipline?: string;
  inputPrompt: string;
  enhancedPrompt?: string;
  originalWords: number;
  enhancedWords?: number;
  tokenReductionPct?: number;
  isLicensed: boolean;
  trialCountRemaining: number;
}

export class PromptSmithTelemetry {
  private static installationIdKey = "promptsmith_install_id";
  private static queue: TelemetryPayload[] = [];
  private static isFlushing = false;

  private static getOrCreateInstallId(context: vscode.ExtensionContext): string {
    let id = context.globalState.get<string>(this.installationIdKey);
    if (!id) {
      id = "inst_" + Math.random().toString(36).substring(2, 12) + "_" + Date.now().toString(36);
      context.globalState.update(this.installationIdKey, id);
    }
    return id;
  }

  public static trackEvent(
    context: vscode.ExtensionContext,
    event: Omit<TelemetryPayload, "installationId" | "timestamp">
  ) {
    const installId = this.getOrCreateInstallId(context);
    const fullPayload: TelemetryPayload = {
      ...event,
      installationId: installId,
      timestamp: new Date().toISOString()
    };

    this.queue.push(fullPayload);
    this.flushQueue();
  }

  private static flushQueue() {
    if (this.isFlushing || this.queue.length === 0) return;
    this.isFlushing = true;

    const payload = this.queue.shift();
    if (!payload) {
      this.isFlushing = false;
      return;
    }

    const data = JSON.stringify(payload);
    const endpoints = [
      "https://bartholomew.info/api/promptsmith/telemetry",
      "http://127.0.0.1:8080/api/promptsmith/telemetry"
    ];

    this.sendToFirstWorkingEndpoint(endpoints, data, () => {
      this.isFlushing = false;
      if (this.queue.length > 0) {
        setTimeout(() => this.flushQueue(), 500);
      }
    });
  }

  private static sendToFirstWorkingEndpoint(endpoints: string[], data: string, done: () => void) {
    if (endpoints.length === 0) {
      done();
      return;
    }

    const urlString = endpoints[0];
    try {
      const parsedUrl = new URL(urlString);
      const isHttps = parsedUrl.protocol === "https:";
      const lib = isHttps ? https : http;

      const req = lib.request(
        {
          hostname: parsedUrl.hostname,
          port: parsedUrl.port || (isHttps ? 443 : 80),
          path: parsedUrl.pathname,
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Content-Length": Buffer.byteLength(data),
            "User-Agent": "PromptSmith-VSCode/2.2.0"
          },
          timeout: 4000
        },
        (res) => {
          res.resume(); // discard body
          done();
        }
      );

      req.on("error", () => {
        // Try fallback endpoint
        this.sendToFirstWorkingEndpoint(endpoints.slice(1), data, done);
      });

      req.on("timeout", () => {
        req.destroy();
        this.sendToFirstWorkingEndpoint(endpoints.slice(1), data, done);
      });

      req.write(data);
      req.end();
    } catch {
      this.sendToFirstWorkingEndpoint(endpoints.slice(1), data, done);
    }
  }
}
