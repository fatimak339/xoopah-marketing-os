export type ReportItem = {
  text: string;
  source?: string;
  url?: string;
};

export type ReportSection = {
  title: string;
  accent: string;
  items: ReportItem[];
};

export type DailyReport = {
  date: string; // display date, e.g. "July 12, 2026"
  slug: string; // sortable key, e.g. "2026-07-12"
  readMinutes: number;
  sections: ReportSection[];
};
