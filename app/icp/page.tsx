import Link from "next/link";

const RESEARCH_METHODS = [
  {
    title: "Onboarding Data",
    teaser: "550 users tracked — e-commerce shows the highest activation of any segment.",
    href: "/icp/research/onboarding-data",
  },
  {
    title: "Articos Research",
    teaser: "21 participants, 8 themes, 24 questions — the foundational study.",
    href: "/icp/research/articos",
  },
  {
    title: "Maze / Pipedrive",
    teaser: "Survey screener (n=15) plus 25 rows of deal data confirming pricing tiers.",
    href: "/icp/research/maze-pipedrive",
  },
  {
    title: "Interviews",
    teaser: "3 founder interviews — Catherine, Marie, Bonnie. Full transcripts in Notion.",
    href: "https://app.notion.com/p/User-Interviews-37341d135bcb80a6984bd9be7e62b1bd",
    external: true,
  },
];

const PAIN_POINTS = [
  { title: "Production: The Messy Middle", teaser: "Not lacking ideas — stuck turning one concept into clean, testable variants fast." },
  { title: "Approval: Founder Signoff Cascade", teaser: "A late founder change can cascade across ad, landing page, discount logic, and links." },
  { title: "Workflow: Scattered Tools", teaser: "No single source of truth. 57% prioritize practical fit over feature richness." },
  { title: "Input: The Asset Ceiling", teaser: "Weak source footage caps value regardless of workflow speed." },
];

const KEY_FINDINGS = [
  { value: "5/5", label: "ICP scorecard evidence strength" },
  { value: "100%", label: "Tool-evaluation agreement on speed-to-output" },
  { value: "$20/mo", label: "Entry price — undercuts AdCreative.ai's $39" },
  { value: "54%", label: "Best activation rate (e-commerce segment)" },
];

const MARKET_STATS = [
  { value: "8.5%", label: "E-commerce CAGR to 2028" },
  { value: "2M+", label: "Active US Shopify stores" },
  { value: "$2.09B", label: "US Meta ad spend, 2025 (7x YoY)" },
  { value: "4.52x", label: "Beauty ROAS (highest tracked category)" },
];

const QUOTES = [
  { name: "Catherine", quote: "One asset → 40 assets." },
  { name: "Bonnie", quote: "45-tool stack with CFO pressure to consolidate." },
  { name: "Colin Voss", quote: "It has to stay controllable." },
  { name: "Kelsey Harlan", quote: "I'm asking if it saves me actual time this week." },
  { name: "Monica Granger", quote: "I'd rather run a simpler process we can repeat." },
  { name: "Brent Halstead", quote: "Who on my team this lands on Monday morning." },
  { name: "Troy Abernathy", quote: "Founder babysitting or a giant playbook — it's a no." },
];

