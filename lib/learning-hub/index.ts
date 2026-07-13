import type { DailyReport } from "./types";
import { report as r2026_07_12 } from "./2026-07-12";
import { report as r2026_07_13 } from "./2026-07-13";

// Add each new day's import above, then add it to this array.
// Order doesn't matter here — sorted by slug (newest first) automatically below.
const ALL_REPORTS: DailyReport[] = [r2026_07_12, r2026_07_13];

export const LEARNING_HUB_REPORTS: DailyReport[] = [...ALL_REPORTS].sort((a, b) =>
  b.slug.localeCompare(a.slug)
);

export type { DailyReport, ReportSection, ReportItem } from "./types";
