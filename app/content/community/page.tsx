import Link from "next/link";

export default function CommunityPage() {
  return (
    <div className="space-y-10">
      <div>
        <p className="mb-2 text-xs text-black/40">
          <Link href="/content" className="hover:text-xoopah-blue">Content</Link> / Community
        </p>
        <p className="font-sub text-sm font-semibold uppercase tracking-[0.2em] text-xoopah-blue">
          Community
        </p>
        <h1 className="mt-3 xoopah-display text-3xl text-black">Growth strategy</h1>
        <p className="mt-2 text-sm text-black/60">
          <a href="https://www.facebook.com/groups/1435979444178762" target="_blank" rel="noopener noreferrer" className="text-xoopah-blue hover:underline">
            Figure Out Ads with Xoopah (Facebook group) →
          </a>
        </p>
      </div>

      <div>
        <h2 className="font-sub text-lg font-semibold text-black">4 growth strategies</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {[
            { title: "Lead Magnet + Meta Ads", desc: "Capture cold ICP emails via paid ads and funnel them into the community." },
            { title: "FB Group + Reddit Content Play", desc: "Build authority in existing communities and pull engaged members into yours." },
            { title: "Member Referral Loop", desc: "Turn your existing 9 ICP members into recruiters through structured nudges." },
            { title: "LinkedIn-to-Facebook Pipeline", desc: "Use LinkedIn content to warm up ICP and convert them into community members." },
          ].map((s) => (
            <div key={s.title} className="xoopah-card xoopah-accent-lime p-5 pl-7">
              <p className="font-sub font-semibold text-black">{s.title}</p>
              <p className="mt-2 text-sm text-black/60">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="xoopah-card xoopah-accent-blue p-6 pl-8">
        <h2 className="font-sub text-lg font-semibold text-black">FB Group + Reddit Content Play — full plan</h2>
        <p className="mt-2 text-sm text-black/70"><strong className="text-black">Goal:</strong> build authority in existing communities, pull curious and engaged members into yours. <strong className="text-black">North Star:</strong> 100 users by September.</p>

        <h3 className="mt-4 font-sub text-sm font-semibold text-black">Facebook execution</h3>
        <ul className="mt-2 space-y-1 text-sm text-black/70">
          <li>Identify 5–8 FB groups where your ICP is already active</li>
          <li>Best post format: &quot;We ran an experiment / made a mistake / learned something — here&apos;s what happened&quot; + soft CTA to your community for the full breakdown</li>
          <li>Cadence: 3 posts per week on each group</li>
        </ul>

        <h3 className="mt-4 font-sub text-sm font-semibold text-black">Reddit execution</h3>
        <ul className="mt-2 space-y-1 text-sm text-black/70">
          <li>Never post about Xoopah directly. Answer questions your ICP is already asking</li>
          <li>Build contributor reputation first (2-3 helpful comments), then reference your community contextually</li>
          <li>Rule of thumb: 80% give value, 20% mention the community</li>
        </ul>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <p className="font-sub text-sm font-semibold text-black">Target FB Groups</p>
            <ul className="mt-1 space-y-1 text-sm text-black/60">
              <li>Entrepreneurs &amp; Small Business Owners</li>
              <li>Small business owners/entrepreneurs</li>
              <li>Founders Space Group — Startups Entrepreneurs Investors</li>
            </ul>
          </div>
          <div>
            <p className="font-sub text-sm font-semibold text-black">Target Reddit Communities</p>
            <ul className="mt-1 space-y-1 text-sm text-black/60">
              <li>r/smallbusiness</li>
              <li>r/Entrepreneur</li>
              <li>r/digital_marketing</li>
              <li>r/PPC</li>
              <li>r/GrowthHacking</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="xoopah-card xoopah-accent-lime p-5 pl-7">
        <a href="/content/community/facebook" className="text-sm font-semibold text-xoopah-blue hover:underline">
          See Facebook community content ideas →
        </a>
      </div>
    </div>
  );
}
