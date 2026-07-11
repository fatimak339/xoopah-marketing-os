import Link from "next/link";

const CALENDARS = [
  { post: "Content Calendar — Feb '26", status: "Done", notes: "5 SMM posts: Customers Shaped Xoopah, Why Customers Love Us, AI Avatars, UGC Revolution, Meta Andromeda Update.", channel: "IG Feed, FB Feed, LinkedIn" },
  { post: "Blogs — Feb '26 (5 articles)", status: "Done", notes: "5 blogs: Decision Overload, Winning Ad → System, SMBs Beating Enterprise with AI Video, Hidden Cost of Manual Ad Creation, UGC-Style Without Creators.", channel: "Website Blog, LinkedIn" },
  { post: "Paid Ads — Feb '26 (5 creatives)", status: "Done", notes: "UGC (Fatima), Animated dashboard, Founder POV problem hook, Testimonial static (Walter Wilson), Direct offer static. $50 budget, DIY campaign.", channel: "IG Feed, FB Feed" },
  { post: "Content Calendar — June '26", status: "Done", notes: "11 posts: Re-launch announcement, What's Xoopah video, ICP carousel, AI Avatar, Founder VO, AI Remix, You Handle the Bookings, $20/month carousel, Avatars carousel, Voiceover how-to, Results stat grid, Ads Shouldn't Be Hard.", channel: "IG Feed, FB Feed, LinkedIn" },
  { post: "Paid Ads — Ongoing Campaigns (H1)", status: "Done", notes: "Paid Ads - UGC & Ad Launch, Static Editor, Voiceover, AI Remix campaigns. Badar managing.", channel: "IG Feed, FB Feed" },
  { post: "Emails — Launch + Upgrade Offers", status: "Done", notes: "Ad creative launch announcement + DIY to DFY free 2 months offer.", channel: "—" },
  { post: "Emails — Churned Customer Sequences (Guest + Signup)", status: "Done", notes: "10-email sequence across 5 segments: draft abandoned, creative generated, abandoned mid-flow, launched/paused, long-term nurture. + With-signup flow: 7 segments.", channel: "—" },
  { post: "Emails — WhatsApp Win-back Sequence", status: "To Do", notes: "Win-back sequence for churned WhatsApp community users. Pending community strategy decision.", channel: "—" },
];

const JUNE_POSTS = [
  { post: "Announcement", pillar: "Belong", format: "Animated post", notes: "Logo animation, Webflow-style reference, 'built for small business owners'." },
  { post: "What's Xoopah? (brand manifesto video)", pillar: "Show", format: "Animated video (Reels/FB)", notes: "15-30s Reel: problem → Meet Xoopah → 4 features → $20/month." },
  { post: "SMBs + Output with Xoopah (12-slide ICP carousel)", pillar: "Show", format: "Static carousel", notes: "One slide per ICP (e-comm, salon, coach, photographer, freelancer, creator, fitness, food, educator)." },
  { post: "AI Avatar", pillar: "Show", format: "Static carousel", notes: "—" },
  { post: "Why We Built Xoopah (founder voiceover, Fatima)", pillar: "Belong", format: "Video (founder VO)", notes: "'For the ones doing it alone — and doing it anyway.'" },
  { post: "AI Remix carousel (one prompt → trending ad)", pillar: "Show", format: "Static carousel", notes: "Prompt screen → remix result." },
  { post: "You Handle the Bookings… (single still)", pillar: "Belong", format: "Static single still", notes: "Empathy-first scroll-stopper, Xoopah blue." },
  { post: "What $20/Month Actually Gets You (6-slide carousel)", pillar: "Show", format: "Static carousel", notes: "All 4 features + 'cancel anytime' closer." },
  { post: "Don't Want to Be on Camera? (AI Avatars carousel)", pillar: "Show", format: "Static carousel", notes: "Friendly / Professional / Casual avatar personas." },
  { post: "Create Video Ads in Minutes: Voiceover (6-slide how-to)", pillar: "Teach", format: "Static carousel", notes: "4-step walkthrough: script → voice → asset → timing." },
  { post: "The Results Speak for Themselves (4-stat grid)", pillar: "Show", format: "Static image", notes: "Social proof stat grid in brand accent colors." },
  { post: "Your Ads Shouldn't Be the Hard Part (single statement)", pillar: "Belong", format: "Static image", notes: "BOOKINGS / INVENTORY / MESSAGES color-coded stack." },
];

export default function ContentPipelinePage() {
  return (
    <div className="space-y-10">
      <div>
        <p className="mb-2 text-xs text-black/40">
          <Link href="/h1" className="hover:text-xoopah-blue">H1</Link> / Content Pipeline
        </p>
        <p className="font-sub text-sm font-semibold uppercase tracking-[0.2em] text-xoopah-blue">
          Content Pipeline
        </p>
        <h1 className="mt-3 xoopah-display text-3xl text-black">
          Every content batch, tracked
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-black/60">
          Full creative briefs for June &apos;26 live under{" "}
          <Link href="/content/socials" className="text-xoopah-blue hover:underline">
            Content → Socials
          </Link>{" "}
          — this page tracks status across every batch.
        </p>
      </div>

      <div>
        <h2 className="font-sub text-lg font-semibold text-black">Calendars &amp; batches</h2>
        <div className="mt-4 space-y-4">
          {CALENDARS.map((c) => (
            <div key={c.post} className="xoopah-card xoopah-accent-lime p-5 pl-7">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-sub font-semibold text-black">{c.post}</p>
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${c.status === "Done" ? "bg-[#D9F2E3] text-[#1E7A46]" : "bg-[#FFE9D6] text-[#B65A17]"}`}>
                  {c.status}
                </span>
              </div>
              <p className="mt-2 text-sm text-black/60">{c.notes}</p>
              <p className="mt-1 text-xs text-black/40">{c.channel}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-sub text-lg font-semibold text-black">June &apos;26 — post index (12 posts)</h2>
        <div className="xoopah-card mt-4 overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-black/5 bg-xoopah-light-blue/30">
                <th className="px-5 py-3 font-sub font-semibold text-black">Post</th>
                <th className="px-5 py-3 font-sub font-semibold text-black">Pillar</th>
                <th className="px-5 py-3 font-sub font-semibold text-black">Format</th>
                <th className="px-5 py-3 font-sub font-semibold text-black">Notes</th>
              </tr>
            </thead>
            <tbody>
              {JUNE_POSTS.map((p, i) => (
                <tr key={p.post} className={i !== 0 ? "border-t border-black/5" : ""}>
                  <td className="px-5 py-4 align-top font-semibold text-black">{p.post}</td>
                  <td className="px-5 py-4 align-top text-black/60">{p.pillar}</td>
                  <td className="px-5 py-4 align-top text-black/60">{p.format}</td>
                  <td className="px-5 py-4 align-top text-black/60">{p.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
