import Link from "next/link";

const ROWS = [
  { module: "AI Avatar — Competitive Landscape", competitor: "—", category: "Feature Launch", insight: "HeyGen ($100M ARR, $500M val) dominates on quality. Arcads premium-priced. Synthesia enterprise-only. Xoopah's gap: no hand-held/product-in-use demos.", trigger: true, date: "Jul 9, 2026" },
  { module: "Static Creatives — Competitive Landscape", competitor: "—", category: "Positioning", insight: "AdCreative.ai ($29–374/mo, billing complaints) is closest but targets agencies. Canva is the real substitute. Xoopah wins on speed-to-variant + flat pricing.", trigger: true, date: "Jul 9, 2026" },
  { module: "Ad Launcher — Competitive Landscape", competitor: "—", category: "Feature Launch", insight: "Creatify AdMax is closest integrated competitor. AdStellar does push-to-Meta. Meta's native AI tools are the biggest long-term category risk.", trigger: true, date: "Jul 9, 2026" },
  { module: "Voiceover — Competitive Landscape", competitor: "—", category: "Positioning", insight: "Voiceover is least-differentiated standalone. ElevenLabs sets quality bar. CapCut is the free substitute. Value is only within integrated ad workflow.", trigger: false, date: "Jul 9, 2026" },
  { module: "AI Remix — Competitive Landscape", competitor: "—", category: "Feature Launch", insight: "Creatify ($9M ARR, 1M+ users) is the pace-setter threat: same segment, similar price, faster growth. Icon is premium DTC. Topview is cheap but low quality.", trigger: true, date: "Jul 9, 2026" },
  { module: "AdCreative.ai: acquired by Appier (Feb 2025); billing complaints + weaker video", competitor: "AdCreative.ai", category: "Feature Launch", insight: "$29–374/mo, static+video+scoring, targets agencies/marketers. Billing complaints are an active switch trigger to exploit in comparison content.", trigger: true, date: "Jun 18, 2026" },
  { module: "Arcads: best-in-class avatar realism at premium pricing ($110–220/mo, no free trial)", competitor: "Arcads", category: "Pricing", insight: "1,000+ actors, talking-heads only. Premium price is a switch trigger for budget-constrained SMBs — Xoopah's $20 entry undercuts by 5x.", trigger: true, date: "Jun 18, 2026" },
  { module: "Predis.ai: all-in-one social for solopreneurs ($19–40/mo) — closest price-point neighbor", competitor: "Predis.ai", category: "Pricing", insight: "Social content + UGC avatars + scheduling. Weak video, not performance-grade — but overlaps Xoopah's price band and solo-operator audience most directly.", trigger: false, date: "Jun 18, 2026" },
  { module: "MakeUGC: low-cost DTC utility ($49–119/mo), reference-video recreation", competitor: "MakeUGC", category: "Creative", insight: "Narrower toolset; DTC/e-comm focused.", trigger: false, date: "Jun 18, 2026" },
  { module: "Topview: cheapest direct competitor (~$16/mo) with product-holding avatars", competitor: "Topview", category: "Pricing", insight: "URL→ad, video cloning, product avatars. Notably has product-holding avatars — relevant to Xoopah's known AI Avatar hand-held product limitation. Quality limits, weak long-form.", trigger: true, date: "Jun 18, 2026" },
  { module: "Watch trigger: if Creatify or Icon launches a 'local services' vertical SKU → accelerate land-grab + agency partnerships", competitor: "Creatify", category: "Feature Launch", insight: "Named benchmark from H1 ICP research that would change the GTM plan. Monitor monthly.", trigger: true, date: "Jun 18, 2026" },
  { module: "WHITESPACE: no direct AI UGC/ad tool markets to local personal-care/wellness or home services", competitor: "Other", category: "Positioning", insight: "Every funded competitor is DTC/performance-marketer-shaped. Local SMBs default to Canva/CapCut/agencies. This is the defensible wedge — \u2018AI ad creative built for local service SMBs\u2019 at $20-200/mo.", trigger: true, date: "Jun 18, 2026" },
  { module: "Creatify: $15.5M Series A, $9M ARR in 18mo, 1M+ users — the pace-setter in DTC", competitor: "Creatify", category: "Positioning", insight: "URL→video, 1,500 AI avatars, batch, AdMax. $19-49+/mo credit-based. Weaknesses: lip-sync/quality inconsistency, credit confusion. Targets e-comm/performance marketers — not local SMBs.", trigger: true, date: "Jun 18, 2026" },
  { module: "Icon: $399/mo human-UGC tier, Founders Fund-backed, DTC-shaped ($100M+ brands)", competitor: "Icon", category: "Positioning", insight: "\u2018AI Admaker\u2019 full workflow; ~$5M rev, 76 staff, $12M domain. Strong positioning but priced and shaped for large DTC — leaves the solo operator open.", trigger: false, date: "Jun 18, 2026" },
  { module: "Substitutes: freelance UGC averages ~$198/deliverable with 2-4 week turnaround", competitor: "Other", category: "Pricing", insight: "Billo $59-99+/video, Insense $299-500+/mo + fees, JoinBrands $25-29+ + 15-20%. Speed + cost displacement is Xoopah's clearest substitution story.", trigger: true, date: "Jun 18, 2026" },
  { module: "Synthesia: ~$2.1B valuation, ~$146M ARR — enterprise training video, not UGC ads", competitor: "Synthesia", category: "Positioning", insight: "$18-89/mo + enterprise; Adobe $10M strategic. Enterprise trust but not ad/UGC-native — no overlap with Xoopah's wedge.", trigger: false, date: "Jun 18, 2026" },
  { module: "Pencil (Brandtech): enterprise agentic marketing OS, 5,000+ brands", competitor: "Pencil", category: "Positioning", insight: "$14-55/mo + enterprise custom; predictive scoring + governance. Enterprise-first — not a threat in the SMB wedge.", trigger: false, date: "Jun 18, 2026" },
  { module: "HeyGen: ~$95-100M ARR, ~$500M valuation — avatar leader but not ad-specific", competitor: "HeyGen", category: "Positioning", insight: "$24-149/mo credits. Strength is avatar quality; weakness is credit math and no ad-native workflow. Serves creators/SMB/mid-market, not local service verticals.", trigger: false, date: "Jun 18, 2026" },
];

