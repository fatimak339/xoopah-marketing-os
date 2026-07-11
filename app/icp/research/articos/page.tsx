import Link from "next/link";

const FINDINGS = [
  "100% (10/10) screen tools on speed-to-usable-output + cleanup burden, not feature breadth",
  "62% evaluate through a cleanup/babysitting lens",
  "57% judge on steps removed vs. shifted",
  "76% have founder involved in creative/campaign approval",
  "71% of switching-trigger quotes tie directly to creative speed, variant volume, or launch turnaround",
  "33% (5/15) named weak source assets as THE biggest blocker",
  "67% (10/15) want rough footage turned into launch-ready variants",
  "71% named short-form video as the dominant primary format",
];

export default function ArticosPage() {
  return (
    <div className="space-y-10">
      <div>
        <p className="mb-2 text-xs text-black/40">
          <Link href="/icp" className="hover:text-xoopah-blue">ICP</Link> / Articos Research
        </p>
        <p className="font-sub text-sm font-semibold uppercase tracking-[0.2em] text-xoopah-blue">
          Research method
        </p>
        <h1 className="mt-3 max-w-2xl xoopah-display text-3xl text-black">
          Articos Research — 21 participants
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-black/60">
          The foundational source: 10 D2C brand owners + 11 in-house
          marketers, across 8 themes and 24 questions. Sample skews
          founder-led, Meta-reliant, lightly staffed — the exact
          conditions defining Xoopah&apos;s best-fit ICP.
        </p>
      </div>

      <div className="xoopah-card xoopah-accent-blue p-6 pl-8">
        <h2 className="font-sub text-lg font-semibold text-black">Scorecard</h2>
        <p className="mt-2 text-sm text-black/70">
          Scores 5/5 across 4 of 5 ICP attributes: lean 3–7 person teams
          with blurred roles, founder or senior operator involved in
          approvals, already running recurring Meta tests, and primary
          pain = concept-to-variant throughput.
        </p>
      </div>

      <div>
        <h2 className="font-sub text-lg font-semibold text-black">Key findings</h2>
        <div className="xoopah-card mt-4 divide-y divide-black/5">
          {FINDINGS.map((f) => (
            <p key={f} className="px-6 py-3 text-sm text-black/70">{f}</p>
          ))}
        </div>
      </div>

      <div className="xoopah-card xoopah-accent-blue p-6 pl-8">
        <h2 className="font-sub text-lg font-semibold text-black">Named participants</h2>
        <p className="mt-2 text-sm text-black/60">
          Colin Voss, Sabrina Morrow, Catalina Restrepo, Derek Callahan,
          Avery Sinclair, Kelsey Harlan, Paige Rutledge, Monica Granger,
          Brent Halstead, Rowan Ellery, Ximena Valdez, Shalini Deshpande,
          Brianna Hollis, Tessa McBride, and Troy Abernathy — quoted
          throughout the pain points and positioning research.
        </p>
      </div>
    </div>
  );
}
