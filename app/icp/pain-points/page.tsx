import Link from "next/link";

const PAIN_POINTS = [
  {
    title: "Production: The Messy Middle",
    body: "Not lacking ideas, but unable to turn one concept into clean, testable variants fast. 67% (10/15) want rough footage turned into launch-ready variants.",
    quotes: [
      { name: "Colin Voss", quote: "The big one is the gap between having a decent campaign idea and having enough launch-ready creative variants without a bunch of manual rework." },
      { name: "Sabrina Morrow", quote: "I'd want help with the messy middle — turning raw footage into strong first drafts faster." },
      { name: "Catalina Restrepo", quote: "Most weeks, I already know what I want to test." },
    ],
  },
  {
    title: "Approval: Founder Signoff Cascade",
    body: "Founder signoff plus claims review named as THE blocker by several participants. Late founder changes cascade across the ad, landing page, discount logic, naming, and links — turning a simple ad update into a cross-workflow relaunch.",
    quotes: [
      { name: "Tessa McBride", quote: "When tone or sustainability language is even slightly off, the team redoes the angle, not a light edit." },
      { name: "Shalini Deshpande", quote: "Needs to know where founder approval still sits — a tool assuming she hands over messaging is probably not a fit." },
    ],
  },
  {
    title: "Workflow: Scattered Tools",
    body: "No single source of truth for current version or status. Buyers evaluate against their current stack — Canva, CapCut, Drive, Ads Manager — not an abstract AI ideal. 57% prioritize practical fit over feature richness.",
    quotes: [
      { name: "Bonnie", quote: "45-tool stack with CFO pressure to consolidate — consolidation pressure, not just dissatisfaction, drives tool change." },
      { name: "Kelsey Harlan", quote: "I'm asking if it saves me actual time this week, not if it has a nice demo." },
      { name: "Brianna Hollis", quote: "I care way less about feature depth than whether I feel lighter using it by the second or third day." },
    ],
  },
  {
    title: "Input: The Asset Ceiling",
    body: "Weak source footage and proof caps Xoopah's value regardless of workflow speed. 33% (5/15) named weak source assets as THE biggest blocker.",
    quotes: [
      { name: "Unattributed", quote: "Usually it's asset inputs, not the final assembly. If we don't have enough decent product-in-use footage, everything downstream gets forced." },
      { name: "Monica Granger", quote: "Hits a hard ceiling when forcing variation out of the same few images or clips." },
    ],
  },
];

export default function PainPointsPage() {
  return (
    <div className="space-y-10">
      <div>
        <p className="mb-2 text-xs text-black/40">
          <Link href="/icp" className="hover:text-xoopah-blue">ICP</Link> / Pain points
        </p>
        <p className="font-sub text-sm font-semibold uppercase tracking-[0.2em] text-xoopah-blue">
          Pain points
        </p>
        <h1 className="mt-3 max-w-2xl xoopah-display text-3xl text-black">
          The messy middle, in full.
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-black/60">
          The dominant pain across the Articos sample is not ideation — it's
          the gap between a proven angle and enough launch-ready variants,
          compounded by a founder-approval layer that can cascade a single
          copy change across an entire campaign.
        </p>
      </div>

      <div className="space-y-6">
        {PAIN_POINTS.map((p, i) => (
          <div key={p.title} className="xoopah-card xoopah-accent-blue p-6 pl-8">
            <div className="flex items-baseline gap-3">
              <span className="font-sub text-2xl font-extrabold text-black/15">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="font-sub text-lg font-semibold text-black">{p.title}</h2>
            </div>
            <p className="mt-3 text-sm text-black/70">{p.body}</p>
            <div className="mt-4 space-y-2 border-t border-black/5 pt-4">
              {p.quotes.map((q) => (
                <p key={q.name} className="text-sm italic text-black/60">
                  &quot;{q.quote}&quot;{" "}
                  <span className="not-italic font-semibold text-black/40">— {q.name}</span>
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="xoopah-card xoopah-accent-blue p-6 pl-8">
        <h2 className="font-sub text-lg font-semibold text-black">Asset readiness segmentation</h2>
        <p className="mt-2 text-sm text-black/60">
          Three distinct groups with different Xoopah fit levels.{" "}
          <span className="font-semibold text-black">Input-multipliers</span>{" "}
          (rough but usable footage exists) need workflow compression and
          varianting — high fit.{" "}
          <span className="font-semibold text-black">Input-salvagers</span>{" "}
          (mixed-quality, incomplete proof) need scaffolding and cleanup
          reduction — medium fit.{" "}
          <span className="font-semibold text-black">Input-poor teams</span>{" "}
          (thin footage, weak claims, little proof) need substance
          creation, which isn't Xoopah's job — low fit unless guided.
        </p>
      </div>
    </div>
  );
}