export default function CompetitorMonitoringPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-2 text-xs text-black/40">
          <Link href="/h1" className="hover:text-xoopah-blue">H1</Link> / Competitor Monitoring
        </p>
        <p className="font-sub text-sm font-semibold uppercase tracking-[0.2em] text-xoopah-blue">
          Competitor Monitoring
        </p>
        <h1 className="mt-3 xoopah-display text-3xl text-black">
          {ROWS.length} tracked entries
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-black/60">
          Full tracker from Notion — creative, pricing, positioning, and
          feature-launch intel across 14 named competitors plus category
          landscapes.
        </p>
      </div>

      <div className="space-y-4">
        {ROWS.map((r) => (
          <div key={r.module} className="xoopah-card xoopah-accent-lime p-5 pl-7">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="font-sub font-semibold text-black">{r.module}</p>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-xoopah-light-blue px-3 py-1 text-xs font-semibold text-xoopah-blue">
                  {r.category}
                </span>
                {r.trigger && (
                  <span className="rounded-full bg-[#FFE9D6] px-3 py-1 text-xs font-semibold text-[#B65A17]">
                    Switch trigger
                  </span>
                )}
              </div>
            </div>
            <p className="mt-2 text-sm text-black/70">{r.insight}</p>
            <p className="mt-2 text-xs text-black/40">{r.competitor !== "—" ? `${r.competitor} · ` : ""}{r.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
