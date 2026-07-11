import Link from "next/link";

const STATS = [
  { value: "$20/mo", label: "All Access price", accent: "xoopah-accent-blue" },
  { value: "54%", label: "Best ICP activation rate", accent: "xoopah-accent-lime" },
  { value: "4.52x", label: "Beauty category ROAS", accent: "xoopah-accent-coral" },
  { value: "14", label: "Competitors tracked", accent: "xoopah-accent-orange" },
  { value: "32", label: "Content items in pipeline", accent: "xoopah-accent-pink" },
  { value: "12", label: "Email sequences mapped", accent: "xoopah-accent-yellow" },
];

const CARDS = [
  { href: "/brand", title: "Brand", desc: "Visual, messaging, and positioning — from the Brand Overview and Master Brief.", accent: "xoopah-accent-blue" },
  { href: "/icp", title: "ICP", desc: "Ideal Customer Profile, backed by the D2C GTM research.", accent: "xoopah-accent-pink" },
  { href: "/competitors", title: "Competitors", desc: "HeyGen, Creatify, AdCreative.ai, Pencil, Zeely — tracked by feature.", accent: "xoopah-accent-yellow" },
  { href: "/content", title: "Content", desc: "Meta Ads, Blogs, Socials, Community, and Emails, all in one place.", accent: "xoopah-accent-lime" },
  { href: "/reports", title: "Reports", desc: "New period reports land here going forward.", accent: "xoopah-accent-coral" },
  { href: "/h1", title: "H1", desc: "The H1 2026 archive — meetings, trackers, and job descriptions.", accent: "xoopah-accent-orange" },
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
          <span className="xoopah-highlight text-black">in one place</span>.
        </h1>
        <p className="mt-5 max-w-lg text-base text-white/80">
          Brand, ICP, competitors, content, and reports — pulled from real
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
            14-day free trial. Strategic weighting is 80% ad creation, 20%
            ad launch — five creation tools (AI UGC Avatars, AI Remix,
            Static Editor, Voiceover, upcoming Video Templates) plus a
            guided Meta Ads launch flow.
          </p>
        </div>
        <div className="xoopah-card xoopah-accent-lime p-6 pl-8">
          <h2 className="font-sub text-sm font-semibold uppercase tracking-wide text-black/40">
            What marketing does
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-black/70">
            A one-person marketing department covering paid ads, content,
            SEO, positioning, community, website, and email — plus ongoing
            user research to keep sharpening who Xoopah is really built for.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {STATS.map((s) => (
          <div key={s.label} className={`xoopah-card ${s.accent} p-4 pl-6`}>
            <p className="xoopah-display text-2xl text-black">{s.value}</p>
            <p className="mt-1 text-xs text-black/50">{s.label}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="xoopah-card xoopah-accent-orange p-6 pl-8">
          <span className="rounded-full bg-xoopah-light-blue px-3 py-1 text-xs font-semibold text-xoopah-blue">
            Positioning — not finalized
          </span>
          <h2 className="mt-3 font-sub text-lg font-semibold text-black">
            Recommended: workflow compression + variants
          </h2>
          <p className="mt-2 text-sm italic text-black/70">
            &quot;Turn one proven ad angle into dozens of launch-ready
            variants — in minutes, with no designer, no agency, and nothing
            else added to your stack.&quot;
          </p>
          <Link href="/brand/positioning" className="mt-4 inline-block text-sm font-semibold text-xoopah-blue hover:underline">
            See all positioning options →
          </Link>
        </div>
        <div className="xoopah-card xoopah-accent-pink p-6 pl-8">
          <span className="rounded-full bg-[#FFE0F5] px-3 py-1 text-xs font-semibold text-black/60">
            North Star
          </span>
          <h2 className="mt-3 font-sub text-lg font-semibold text-black">
            The fastest &quot;I want to run ads&quot; → &quot;my ads are live&quot;
          </h2>
          <p className="mt-2 text-sm text-black/70">
            Get every small business owner from wanting to run ads to
            actually having them live — without an agency or a designer.
          </p>
        </div>
      </section>

      <section>
        <h2 className="xoopah-display text-2xl text-black">Sections</h2>
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className={`xoopah-card ${card.accent} group flex flex-col justify-between p-6 pl-8 transition-transform hover:-translate-y-1`}
            >
              <div>
                <h3 className="font-sub text-lg font-semibold text-black">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-black/60">{card.desc}</p>
              </div>
              <span className="mt-6 text-sm font-semibold text-xoopah-blue group-hover:underline">
                Open →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
