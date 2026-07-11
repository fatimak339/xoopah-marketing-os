import Link from "next/link";

const ENTRIES = [
  { insight: "New DTC ICP Interviews (to be populated)", type: "Interview", cluster: null, painPoint: null, quote: null },
  { insight: "Wendy (kitchen & bath remodeling) — Niche insight is the first thing she'd hand off", type: "Interview", cluster: "The Constrained Creator", painPoint: "Niche research / 'what works in my niche'. Time + lack of audience insight. Strongly avoids tools with any learning curve.", quote: "Trust threshold = simplicity, clear step-by-step." },
  { insight: "ICP 1-Pager Report (Fatima Khan, H1 2026)", type: "Secondary Research", cluster: null, painPoint: null, quote: null },
  { insight: "D2C GTM Research Report (Articos + 5 Workstreams, July 2026)", type: "Secondary Research", cluster: null, painPoint: null, quote: null },
  { insight: "Onboarding (n=550): Home Services validated by interviews but activation lags (25%) — likely a 'what do I make first' gap", type: "Onboarding Data", cluster: null, painPoint: "Signup interest exists (64%) but activation drop suggests UX friction or unclear first action.", quote: null },
  { insight: "Bonnie (Golids) — Established B2B+D2C brand; execution is the chokepoint, not budget", type: "Interview", cluster: "The Established Owner", painPoint: "Video editing from raw footage (production time). Has a 4-5 person team and resources but hands-on owner still drives most ideation/creation/editing (~50% of her time).", quote: "Trust threshold = reliability, after bad experiences with a hallucinating bot and a tool that wrecked an ad. ~45 tools in stack." },
  { insight: "Brittany (brow & waxing salon) — Fresh ideas without relying on trends", type: "Interview", cluster: "The Established Owner", painPoint: "Coming up with fresh, original ideas. Has 1 SMM for execution; owns strategy ~4 hrs/week. Skill/time constraint, not budget.", quote: "High AI comfort (Canva AI, ChatGPT, CapCut), open to avatars/voiceovers; output-first with minimal editing." },
  { insight: "Mike/Waleed (pressure washing) — AI for ideation, human needed for execution", type: "Interview", cluster: "The Delegator", painPoint: "AI is ~30% of workflow, the rest is handed to a designer. Retention-first local service model; Waleed owns marketing.", quote: "Paid Claude subscriber; uses LLMs for reporting, keyword insights, ad/website copy." },
  { insight: "Catherine (Aurora, DTC women's health) — 'One asset → 40 assets' repurposing is the core drain", type: "Interview", cluster: "The Established Owner", painPoint: "Repurposing/atomization; secondary: Meta censorship in a sensitive vertical with zero Meta support. Deliberately lean 2-person team.", quote: "'One asset → 40 assets.' Cool on AI-generated video, '100%' wants AI editing; brand-kit compliance required; ~$15/mo price ceiling." },
  { insight: "Onboarding (n=550): E-commerce has the highest activation (54%, 1.00 asset/user) but lowest signup rate (39%)", type: "Onboarding Data", cluster: null, painPoint: "Strong product-market fit once in the funnel; low signup suggests a top-of-funnel/targeting gap, not a product gap.", quote: null },
  { insight: "Funnel data (Mar 17 - Apr 6): click-to-signup funnel loses most users between trial start and generation", type: "Onboarding Data", cluster: null, painPoint: "253 landing page → 71 trials (28%) → 54 business info → 36 generated → 28 signed up. Only 7 returned. The generation→return step is the retention break.", quote: null },
  { insight: "Market research: Local/physical services are the whitespace beachhead — no direct AI UGC competitor targets them", type: "Secondary Research", cluster: null, painPoint: "1M+ salons, 10K+ med spas, 114K gyms increasingly run short-form video ads but default to Canva/CapCut/agencies. Every funded competitor is DTC/performance-marketer-shaped.", quote: null },
  { insight: "Asha (personal brand) — Ideation + capacity are the #1 drains for solo operators", type: "Interview", cluster: "The Constrained Creator", painPoint: "Ideation / 'what will convert' is #1, plus capacity ('I need an assistant'). Time + lack of audience insight, compounded by budget.", quote: "Power LLM user but AI-image stigma limits adoption; wants to see output before posting." },
  { insight: "Broad ICP Interviews (8 subjects, H1 2026)", type: "Interview", cluster: null, painPoint: null, quote: null },
  { insight: "Jen (Acrosphere Circus) — Skill/insight gap, not time: beating her own winning formula", type: "Interview", cluster: "The Numbers-Driven Operator", painPoint: "Ideation (new offers/creative that beats what already works) + nailing ad copy. ~2 hrs per ad on a tight repeatable formula.", quote: "Resistant to learning new platforms; a tool must respect real business constraints." },
  { insight: "Jeff Wright (loan broker) — Agency failure created a first-time self-serve adopter", type: "Interview", cluster: "The Credibility Seeker", painPoint: "Lead quality + agency failure (4 leads/mo, zero qualified, $14-16K wasted). 'I don't know how to run social ads.' Budget NOT a blocker.", quote: "Trust threshold = polish/professionalism above all." },
  { insight: "Onboarding (n=550): Salons/Beauty under-delivers on its interview promise (24% activation) — possible vertical-specific onboarding friction", type: "Onboarding Data", cluster: null, painPoint: "High fit per Brittany interview, but onboarding completion (57%) and activation are below segment average.", quote: null },
  { insight: "Onboarding (n=550): Consulting/Coaching is the largest segment (15%) but low activation (33%, 0.45 assets/user)", type: "Onboarding Data", cluster: null, painPoint: "Many sign up out of curiosity, fewer follow through to creation — volume without conversion.", quote: null },
  { insight: "Market research: DTC e-commerce is the largest spend pool but most over-served (10+ funded AI ad tools)", type: "Secondary Research", cluster: null, painPoint: "Use DTC beauty/skincare as a secondary credibility beachhead, not the primary wedge. CAC up ~40-60% since 2023 keeps creative-testing demand strong.", quote: null },
];