export default function ICPPage() {
  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
      {/* Main column */}
      <div className="space-y-12">
        <div>
          <p className="font-sub text-sm font-semibold uppercase tracking-[0.2em] text-xoopah-blue">
            ICP · Decided
          </p>
          <h1 className="mt-3 max-w-2xl xoopah-display text-3xl text-black sm:text-4xl">
            <span className="xoopah-highlight">E-commerce businesses</span>{" "}
            selling physical products under their own brand.
          </h1>
        </div>

        <div className="xoopah-card xoopah-accent-blue p-6 pl-8">
          <p className="text-sm text-black/70">
            Backed by five benchmark research workstreams — Articos
            Research, founder interviews, a Maze survey, Pipedrive deal
            data, and onboarding data. Every benchmark converges on the
            same buyer.
          </p>
        </div>

        <div>
          <h2 className="font-sub text-lg font-semibold text-black">Research methods</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {RESEARCH_METHODS.map((m) => (
              <Link
                key={m.title}
                href={m.href}
                target={m.external ? "_blank" : undefined}
                rel={m.external ? "noopener noreferrer" : undefined}
                className="xoopah-card group flex flex-col justify-between p-5"
              >
                <div>
                  <p className="font-sub font-semibold text-black">{m.title}</p>
                  <p className="mt-2 text-sm text-black/60">{m.teaser}</p>
                </div>
                <span className="mt-4 text-sm font-semibold text-xoopah-blue group-hover:underline">
                  {m.external ? "Open in Notion →" : "See more →"}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-sub text-lg font-semibold text-black">Pain points</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {PAIN_POINTS.map((p) => (
              <div key={p.title} className="xoopah-card xoopah-accent-lime p-5 pl-7">
                <p className="font-sub font-semibold text-black">{p.title}</p>
                <p className="mt-2 text-sm text-black/60">{p.teaser}</p>
              </div>
            ))}
          </div>
          <Link
            href="/icp/pain-points"
            className="mt-4 inline-block text-sm font-semibold text-xoopah-blue hover:underline"
          >
            See the full pain points breakdown →
          </Link>
        </div>

        <div>
          <h2 className="font-sub text-lg font-semibold text-black">Who the buyer is</h2>
          <div className="xoopah-card mt-4 overflow-hidden">
            <table className="w-full text-left text-sm">
              <tbody>
                {[
                  ["Vertical", "Beauty/skincare 38%, Pet 19%, Electronics/home-tech 19%, Home & lifestyle 19%, Apparel 14%, Baby/kids 5%"],
                  ["AOV", "$25–$50: 38% · $50–$100: 48% · $100–$250: 14%"],
                  ["Team size", "81% run 1–3 person marketing/founder-led execution; 19% have 4+ more structured support"],
                  ["Who runs ads", "57% in-house marketer/paid lead; 43% founder/owner directly — 76% have founder involved in approvals either way"],
                  ["Revenue tier", "Low 5-fig 10% · low 6-fig 43% · low-mid 6-fig 38% · mid-high 6-fig 10%"],
                  ["Channel + cadence", "Meta = primary paid channel for 100%; 76% refresh creative weekly or more often"],
                ].map(([attr, finding], i) => (
                  <tr key={attr} className={i !== 0 ? "border-t border-black/5" : ""}>
                    <td className="w-40 shrink-0 px-5 py-4 align-top font-sub font-semibold text-black">
                      {attr}
                    </td>
                    <td className="px-5 py-4 text-black/70">{finding}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="xoopah-card xoopah-accent-blue p-6 pl-8">
          <h2 className="font-sub text-lg font-semibold text-black">Key findings</h2>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {KEY_FINDINGS.map((f) => (
              <div key={f.label}>
                <p className="text-xl font-extrabold text-black">{f.value}</p>
                <p className="mt-1 text-xs text-black/50">{f.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Side column */}
      <div className="space-y-6 lg:sticky lg:top-28 lg:self-start">
        <div className="xoopah-card xoopah-accent-lime p-5 pl-7">
          <h3 className="font-sub text-sm font-semibold uppercase tracking-wide text-black/40">
            E-commerce, US
          </h3>
          <div className="mt-3 space-y-3">
            {MARKET_STATS.map((s) => (
              <div key={s.label}>
                <p className="text-lg font-extrabold text-black">{s.value}</p>
                <p className="text-xs text-black/50">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="xoopah-card xoopah-accent-lime p-5 pl-7">
          <h3 className="font-sub text-sm font-semibold uppercase tracking-wide text-black/40">
            In their words
          </h3>
          <div className="mt-3 space-y-3">
            {QUOTES.map((q) => (
              <div key={q.name} className="border-t border-black/5 pt-3 first:border-0 first:pt-0">
                <p className="text-sm italic text-black/70">&quot;{q.quote}&quot;</p>
                <p className="mt-1 text-xs font-semibold text-black/40">— {q.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="xoopah-card xoopah-accent-lime p-5 pl-7">
          <h3 className="font-sub text-sm font-semibold uppercase tracking-wide text-black/40">
            What&apos;s next
          </h3>
          <p className="mt-3 text-sm text-black/60">
            No source has interviewed a switched-away D2C brand yet, and the
            54% activation ceiling points to onboarding friction worth
            digging into.
          </p>
          <Link
            href="/icp/what-next"
            className="mt-3 inline-block text-sm font-semibold text-xoopah-blue hover:underline"
          >
            See the full analysis →
          </Link>
        </div>
      </div>
    </div>
  );
}
