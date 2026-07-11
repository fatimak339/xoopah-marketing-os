const FRAMEWORKS = [
  { name: "Category design", desc: "\u201cThe only/first X for Y.\u201d Owns a new category rather than competing in an existing one." },
  { name: "Job-to-be-done", desc: "\u201cHelps you do [job] without [pain].\u201d Anchors to the task, not the tool." },
  { name: "Workflow/time compression", desc: "\u201cDo X in minutes, not days.\u201d Speed as the core differentiator." },
  { name: "Outcome/ROI-based", desc: "\u201cGet [result] without [cost].\u201d Leads with the business result, not the mechanism." },
  { name: "Anti-establishment", desc: "\u201cNot another agency/tool.\u201d Positions against a way of working, not a competitor product." },
  { name: "Consolidation / all-in-one", desc: "\u201cReplace your scattered stack.\u201d Wins on fewer tools, not more features." },
  { name: "Underdog / persona-specific", desc: "\u201cBuilt for X who Y.\u201d Narrow, named audience instead of broad appeal." },
];

const RECOMMENDED_EVIDENCE = [
  { label: "Workflow compression + variants", detail: "The core mechanism — one asset in, many launch-ready variants out. Matches Catherine's \u201cone asset \u2192 40 assets\u201d and the highest-scored wedge in the D2C research (5/5 evidence strength)." },
  { label: "Time", detail: "\u201cIn minutes\u201d ties to Brent Halstead's Monday-morning test and the 67% who want rough footage turned into launch-ready variants fast." },
  { label: "No designer/team needed", detail: "Matches 81% of the ICP running 1\u20133 person founder-led marketing execution — nobody to hand this off to." },
  { label: "All-in-one suite", detail: "\u201cNothing else added to your stack\u201d speaks to Bonnie's \u201c45-tool stack with CFO pressure to consolidate\u201d and the 57% who prioritize practical fit over feature richness." },
];

const ALTERNATIVES = [
  {
    name: "One angle, forty ads",
    statement: "Your best-performing product shot becomes forty ad variants — automatically.",
    note: "Leans hardest into the creative-multiplier angle. More visual, easier to show in a single before/after. Narrower than the recommended option — says less about time or team size.",
  },
  {
    name: "The ad team you don't have to hire",
    statement: "Everything an ad team would do for you — without hiring one.",
    note: "Leads with the headcount/agency alternative rather than the workflow mechanic. Strong for founders comparing Xoopah against hiring — weaker for founders who've never considered hiring anyone.",
  },
  {
    name: "Launch-ready, not just AI-generated",
    statement: "Ads that are actually ready to run — not one more thing to clean up before you can launch.",
    note: "Answers the D2C research's Decision Lens directly: buyers reject generic/templated output and black-box behavior. A good foil to AdCreative.ai and Creatify, who lead on volume/speed claims.",
  },
];

export default function BrandPositioningPage() {
  return (
    <div className="space-y-10">
      <div>
        <p className="mb-2 text-xs text-black/40">
          <a href="/brand" className="hover:text-xoopah-blue">Brand</a> / Positioning
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <p className="font-sub text-sm font-semibold uppercase tracking-[0.2em] text-xoopah-blue">
            Brand · Positioning
          </p>
          <span className="rounded-full bg-[#FFE9D6] px-3 py-1 text-xs font-semibold text-[#B65A17]">
            Not finalized
          </span>
        </div>
        <h1 className="mt-3 max-w-2xl xoopah-display text-3xl text-black">
          A recommendation, not a decision.
        </h1>
      </div>

      <div>
        <h2 className="font-sub text-sm font-semibold uppercase tracking-wide text-black/40">
          Common SaaS positioning frameworks
        </h2>
        <p className="mt-2 text-sm text-black/60">
          Reference only — the general patterns most SaaS/AdTech
          positioning falls into.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {FRAMEWORKS.map((f) => (
            <div key={f.name} className="rounded-xl bg-black/[0.03] p-4">
              <p className="font-sub text-sm font-semibold text-black">{f.name}</p>
              <p className="mt-1 text-sm text-black/60">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="xoopah-card xoopah-accent-blue p-6 pl-8">
        <span className="rounded-full bg-xoopah-light-blue px-3 py-1 text-xs font-semibold text-xoopah-blue">
          Recommended
        </span>
        <h2 className="mt-3 font-sub text-xl font-semibold text-black">
          Workflow compression + variants
        </h2>
        <p className="mt-2 max-w-2xl text-base italic text-black/70">
          &quot;Turn one proven ad angle into dozens of launch-ready
          variants — in minutes, with no designer, no agency, and nothing
          else added to your stack.&quot;
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {RECOMMENDED_EVIDENCE.map((e) => (
            <div key={e.label} className="rounded-xl bg-xoopah-light-blue/30 p-4">
              <p className="font-sub text-sm font-semibold text-black">{e.label}</p>
              <p className="mt-1 text-sm text-black/60">{e.detail}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-black/50">
          The only option with 5/5 evidence strength across the ICP
          scorecard and a direct language match from the interviews.
        </p>
      </div>

      <div>
        <h2 className="font-sub text-lg font-semibold text-black">Alternative options</h2>
        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          {ALTERNATIVES.map((a) => (
            <div key={a.name} className="xoopah-card xoopah-accent-lime p-5 pl-7">
              <p className="font-sub font-semibold text-black">{a.name}</p>
              <p className="mt-2 text-sm italic text-black/70">&quot;{a.statement}&quot;</p>
              <p className="mt-3 text-xs text-black/50">{a.note}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="xoopah-card xoopah-accent-blue p-6 pl-8">
        <h2 className="font-sub text-lg font-semibold text-black">How I&apos;d use these</h2>
        <p className="mt-2 text-sm text-black/60">
          Lead with the recommended option for anything customer-facing —
          ads, landing page hero, pitch. Keep the alternatives in reserve:
          &quot;one angle, forty ads&quot; for anything highly visual, and
          &quot;launch-ready, not AI-generated&quot; for moments directly
          differentiating against AdCreative.ai or Creatify.
        </p>
      </div>

      <div className="xoopah-card xoopah-accent-blue p-6 pl-8">
        <h2 className="font-sub text-lg font-semibold text-black">Competitive white space (holds under any option)</h2>
        <p className="mt-2 text-sm text-black/60">
          No competitor currently targets the businesses-without-a-marketing-team
          segment, and most competitors (HeyGen, Creatify, AdCreative.ai,
          Pencil, Zeely) do creation <em>or</em> launching — not both.
        </p>
      </div>
    </div>
  );
}
