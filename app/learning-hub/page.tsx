import { LEARNING_HUB_REPORTS } from "@/lib/learning-hub-data";

export default function LearningHubPage() {
  const reports = LEARNING_HUB_REPORTS;

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
          day and kept factual. Ask for a new entry whenever you want one;
          each day&apos;s report stacks on top of the last.
        </p>
      </div>

      {reports.length === 0 && (
        <div className="xoopah-card flex flex-col items-start gap-4 p-8">
          <p className="max-w-md text-sm text-black/70">
            No reports yet — ask for today&apos;s Learning Hub report and
            it&apos;ll appear here.
          </p>
        </div>
      )}

      {reports.map((report) => (
        <div key={report.date} className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="xoopah-display text-xl text-black">{report.date}</h2>
            <span className="rounded-full bg-xoopah-light-blue px-3 py-1 text-xs font-semibold text-xoopah-blue">
              ~{report.readMinutes} min read
            </span>
          </div>

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

          <div className="h-px bg-black/5" />
        </div>
      ))}
    </div>
  );
}
