import Link from "next/link";

export default function EmailsPage() {
  return (
    <div className="space-y-10">
      <div>
        <p className="mb-2 text-xs text-black/40">
          <Link href="/content" className="hover:text-xoopah-blue">Content</Link> / Emails
        </p>
        <p className="font-sub text-sm font-semibold uppercase tracking-[0.2em] text-xoopah-blue">
          Channels · Emails
        </p>
        <h1 className="mt-3 xoopah-display text-3xl text-black">Campaign copy</h1>
        <p className="mt-2 max-w-xl text-sm text-black/60">
          For the full lifecycle sequence tracker (12 sequences, segments,
          status), see{" "}
          <Link href="/h1/email-sequences" className="text-xoopah-blue hover:underline">
            H1 → Email Sequences
          </Link>
          .
        </p>
      </div>

      <div className="xoopah-card xoopah-accent-blue p-6 pl-8">
        <h2 className="font-sub text-lg font-semibold text-black">DIY to DFY — Free 2 Months Offer</h2>
        <div className="mt-4 space-y-6">
          <div>
            <p className="font-sub text-sm font-semibold text-black">Email 1 — Subject: We&apos;ll run your ads for you — first $100 is on us!</p>
            <div className="mt-2 space-y-2 text-sm text-black/70">
              <p>Hi,</p>
              <p>We saw you signed up for Xoopah but didn&apos;t get to complete your setup. If ad creation, strategy, or budget decisions felt overwhelming, we&apos;ve got a simpler and faster way for you to get results.</p>
              <p>With our Done-For-You service, we take care of everything: high-converting ad creatives, complete ad strategy &amp; messaging, smart budget planning, full campaign setup &amp; launch on Meta.</p>
              <p>This service normally costs $50/month, but we&apos;re offering your first two months completely FREE!</p>
              <p>If you&apos;d like us to take this over for you, just reply &quot;YES&quot; to this email. One of our representatives will reach out to you immediately and get your ads moving.</p>
              <p>— Emily Khan, Team Xoopah</p>
            </div>
          </div>
          <div>
            <p className="font-sub text-sm font-semibold text-black">Email 2 (follow-up) — Subject: Reminder: Get $100 Free – Xoopah Handles Everything!</p>
            <div className="mt-2 space-y-2 text-sm text-black/70">
              <p>Hi, just following up in case you missed our last email. We&apos;re offering our Done-For-You service completely FREE for 2 months — a $100 value, on us. Our team will handle your ad creatives, strategy &amp; messaging, budget planning, and full Meta campaign setup &amp; launch.</p>
              <p>All you have to do is reply &quot;YES&quot; to this email.</p>
              <p>— Emily Khan, Team Xoopah</p>
            </div>
          </div>
        </div>
      </div>

      <div className="xoopah-card xoopah-accent-blue p-6 pl-8">
        <h2 className="font-sub text-lg font-semibold text-black">Ad Creative Launch Announcement (UGC focus)</h2>
        <div className="mt-4 space-y-6">
          <div>
            <p className="font-sub text-sm font-semibold text-black">Email 1 — Subject: Create Ads for $20 — No Creators Needed</p>
            <div className="mt-2 space-y-2 text-sm text-black/70">
              <p>Hi, we just launched something new for small businesses running Meta ads! You can now create multiple UGC-style ads for $20, using the images and videos you already have — no creators, no filming, no agencies.</p>
              <p>Our new Ad Creative Builder turns your raw phone images into scroll-stopping ads in minutes, designed specifically for Facebook and Instagram.</p>
              <p>Create your first ad today → www.xoopah.com</p>
              <p>— Emily Khan, Team Xoopah</p>
            </div>
          </div>
          <div>
            <p className="font-sub text-sm font-semibold text-black">Email 2 (follow-up) — Subject: Create an Ad Without Hiring Anyone</p>
            <div className="mt-2 space-y-2 text-sm text-black/70">
              <p>In case you missed it, we&apos;ve just launched a new Ad Creative Builder that turns your existing business images into UGC-style ads in minutes. With just 4-6 photos taken on your phone, you can turn them into high-performing ads in 5-10 minutes.</p>
              <p>Try it free for 14 days — no creators, no agencies, no production delays.</p>
              <p>Start your free trial → www.xoopah.com</p>
              <p>— Emily Khan, Team Xoopah</p>
            </div>
          </div>
          <div>
            <p className="font-sub text-sm font-semibold text-black">Email 3 (reminder) — Subject: A $20 Way to Make Unlimited Ads</p>
            <div className="mt-2 space-y-2 text-sm text-black/70">
              <p>Just a quick reminder — you don&apos;t need new content or a creator to make ads anymore. Our new Ad Creative Developer turns the images you already have into UGC-style ads, built for Facebook and Instagram. For $20, create ads whenever you need them.</p>
              <p>Create your ads here → www.xoopah.com</p>
              <p>— Emily Khan, Team Xoopah</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
