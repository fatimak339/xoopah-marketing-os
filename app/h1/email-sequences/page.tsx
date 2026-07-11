import Link from "next/link";

const SEQUENCES = [
  { email: "Onboarding: Fresh Signup, No Action — 3-email sequence", sequence: "Onboarding", status: "Draft", step: 3, segment: "Signed up, no onboarding in 24h. 2h warm welcome → 24h social proof/quick win → day 3 'make 2 creatives, get x free' nudge. Churn at day 3." },
  { email: "Ad Creative Launch Announcement", sequence: "Launch", status: "Sent", step: null, segment: "Product launch announcement to existing audience." },
  { email: "Win-back: Abandoned Mid-Flow (Guest) — 3-email sequence", sequence: "Win-back", status: "Draft", step: 3, segment: "Dropped launch/creative flow entirely, no save. 'Did something go wrong?' → address drop-off reasons → shortest route to live ad. Churn at day 7." },
  { email: "Win-back: Creative Generated, No Action (Guest) — 4-email sequence", sequence: "Win-back", status: "Draft", step: 4, segment: "Generated a creative but no download/ad/second creative within 48h. Variations → ready-to-use reminder → 'good enough?' → final push + incentive. Churn at day 10." },
  { email: "DIY to DFY — Free 2 Months Offer", sequence: "Win-back", status: "Sent", step: null, segment: "Upgrade/re-engagement offer moving DIY users toward DFY with a 2-month incentive." },
  { email: "Onboarding: Started Creative Flow, Dropped — 3-email sequence", sequence: "Onboarding", status: "Draft", step: 3, segment: "Entered creative flow post-onboarding but didn't complete. Friction → confidence → final nudge with 3 bonus creatives/mo for 3 months. Churn at day 6." },
  { email: "Win-back: Draft Abandoned (Guest) — 3-email sequence", sequence: "Win-back", status: "Draft", step: 3, segment: "Started a creative (Static/UGC/Remix/Ad) but didn't generate. Emails at 24h ('where did you get stuck?'), 48h ('doesn't have to be perfect'), day 3 (nudge + incentive). Churn at day 6." },
  { email: "Nurture: Churned Users Long-Term Track (calendar-anchored)", sequence: "Nurture", status: "Draft", step: null, segment: "Exited sequences or 30 days inactive. 1mo: what's new · 2mo: value reminder · seasonal moments · major releases. No pressure, just presence." },
  { email: "Win-back: Launched, Paused, Didn't Return — 5-email sequence (high intent)", sequence: "Win-back", status: "Draft", step: 5, segment: "Saved/paused ad, no return in 48h. Help offer → friction → reassurance ('your ad is saved') → social proof → final: we'll help launch, no charge. Churn at day 10." },
  { email: "Onboarding: Started Ad Launch Flow, Dropped — 3-email sequence", sequence: "Onboarding", status: "Draft", step: 3, segment: "Entered launch flow, dropped before completing. Blockers (budget/targeting) → simplify + Calendly → final push: $50 personalized launch service at $20. Churn at day 10." },
  { email: "Win-back: Made a Creative, Didn't Launch — 4-email sequence", sequence: "Win-back", status: "Draft", step: 4, segment: "Completed creative, never launched. What launching unlocks ×2 → hesitation handling + Calendly → 'make more free, launch the best' with no extra billing. Churn at day 10." },
  { email: "Onboarding: Completed Step 1, Zero Activity — 4-email sequence", sequence: "Onboarding", status: "Draft", step: 4, segment: "Finished onboarding, never touched a feature. 'High-performing ad in 5 mins' → demystify + Calendly → FOMO quick win → soft urgency + personalized support offer. Churn at day 7." },
];

const STATUS_COLOR: Record<string, string> = {
  Sent: "bg-[#D9F2E3] text-[#1E7A46]",
  Draft: "bg-xoopah-light-blue text-xoopah-blue",
};

export default function EmailSequencesPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-2 text-xs text-black/40">
          <Link href="/h1" className="hover:text-xoopah-blue">H1</Link> / Email Sequences
        </p>
        <p className="font-sub text-sm font-semibold uppercase tracking-[0.2em] text-xoopah-blue">
          Email Sequences
        </p>
        <h1 className="mt-3 xoopah-display text-3xl text-black">
          {SEQUENCES.length} lifecycle sequences
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-black/60">
          Onboarding, win-back, launch, and nurture — mapped by segment and
          trigger, drafted for Brevo.
        </p>
      </div>

      <div className="space-y-4">
        {SEQUENCES.map((s) => (
          <div key={s.email} className="xoopah-card xoopah-accent-lime p-5 pl-7">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="font-sub font-semibold text-black">{s.email}</p>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-black/[0.05] px-3 py-1 text-xs font-semibold text-black/60">
                  {s.sequence}{s.step ? ` · ${s.step} steps` : ""}
                </span>
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${STATUS_COLOR[s.status] ?? ""}`}>
                  {s.status}
                </span>
              </div>
            </div>
            <p className="mt-2 text-sm text-black/60">{s.segment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
