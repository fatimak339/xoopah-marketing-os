import { LEARNING_HUB_REPORTS } from "@/lib/learning-hub";
import type { DailyReport } from "@/lib/learning-hub";

function ReportBody({ report }: { report: DailyReport }) {
  return (
    <div className="space-y-5">
      {report.sections.map((section) => (
        <div key={section.title} className={`xoopah-card ${section.accent} p-5 pl-7`}>
          <h3 className="font-sub text-base font-semibold text-black">{section.title}</h3>
          <ul className="mt-3 space-y-2.5">
            {section.items.map((item, i) => (
              <li key={i} className="text-sm leading-relaxed text-black/70">
                <span>{item.text}</span>
                {item.source && (
                  <span className="ml-1 text-xs font-semibold text-black/40">
                    — {item.source}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default function LearningHubPage() {
  const [latest, ...older] = LEARNING_HUB_REPORTS;

  return (
    <div className="space-y-10">
      <div>
        <p className="font-sub text-sm font-semibold uppercase tracking-[0.2em] text-xoopah-blue">
          Learning Hub
        </p>
        <h1 className="xoopah-display mt-2 text-2xl text-black sm:text-3xl">
          Your daily 30-minute growth read
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-black/60">
          Tools, strategies, platform updates, and trends — pulled fresh each
          day and kept factual. Say &quot;Xoopah Learning Hub, today&quot; for
          a new entry any time.
        </p>
      </div>

      {!latest && (
        <div className="xoopah-card flex flex-col items-start gap-4 p-8">
          <p className="max-w-md text-sm text-black/70">
            No reports yet — ask for today&apos;s Learning Hub report and
            it&apos;ll appear here.
          </p>
        </div>
      )}

      {latest && (
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="xoopah-display text-xl text-black">{latest.date}</h2>
            <span className="rounded-full bg-xoopah-light-blue px-3 py-1 text-xs font-semibold text-xoopah-blue">
              ~{latest.readMinutes} min read
            </span>
          </div>
          <ReportBody report={latest} />
        </div>
      )}

      {older.length > 0 && (
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-black/40">
            Archive — {older.length} earlier {older.length === 1 ? "report" : "reports"}
          </p>
          {older.map((report) => (
            <details key={report.slug} className="xoopah-card group p-5">
              <summary className="flex cursor-pointer list-none flex-wrap items-center gap-3">
                <span className="font-sub font-semibold text-black">{report.date}</span>
                <span className="rounded-full bg-black/5 px-3 py-1 text-xs font-semibold text-black/50">
                  ~{report.readMinutes} min read
                </span>
                <span className="ml-auto text-sm text-black/40 group-open:hidden">Expand ↓</span>
                <span className="ml-auto hidden text-sm text-black/40 group-open:inline">Collapse ↑</span>
              </summary>
              <div className="mt-5">
                <ReportBody report={report} />
              </div>
            </details>
          ))}
        </div>
      )}
    </div>
  );
}
