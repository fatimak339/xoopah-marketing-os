export default function ReportsPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="font-sub text-sm font-semibold uppercase tracking-[0.2em] text-xoopah-blue">
          Reports
        </p>
        <h1 className="mt-3 xoopah-display text-3xl text-black">
          Nothing logged yet
        </h1>
        <p className="mt-2 max-w-xl text-sm text-black/60">
          This is where new period reports will land going forward —
          weekly rollups, campaign readouts, and progress updates. Historical
          H1 2026 material (meetings, trackers, job descriptions) has moved
          to the H1 section.
        </p>
      </div>

      <div className="xoopah-card flex flex-col items-start gap-4 p-8">
        <div className="h-10 w-10 rounded-xl bg-xoopah-light-blue" />
        <p className="max-w-md text-sm text-black/70">
          No reports populated here yet — this section is ready to fill in
          as new reporting starts.
        </p>
      </div>
    </div>
  );
}
