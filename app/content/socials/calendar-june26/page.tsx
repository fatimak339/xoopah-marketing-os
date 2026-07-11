import Link from "next/link";

export default function JuneCalendarPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-2 text-xs text-black/40">
          <Link href="/content" className="hover:text-xoopah-blue">Content</Link> /{" "}
          <Link href="/content/socials" className="hover:text-xoopah-blue">Socials</Link> / June &apos;26
        </p>
        <p className="font-sub text-sm font-semibold uppercase tracking-[0.2em] text-xoopah-blue">
          Calendar
        </p>
        <h1 className="mt-3 xoopah-display text-3xl text-black">
          June &apos;26 — full creative briefs
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-black/60">
          11 posts across IG Feed, FB Feed, and LinkedIn. Reference images
          from the original Notion page aren&apos;t reproduced here (they
          were temporary signed links) — all copy and creative direction is
          preserved in full.
        </p>
      </div>

      <div className="xoopah-card xoopah-accent-blue p-6 pl-8">
        <h2 className="font-sub text-lg font-semibold text-black">Post 1: Announcement</h2>
        <p className="mt-2 text-sm text-black/70">
          Brief: develop an animated post with exciting, fun music for the
          re-launch of Xoopah. Use the Webflow tile as a reference. Use our
          business ICP in the images. Keep it vibrant.
        </p>
        <p className="mt-2 text-sm text-black/70">
          Slide 1: logo animation. Slide 2: X, then the full logo (center,
          animated). Slide 3: &quot;built for small business owners.&quot;
        </p>
      </div>

      <div className="xoopah-card xoopah-accent-blue p-6 pl-8">
        <h2 className="font-sub text-lg font-semibold text-black">Post 2: What&apos;s Xoopah?</h2>
        <p className="mt-1 text-sm text-black/50">
          Format: Animated video (15-30 sec), Reels/FB. Tone: energetic,
          punchy, fun but credible — product launch meets brand manifesto.
          Music: upbeat, modern, slightly techy, Canva-like. Aspect ratio: 9:16.
        </p>
        <div className="mt-4 space-y-3 text-sm text-black/70">
          <p><strong className="text-black">Slide 1</strong> — Visual: split screen into 3 (a salon owner, a fitness coach, a restaurant owner). Text: &quot;Your ads aren&apos;t working.&quot;</p>
          <p><strong className="text-black">Slide 2</strong> — Visual: icons flying across screen (dollar signs, agency logos, complicated software UI). Text: &quot;Agencies are expensive. Design tools are complicated. And you don&apos;t have time for either.&quot;</p>
          <p><strong className="text-black">Slide 3</strong> — Visual: Xoopah logo animates in from center (X first, then full wordmark). Text: &quot;Meet Xoopah.&quot;</p>
          <p><strong className="text-black">Slide 4</strong> — Visual: fast product showcase, quick clips cycling through features, each labeled: AI avatar speaking to camera (&quot;UGC AI Avatars&quot;), ad being remixed instantly (&quot;AI Remix&quot;), static ad being designed (&quot;Static Editor&quot;), voiceover being added to video (&quot;Voiceover Videos&quot;). Text: &quot;AI-powered ad creation. Built for businesses like yours.&quot;</p>
          <p><strong className="text-black">Slide 5</strong> — Visual: three quick portrait-style shots of Xoopah&apos;s ICPs in their environment, happy and satisfied (salon owner, fitness coach, food business). Text: &quot;Salon. Fitness. Food. And every small business in the US.&quot;</p>
          <p><strong className="text-black">Slide 6</strong> — Visual: full screen Xoopah primary blue, logo centered. Text: &quot;$20/month. No agency. No designer. Just results.&quot; CTA: Start Free.</p>
        </div>
      </div>

      <div className="xoopah-card xoopah-accent-blue p-6 pl-8">
        <h2 className="font-sub text-lg font-semibold text-black">Post 3: SMBs + Output with Xoopah (12-slide carousel)</h2>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[500px] text-left text-sm">
            <tbody>
              {[
                ["1 — Cover", "\u201cPick your business. See your ad\u201d — ICP arranged in a grid, swipe CTA"],
                ["2 — E-comm", "Product business ICP + static ad mockup"],
                ["3 — Local Service (Physical)", "Salon/gym/restaurant ICP + UGC avatar ad mockup"],
                ["4 — Local Service (Virtual)", "VA/bookkeeper ICP + voiceover ad mockup"],
                ["5 — Coach / Consultant", "Coach ICP + UGC avatar ad mockup"],
                ["6 — Photographer / Creative", "Photographer ICP + AI remix ad mockup"],
                ["7 — Freelancer", "Freelancer ICP + static ad mockup"],
                ["8 — Content Creator", "Creator ICP + AI remix ad mockup"],
                ["9 — Fitness / Wellness", "Trainer/instructor ICP + voiceover ad mockup"],
                ["10 — Food Business", "Food owner ICP + static or remix ad mockup"],
                ["11 — Educator / Course Creator", "Course creator ICP + avatar ad mockup"],
                ["12 — Closer + CTA", "All ICP in a grid + $20/month. Start free."],
              ].map(([slide, content], i) => (
                <tr key={slide} className={i !== 0 ? "border-t border-black/5" : ""}>
                  <td className="w-56 shrink-0 py-2 pr-4 align-top font-semibold text-black">{slide}</td>
                  <td className="py-2 text-black/70">{content}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="xoopah-card xoopah-accent-blue p-6 pl-8">
        <h2 className="font-sub text-lg font-semibold text-black">Post 5: Founder learning (Fatima)</h2>
        <p className="mt-2 text-sm text-black/70">Text: &quot;Why we built Xoopah?&quot;</p>
        <p className="mt-3 whitespace-pre-line text-sm text-black/70">
{`We didn't build Xoopah in a boardroom.
We built it after watching real people — hardworking, passionate, brilliant people — struggle with something that should never be this hard.
A salon owner who does everything herself. The bookings. The staff. The inventory. The client calls. And then at the end of a 12-hour day — she sits down to make an ad. And stares at a blank screen for an hour. And posts nothing.
We saw this over and over again. And it made us wonder what we can do to help fill this gap. Because the gap isn't talent. It's never talent. It's access.
Big brands have creative directors. Media buyers. Production teams. Agencies on retainer. Small business owners have a phone, a to-do list, and maybe 20 minutes between clients. That's not fair. So we built Xoopah.
Not as another tool to add to the pile. But as the thing that was missing — a platform built from the ground up for the business owner doing everything themselves.
All of it. In one place. Because you built something real. Something worth showing up for. And your ads should reflect that. That's why we built Xoopah.
For the ones doing it alone — and doing it anyway.`}
        </p>
      </div>

      <div className="xoopah-card xoopah-accent-blue p-6 pl-8">
        <h2 className="font-sub text-lg font-semibold text-black">Post 6: AI Remix</h2>
        <p className="mt-2 text-sm text-black/70">
          Slide 1: prompt screen zoomed in. Text: &quot;Change the
          background to deep navy (or choose a color of your choice acc. to
          the visual).&quot; Slide 2: AI Remix result. Slide 5: &quot;One
          prompt to get your trending ads ready. AI Remix now.&quot; Slide
          6: &quot;Built for small business. Xoopah.&quot;
        </p>
      </div>

      <div className="xoopah-card xoopah-accent-blue p-6 pl-8">
        <h2 className="font-sub text-lg font-semibold text-black">Post 6b: Single Still</h2>
        <p className="mt-2 text-sm text-black/70">
          <strong className="text-black">Headline:</strong> &quot;You handle
          the bookings, the inventory, the DMs. Your ads shouldn&apos;t be
          the hard part.&quot;
        </p>
        <p className="mt-2 text-sm text-black/70">
          Visual: full bleed Xoopah primary blue (#4485F4). Headline
          centered in Lexend, large and confident, two lines max. Wavy line
          motif subtle in background. Logo bottom center. CTA: &quot;Start
          free.&quot; Mood: tired but hopeful — the scroll-stopper for the
          business owner who immediately recognizes themselves.
        </p>
      </div>

      <div className="xoopah-card xoopah-accent-blue p-6 pl-8">
        <h2 className="font-sub text-lg font-semibold text-black">Post 7: What $20/month actually gets you (6-slide carousel)</h2>
        <div className="mt-3 space-y-2 text-sm text-black/70">
          <p><strong className="text-black">Slide 1 (Cover):</strong> &quot;$20/month. Here&apos;s everything inside.&quot; Subtext: No agency. No designer.</p>
          <p><strong className="text-black">Slide 2 (AI Avatars):</strong> &quot;A spokesperson for your brand without hiring one.&quot;</p>
          <p><strong className="text-black">Slide 3 (AI Remix):</strong> &quot;Turn any ad into a fresh one. One prompt.&quot;</p>
          <p><strong className="text-black">Slide 4 (Static Editor):</strong> &quot;Get industry specific ads.&quot;</p>
          <p><strong className="text-black">Slide 5 (Voiceover):</strong> &quot;Add a professional voiceover to any video.&quot;</p>
          <p><strong className="text-black">Slide 6 (Closer):</strong> &quot;All of this. $20/month.&quot; Subtext: Cancel anytime. CTA: Start Free → xoopah.com</p>
        </div>
      </div>

      <div className="xoopah-card xoopah-accent-blue p-6 pl-8">
        <h2 className="font-sub text-lg font-semibold text-black">Post 8: AI Avatars (5-slide carousel)</h2>
        <div className="mt-3 space-y-2 text-sm text-black/70">
          <p><strong className="text-black">Slide 1 (Cover):</strong> &quot;Don&apos;t want to be on camera?&quot; Subtext: Meet your AI Avatar.</p>
          <p><strong className="text-black">Slide 2 (Friendly):</strong> &quot;Get your audience to trust you.&quot;</p>
          <p><strong className="text-black">Slide 3 (Professional):</strong> &quot;The credibility of a spokesperson in $20.&quot;</p>
          <p><strong className="text-black">Slide 4 (Casual):</strong> &quot;Feels like a recommendation from a friend, not an ad.&quot;</p>
          <p><strong className="text-black">Slide 5 (CTA):</strong> &quot;Pick your avatar. Make your ad.&quot; CTA: Start Free → xoopah.com</p>
        </div>
      </div>

      <div className="xoopah-card xoopah-accent-blue p-6 pl-8">
        <h2 className="font-sub text-lg font-semibold text-black">Post 9: Voiceover (6-slide how-to)</h2>
        <div className="mt-3 space-y-2 text-sm text-black/70">
          <p><strong className="text-black">Slide 1 (Cover):</strong> &quot;Create video ads in minutes. No camera. No mic.&quot; Subtext: Here&apos;s how:</p>
          <p><strong className="text-black">Slide 2 (Step 1):</strong> &quot;Start with what you want to say.&quot; — write your script.</p>
          <p><strong className="text-black">Slide 3 (Step 2):</strong> &quot;Pick a voice that sounds like your brand.&quot; — choose your voiceover.</p>
          <p><strong className="text-black">Slide 4 (Step 3):</strong> &quot;Drop in your video or image. That&apos;s it.&quot; — upload your asset.</p>
          <p><strong className="text-black">Slide 5 (Step 4):</strong> &quot;Sync the voice to your visuals. Second by second.&quot; — adjust your timing.</p>
          <p><strong className="text-black">Slide 6 (Closer):</strong> &quot;The results speak for themselves.&quot; Collage of 4-6 finished voiceover video thumbnails. CTA: Try Voiceover Free.</p>
        </div>
      </div>

      <div className="xoopah-card xoopah-accent-blue p-6 pl-8">
        <h2 className="font-sub text-lg font-semibold text-black">Post 10: The Results Speak for Themselves</h2>
        <p className="mt-1 text-sm text-black/50">Pillar: Social Proof. Format: static image, 4-stat grid, Feed + Story crop.</p>
        <p className="mt-2 text-sm text-black/70">
          Blue (#4485F4) background, bold white/lime headline treatment
          (&quot;themselves&quot; in lime for pop). 2×2 stat grid in brand
          accent colors (orange, lime, pink, light blue) — each block
          isolates one number so it reads instantly while scrolling.
          Wordmark + URL locked bottom corners.
        </p>
      </div>

      <div className="xoopah-card xoopah-accent-blue p-6 pl-8">
        <h2 className="font-sub text-lg font-semibold text-black">Post 11: Your Ads Shouldn&apos;t Be the Hard Part</h2>
        <p className="mt-1 text-sm text-black/50">Pillar: Education / Pain Point (empathy-first). Format: static image, single statement, Feed + Story crop.</p>
        <p className="mt-2 text-sm text-black/70">
          Blue background with subtle swirl motif (brand signature element,
          low opacity). Three-line stacked headline, each line color-coded
          to a different business task — lime &quot;BOOKINGS,&quot; pink
          &quot;INVENTORY,&quot; orange &quot;MESSAGES&quot; — mirroring the
          mental load of running a small business. Tagline: &quot;Your ads
          shouldn&apos;t be the hard part.&quot; CTA bottom right, wordmark
          bottom left.
        </p>
      </div>
    </div>
  );
}