export default function ResearchRepositoryPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-2 text-xs text-black/40">
          <Link href="/h1" className="hover:text-xoopah-blue">H1</Link> / Research Repository
        </p>
        <p className="font-sub text-sm font-semibold uppercase tracking-[0.2em] text-xoopah-blue">
          Research Repository
        </p>
        <h1 className="mt-3 xoopah-display text-3xl text-black">
          {ENTRIES.length} research entries
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-black/60">
          Interviews, onboarding data, and secondary research — pulled
          directly from Notion.
        </p>
      </div>

      <div className="xoopah-card border-2 border-dashed border-[#FFB380] p-6">
        <p className="font-sub text-sm font-semibold text-black">
          Worth flagging
        </p>
        <p className="mt-2 text-sm text-black/70">
          This repository contains a second, separate interview thread (Wendy,
          Brittany, Mike/Waleed, Jeff Wright, Jen, Asha) pointing toward{" "}
          <strong>local/physical services as a whitespace beachhead</strong> —
          distinct from the D2C e-commerce research the current ICP decision
          is based on. One entry explicitly states: &quot;no direct AI UGC/ad
          tool markets to local personal-care/wellness or home services&quot;
          and flags DTC e-commerce as &quot;the largest spend pool but most
          over-served.&quot; This doesn&apos;t change the decided ICP on its
          own, but it's real evidence worth reconciling with the D2C
          research before the next ICP review.
        </p>
      </div>

      <div className="space-y-4">
        {ENTRIES.map((e, i) => (
          <div key={i} className="xoopah-card xoopah-accent-lime p-5 pl-7">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="font-sub font-semibold text-black">{e.insight}</p>
              <span className="rounded-full bg-black/[0.05] px-3 py-1 text-xs font-semibold text-black/60">
                {e.type}
              </span>
            </div>
            {e.cluster && (
              <span className="mt-2 inline-block rounded-full bg-xoopah-light-blue px-3 py-1 text-xs font-semibold text-xoopah-blue">
                {e.cluster}
              </span>
            )}
            {e.painPoint && <p className="mt-2 text-sm text-black/70">{e.painPoint}</p>}
            {e.quote && <p className="mt-2 text-sm italic text-black/50">&quot;{e.quote}&quot;</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
