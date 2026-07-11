const TONE = ["Friendly", "Human", "Direct", "Warm", "Confident", "Outcome-oriented"];
const AVOID = [
  "Marketing jargon",
  "Corporate language",
  "Buzzwords (\u201csynergy,\u201d \u201cdisruptive,\u201d \u201cholistic\u201d)",
  "Long explanations",
  "Hedging words: \u201cmight,\u201d \u201ccould,\u201d \u201cperhaps\u201d",
];

const PROMISE_LINES = [
  "Launch ads that work, without the overwhelm.",
  "Create ads that work, without the expertise.",
  "Get clients through ads, without the hassle.",
  "Your ads, built and launched — no agency, no guesswork.",
  "Stop figuring out ads. Start getting clients.",
  "The fastest way from \u2018I want to run ads\u2019 to \u2018my ads are live.\u2019",
];

const PILLARS = [
  { name: "Guided Setup", desc: "From strategy to live campaign, step by step" },
  { name: "Proven Strategies", desc: "Pre-tested templates built for your industry" },
  { name: "Smart Suggestions", desc: "AI-powered headlines, captions, and CTAs" },
  { name: "Clear Results", desc: "Plain-language reporting, not charts" },
  { name: "Human Backup", desc: "Real support when you need it" },
];

const CHARACTERS = [
  {
    name: "Harvey Specter",
    ref: "Suits",
    note: "Razor-sharp, supremely confident, never wastes words. Speaks in outcomes, not explanations. Xoopah's tone when addressing owners who've been burned by agencies.",
  },
  {
    name: "Annalise Keating",
    ref: "How to Get Away with Murder",
    note: "Direct, commanding, genuinely invested in the win. Warm beneath the authority. Xoopah's voice when coaching a first-time advertiser through their first campaign.",
  },
];

const TESTIMONIALS = [
  { name: "Kris Benson", quote: "The creativity exceeded expectations and they offered something I didn\u2019t even think of!" },
  { name: "Walter Wilson", quote: "The communication was excellent, the team is professional, and they\u2019re determined to help." },
  { name: "Vaishaliben", quote: "An amazing team with incredible support at Xoopah. Everyone is responsive, professional, and genuinely cares about helping you succeed." },
];

