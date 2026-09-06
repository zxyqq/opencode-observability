import type { HarnessId } from "../../src/contracts/harness.js";

export const HARNESS_LABELS: Record<HarnessId, string> = {
  opencode: "OpenCode",
  codex: "Codex",
  claude: "Claude Code",
};

export function sessionPath(harness: HarnessId, id: string): string {
  return `/sessions/${harness}/${encodeURIComponent(id)}`;
}
