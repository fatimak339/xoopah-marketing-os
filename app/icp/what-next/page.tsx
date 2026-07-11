import Link from "next/link";

const STEPS = [
  {
    title: "Close the evidence gap",
    body: "No source has interviewed a D2C brand actively using AdCreative.ai, Creatify, or MakeUGC about why they'd switch away. This is the single biggest hole in an otherwise convergent dataset — every other benchmark points the same direction, but none of them come from a brand that actually left a competitor.",
  },
  {
    title: "Sample sizes thin out on the newer sources",
    body: "Articos (21 participants) and the 3 founder interviews are solid. The Maze survey drops to n=2 on the deeper questions — biggest blocker, content-type preference. Worth a larger quantitative pass before treating those specific findings as settled, rather than directional.",
  },
  {
    title: "Instrument the activation funnel",
    body: "54% activation even for the best-fit segment means roughly half of the right-fit signups aren't reaching real usage. The onboarding data confirms the gap exists but not where it happens — worth adding funnel-stage tracking to see exactly where e-commerce signups drop off.",
  },
  {
    title: "Track sub-vertical performance over time, not just activation",
    body: "Beauty/skincare is the largest segment (38%) but also the most trust-sensitive. Electronics is the best structural fit (scrappy footage tolerated) but a smaller segment. Activation is a day-one signal — watch retention and paid conversion by sub-vertical over the next two quarters to see which one actually sticks.",
  },
  {
    title: "Re-test after the Avatar gap closes",
    body: "Avatar is the most-used feature but can't do hand-held or product-in-use demos — this ICP's top-named format gap. Once a creator-cam mode ships, re-check whether activation moves specifically for this segment. That's the cleanest read on whether the product gap was actually suppressing fit.",
  },
  {
    title: "Keep the interview cadence running",
    body: "Particularly with churned or switched-away e-commerce users, to build the switch-trigger picture this dataset is currently missing. Pairs directly with the Positioning & ICP Decision Support workflow already in the skills library.",
  },
];

export default function WhatNextPage() {
  return (
    <div className="space-y-10">
      <div>
        <p className="mb-2 text-xs text-black/40">
          <Link href="/icp" className="hover:text-xoopah-blue">ICP</Link> / What&apos;s next
        </p>
        <p className="font-sub text-sm font-semibold uppercase tracking-[0.2em] text-xoopah-blue">
          What&apos;s next
        </p>
        <h1 className="mt-3 max-w-2xl xoopah-display text-3xl text-black">
          Perfecting the ICP, not re-deciding it.
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-black/60">
          The ICP is decided. This is about sharpening it — closing the
          gaps the current evidence base doesn&apos;t cover yet, and
          building in checks that will catch it if the picture changes.
        </p>
      </div>

      <div className="space-y-4">
        {STEPS.map((s, i) => (
          <div key={s.title} className="xoopah-card xoopah-accent-blue p-6 pl-8">
            <div className="flex items-baseline gap-3">
              <span className="font-sub text-2xl font-extrabold text-black/15">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="font-sub text-lg font-semibold text-black">{s.title}</h2>
            </div>
            <p className="mt-3 text-sm text-black/70">{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
