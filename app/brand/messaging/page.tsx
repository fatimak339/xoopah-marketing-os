const TONE = ["Friendly", "Human", "Direct", "Warm", "Confident", "Outcome-oriented"];
const AVOID = [
  "Marketing jargon",
  "Corporate language",
  "Buzzwords (\u201csynergy,\u201d \u201cdisruptive,\u201d \u201cholistic\u201d)",
  "Long explanations",
  "Hedging words: \u201cmight,\u201d \u201ccould,\u201d \u201cperhaps\u201d",
];

const PROMISE_LINES = [
  "Turn one product shot into dozens of ready-to-launch ad variants.",
  "Create scroll-stopping ads for your products — no designer needed.",
  "Stop starting from scratch. Start remixing what already works.",
  "Your products, turned into ads that convert.",
  "More variants, less time, still your brand.",
  "The fastest way from one product photo to a full ad set.",
];

const FEATURES = [
  { name: "AI UGC Avatars", desc: "Talking, on-brand creators for your products — no filming required." },
  { name: "AI Remix", desc: "One prompt turns a proven ad angle into a fresh, on-brand variant." },
  { name: "Static Editor", desc: "Clean, scroll-stopping product statics — built for e-commerce feeds." },
  { name: "Voiceover", desc: "Add a script-to-voice layer to any video ad in minutes." },
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
          Ad creation, <span className="xoopah-highlight">built for e-commerce brands</span>.
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-black/60">
          Xoopah is a creation tool first — four features that turn one
          product or one proven ad angle into many ready-to-launch
          variants, for e-commerce brands who need volume without a
          design team. Friendly, direct, and warm — never launch-flow
          jargon, never corporate.
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
          Pain point → Xoopah as the creation engine → low-friction CTA.
        </p>
        <div className="mt-4 flex flex-col gap-2 text-sm sm:flex-row sm:items-center">
          <span className="rounded-xl bg-[#FFE9D6] px-3 py-2 font-semibold">&quot;One ad angle isn&apos;t enough anymore.&quot;</span>
          <span className="text-black/30">→</span>
          <span className="rounded-xl bg-xoopah-light-blue px-3 py-2 font-semibold">&quot;Xoopah turns it into dozens of variants.&quot;</span>
          <span className="text-black/30">→</span>
          <span className="rounded-xl bg-[#D6FC93] px-3 py-2 font-semibold">&quot;Try Xoopah today.&quot;</span>
        </div>
      </div>

      <div>
        <h2 className="font-sub text-lg font-semibold text-black">The four features</h2>
        <p className="mt-1 text-sm text-black/60">
          Video Templates is a fifth, upcoming creation tool — not live yet.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {FEATURES.map((f) => (
            <div key={f.name} className="xoopah-card xoopah-accent-lime p-5 pl-7">
              <p className="font-sub font-semibold text-black">{f.name}</p>
              <p className="mt-1 text-sm text-black/60">{f.desc}</p>
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
