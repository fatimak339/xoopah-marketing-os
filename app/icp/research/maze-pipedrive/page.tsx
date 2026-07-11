import Link from "next/link";

export default function MazePipedrivePage() {
  return (
    <div className="space-y-10">
      <div>
        <p className="mb-2 text-xs text-black/40">
          <Link href="/icp" className="hover:text-xoopah-blue">ICP</Link> / Maze / Pipedrive
        </p>
        <p className="font-sub text-sm font-semibold uppercase tracking-[0.2em] text-xoopah-blue">
          Research method
        </p>
        <h1 className="mt-3 max-w-2xl xoopah-display text-3xl text-black">
          Maze survey + Pipedrive deal data
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-black/60">
          Two smaller benchmarks, both confirming the same pricing and
          adoption pattern from a different angle.
        </p>
      </div>

      <div className="xoopah-card xoopah-accent-blue p-6 pl-8">
        <h2 className="font-sub text-lg font-semibold text-black">
          Maze Survey — n=15 screener
        </h2>
        <ul className="mt-3 space-y-2 text-sm text-black/70">
          <li>20% self-identify as DTC e-commerce</li>
          <li>Team size split 50% solopreneur / 50% team of 2–5</li>
          <li>71% spend $0/month on paid social — confirms the low-spend, early-stage profile</li>
          <li>
            n=2 on deeper questions: biggest blocker split 50/50 between
            &quot;coming up with ideas&quot; and &quot;the time it takes&quot;
          </li>
          <li>Meta named by 100% of respondents as the channel used</li>
          <li>Tools currently in use: Creatify, TopView, Hollo</li>
        </ul>
      </div>

      <div className="xoopah-card xoopah-accent-blue p-6 pl-8">
        <h2 className="font-sub text-lg font-semibold text-black">
          Pipedrive Deals — 25 rows
        </h2>
        <ul className="mt-3 space-y-2 text-sm text-black/70">
          <li>
            Deal tiers: Beginner ~$28.57, Growth Seeker ~$23, Pro User ~$20,
            Full-Service Seeker ~$50
          </li>
          <li>Confirms low-spend entry tier and lightweight adoption motion</li>
          <li>Business Type: Product Based across all 25 rows</li>
          <li>
            Only 1 of 25 rows has a populated churn reason: &quot;wanted to
            evaluate results first and then resume&quot; — a
            proof-before-spend pattern
          </li>
        </ul>
      </div>

      <div className="xoopah-card xoopah-accent-blue p-6 pl-8">
        <h2 className="font-sub text-lg font-semibold text-black">Why these two together</h2>
        <p className="mt-2 text-sm text-black/60">
          Both are thinner samples than Articos or the founder interviews,
          but they independently confirm the same low-commitment,
          low-spend adoption motion — worth reading as supporting evidence,
          not a standalone finding.
        </p>
      </div>
    </div>
  );
}