export default function BrandMessagingPage() {
  return (
    <div className="space-y-12">
      <div>
        <p className="mb-2 text-xs text-black/40">
          <a href="/brand" className="hover:text-xoopah-blue">Brand</a> / Messaging
        </p>
        <p className="font-sub text-sm font-semibold uppercase tracking-[0.2em] text-xoopah-blue">
          Brand · Messaging
        </p>
        <h1 className="mt-3 xoopah-display text-3xl text-black">
          The sharp friend who <span className="xoopah-highlight">knows marketing</span>.
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-black/60">
          Direct. Action-oriented. Warm but not fluffy. Speaks in outcomes,
          not features. If a small business owner wouldn&apos;t understand
          it immediately, it doesn&apos;t belong in Xoopah&apos;s copy.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="xoopah-card xoopah-accent-blue p-6 pl-8">
          <h2 className="font-sub text-sm font-semibold uppercase tracking-wide text-black/40">
            Tone
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {TONE.map((t) => (
              <span key={t} className="rounded-full bg-xoopah-light-blue px-3 py-1 text-sm font-semibold text-xoopah-blue">
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="xoopah-card xoopah-accent-blue p-6 pl-8">
          <h2 className="font-sub text-sm font-semibold uppercase tracking-wide text-black/40">
            Never
          </h2>
          <ul className="mt-3 space-y-1.5 text-sm text-black/60">
            {AVOID.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="xoopah-card xoopah-accent-blue p-6 pl-8">
        <h2 className="font-sub text-lg font-semibold text-black">Messaging framework</h2>
        <p className="mt-2 text-sm text-black/60">
          Pain point → Xoopah as the solution → low-friction CTA.
        </p>
        <div className="mt-4 flex flex-col gap-2 text-sm sm:flex-row sm:items-center">
          <span className="rounded-xl bg-[#FFE9D6] px-3 py-2 font-semibold">&quot;Generic ads don&apos;t convert.&quot;</span>
          <span className="text-black/30">→</span>
          <span className="rounded-xl bg-xoopah-light-blue px-3 py-2 font-semibold">&quot;Xoopah creates better ads in minutes.&quot;</span>
          <span className="text-black/30">→</span>
          <span className="rounded-xl bg-[#D6FC93] px-3 py-2 font-semibold">&quot;Try Xoopah today.&quot;</span>
        </div>
      </div>

      <div>
        <h2 className="font-sub text-lg font-semibold text-black">5 Solution Pillars</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {PILLARS.map((p) => (
            <div key={p.name} className="xoopah-card xoopah-accent-lime p-5 pl-7">
              <p className="font-sub font-semibold text-black">{p.name}</p>
              <p className="mt-1 text-sm text-black/60">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-sub text-lg font-semibold text-black">Brand promise lines</h2>
        <div className="mt-4 xoopah-card divide-y divide-black/5">
          {PROMISE_LINES.map((line) => (
            <p key={line} className="px-6 py-3 text-sm font-semibold text-black">
              &quot;{line}&quot;
            </p>
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-sub text-lg font-semibold text-black">Voice references</h2>
        <p className="mt-1 text-sm text-black/60">
          Cultural archetypes Xoopah&apos;s voice lives closest to.
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {CHARACTERS.map((c) => (
            <div key={c.name} className="xoopah-card xoopah-accent-blue p-6 pl-8">
              <p className="font-sub font-semibold text-black">
                {c.name} <span className="font-normal text-black/40">({c.ref})</span>
              </p>
              <p className="mt-2 text-sm text-black/60">{c.note}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-sub text-lg font-semibold text-black">On-site testimonials</h2>
        <p className="mt-1 text-sm text-black/60">
          Warm in tone but lack specificity — no metrics, roles, or business
          names. Worth strengthening to match the Results-focused brand trait.
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="xoopah-card xoopah-accent-lime p-5 pl-7">
              <p className="text-sm italic text-black/70">&quot;{t.quote}&quot;</p>
              <p className="mt-3 text-xs font-semibold text-black/50">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="font-sub text-lg font-semibold text-black">Channel voice</h2>
        <p className="mt-1 text-sm text-black/60">
          Each channel has a distinct role and vibe — together they move a
          stranger from discovery to paying customer.
        </p>
        <div className="mt-4 xoopah-card overflow-hidden">
          <table className="w-full text-left text-sm">
            <tbody>
              {[
                ["Paid Ads (Meta)", "Direct pull-in engine", "Punchy, outcome-first, no warming up needed"],
                ["Website", "Education + conversion engine", "Clear, outcome-led, deeply relevant to the reader's situation"],
                ["Instagram", "Brand stylist — visual identity + lifestyle", "Polished but real; less selling, more aspiration"],
                ["Facebook Page", "Community hub — real conversations", "Conversational, warm, peer-to-peer"],
                ["Facebook Community", "Solve + build together", "Collaborative, supportive, problem-solving"],
                ["LinkedIn", "Trust + authority builder", "Thoughtful, direct, slightly more formal — never promotional"],
                ["YouTube / TikTok", "The educator", "Approachable, fast-paced, practical — no fluff"],
              ].map(([channel, role, vibe], i) => (
                <tr key={channel} className={i !== 0 ? "border-t border-black/5" : ""}>
                  <td className="w-40 shrink-0 px-5 py-4 align-top font-sub font-semibold text-black">
                    {channel}
                  </td>
                  <td className="w-56 shrink-0 px-5 py-4 align-top text-black/70">{role}</td>
                  <td className="px-5 py-4 text-black/60">{vibe}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
