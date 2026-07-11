import Link from "next/link";

const STATS = [
  { value: "$20/mo", label: "All Access price point", accent: "xoopah-accent-blue" },
  { value: "5", label: "Ad creation tools (Avatars, Remix, Static, Voiceover, + Video)", accent: "xoopah-accent-lime" },
  { value: "Meta Ads", label: "Guided ad launch flow, live today", accent: "xoopah-accent-coral" },
  { value: "550+", label: "Onboarding data points analyzed", accent: "xoopah-accent-pink" },
];

const CHANNELS = [
  { href: "/content/meta-ads", title: "Paid Ads", desc: "Meta creative scripts and copy — Google Ads onboarding underway.", accent: "xoopah-accent-blue" },
  { href: "/content/socials", title: "Socials", desc: "Feb '26 and June '26 calendars, Facebook and Instagram pages.", accent: "xoopah-accent-yellow" },
  { href: "/content/community", title: "Communities", desc: "Growth strategy and Facebook group content ideas.", accent: "xoopah-accent-lime" },
  { href: "/website", title: "Website", desc: "Six-phase rebuild — Webflow dev engaged, targeting mid-July.", accent: "xoopah-accent-orange" },
  { href: "/content/emails", title: "Emails", desc: "DIY-to-DFY offer and Ad Creative launch announcement copy.", accent: "xoopah-accent-pink" },
  { href: "/icp/what-next", title: "ICP Validation", desc: "Open research threads and next steps for validating the ICP.", accent: "xoopah-accent-coral" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-16">
      <section className="xoopah-wave-band rounded-[2.5rem] px-8 py-14 sm:px-14 sm:py-16">
        <div className="xoopah-wave-texture" aria-hidden="true" />
        <p className="font-sub text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
          Marketing OS
        </p>
        <h1 className="xoopah-display mt-4 max-w-3xl text-5xl text-white sm:text-6xl">
          Everything Xoopah marketing,{" "}
          <span className="xoopah-highlight text-black">in one friendly place</span>.
        </h1>
        <p className="mt-5 max-w-lg text-base text-white/80">
          Brand, ICP, competitors, content, and channels — pulled from real
          research, not placeholders.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="xoopah-card xoopah-accent-blue p-6 pl-8">
          <h2 className="font-sub text-sm font-semibold uppercase tracking-wide text-black/40">
            What Xoopah is
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-black/70">
            An AI-powered ad creation <em>and</em> ad launch platform for
            small business owners in the US. All Access Plan: $20/month,
            14-day free trial. Five creation tools — AI UGC Avatars, AI
            Remix, Static Editor, Voiceover, and upcoming Video Templates —
            plus a guided Meta Ads launch flow.
          </p>
        </div>
        <div className="xoopah-card xoopah-accent-pink p-6 pl-8">
          <h2 className="font-sub text-sm font-semibold uppercase tracking-wide text-black/40">
            ICP
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-black/70">
            E-commerce brands in the US — selling physical products under
            their own name, including brands that layer a services offering
            alongside their products. See the H2 update for what's new.
          </p>
          <Link href="/h2/icp" className="mt-4 inline-block text-sm font-semibold text-xoopah-blue hover:underline">
            See the H2 ICP update →
          </Link>
        </div>
      </section>

      <section className="xoopah-card xoopah-accent-orange p-6 pl-8 lg:p-8 lg:pl-10">
        <span className="rounded-full bg-xoopah-light-blue px-3 py-1 text-xs font-semibold text-xoopah-blue">
          Positioning — open right now
        </span>
        <h2 className="mt-3 font-sub text-lg font-semibold text-black">
          Recommended: workflow compression + variants
        </h2>
        <p className="mt-2 max-w-2xl text-sm italic text-black/70">
          &quot;Turn one proven ad angle into dozens of launch-ready
          variants — in minutes, with no designer, no agency, and nothing
          else added to your stack.&quot;
        </p>
        <Link href="/brand/positioning" className="mt-4 inline-block text-sm font-semibold text-xoopah-blue hover:underline">
          See all positioning options →
        </Link>
      </section>

      <section>
        <h2 className="xoopah-display text-2xl text-black">Channels</h2>
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CHANNELS.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className={`xoopah-card ${c.accent} group flex flex-col justify-between p-6 pl-8 transition-transform hover:-translate-y-1`}
            >
              <div>
                <h3 className="font-sub text-lg font-semibold text-black">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-black/60">{c.desc}</p>
              </div>
              <span className="mt-6 text-sm font-semibold text-xoopah-blue group-hover:underline">
                Open →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className={`xoopah-card ${s.accent} p-4 pl-6`}>
            <p className="xoopah-display text-2xl text-black">{s.value}</p>
            <p className="mt-1 text-xs text-black/50">{s.label}</p>
          </div>
        ))}
      </section>

      <section className="xoopah-card xoopah-accent-lime p-6 pl-8 lg:p-8 lg:pl-10">
        <span className="rounded-full bg-[#EFFBD9] px-3 py-1 text-xs font-semibold text-black/60">
          North Star
        </span>
        <h2 className="mt-3 font-sub text-lg font-semibold text-black">
          Get to Product-Market Fit — this year.
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-black/70">
          Every workstream on this page — brand, ICP, content, channels —
          is in service of one goal for 2026: reaching real PMF.
        </p>
      </section>
    </div>
  );
}
