import Link from "next/link";

export default function FebCalendarPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-2 text-xs text-black/40">
          <Link href="/content" className="hover:text-xoopah-blue">Content</Link> /{" "}
          <Link href="/content/socials" className="hover:text-xoopah-blue">Socials</Link> / Feb &apos;26
        </p>
        <p className="font-sub text-sm font-semibold uppercase tracking-[0.2em] text-xoopah-blue">
          Calendar
        </p>
        <h1 className="mt-3 xoopah-display text-3xl text-black">Feb &apos;26 — SMM &amp; Paid Ads</h1>
        <p className="mt-2 max-w-2xl text-sm text-black/60">
          This calendar covered SMM (Meta + LinkedIn), blogs, and paid ads.
          Blog articles are listed by title below — full text is queued for
          a follow-up pass given their length (5 long-form articles).
        </p>
      </div>

      <div>
        <h2 className="font-sub text-lg font-semibold text-black">SMM Posts</h2>
        <div className="mt-4 space-y-4">
          <div className="xoopah-card xoopah-accent-lime p-5 pl-7">
            <p className="font-sub font-semibold text-black">1. Our Customers Shaped Xoopah (5-slide carousel)</p>
            <p className="mt-2 text-sm text-black/70">
              Slide 1: &quot;What Our First 10 Users Taught Us. And We
              Delivered.&quot; Slide 2: creatives came first — launched an Ad
              Creative Builder. Slide 3: Meta setup was slowing users down —
              changed the flow order. Slide 4: users wanted strategy, not
              just tools — built clear 2-ad (test) vs 4-ad (scale)
              strategies. Slide 5: &quot;We&apos;re building this for you,
              with you.&quot; Thank you to our first 10 users.
            </p>
          </div>
          <div className="xoopah-card xoopah-accent-lime p-5 pl-7">
            <p className="font-sub font-semibold text-black">2. Why Our Customers Love Us (6-slide carousel)</p>
            <p className="mt-2 text-sm text-black/70">
              Slide 1: &quot;Why Our Customers Love Us — because running ads
              shouldn&apos;t be complicated.&quot; Slide 2: &quot;User #2
              launched 97 ads with Xoopah&quot; — faster ad launch. Slide 3:
              &quot;User #6 generated 1000+ leads&quot; — better results.
              Slide 4: &quot;User #9 built creatives and launched with
              us&quot; — one-stop solution. Slide 5: &quot;Built for real
              businesses. Not agencies. Not marketers.&quot; Slide 6: Try
              Xoopah, free for 14 days.
            </p>
          </div>
          <div className="xoopah-card xoopah-accent-lime p-5 pl-7">
            <p className="font-sub font-semibold text-black">3. You Don&apos;t Need to Be on Camera Anymore (6-slide carousel)</p>
            <p className="mt-2 text-sm text-black/70">
              Split screen empty chair vs. AI avatar → 4 avatars speaking
              simultaneously → single avatar with platform UI → rapid
              montage of 8-10 avatars → &quot;totem pole&quot; parallax
              stack → single avatar CTA. Caption: &quot;Camera shy? Budget
              tight? Timeline impossible? You don&apos;t need to be on
              camera anymore...&quot; #AIVideo #VideoMarketing
              #ContentCreation #MarketingTech #AIAvatars
            </p>
          </div>
          <div className="xoopah-card xoopah-accent-lime p-5 pl-7">
            <p className="font-sub font-semibold text-black">4. The UGC Revolution: Why Polished Brand Content Is Dying on Meta</p>
            <p className="mt-2 text-sm text-black/70">
              Stat-driven carousel: UGC ads get 4x higher engagement, 50%
              lower CPM, 3x better conversion rates. Split screen: polished
              brand video vs. UGC-style content — &quot;Which one would YOU
              stop scrolling for?&quot; Internal testing data: polished
              (0.8% CTR, $45 CPM, 1.2% conversion) vs. UGC-style (3.2% CTR,
              $22 CPM, 3.7% conversion). Caption: &quot;Your $10,000
              production budget is hurting your performance...&quot;
            </p>
          </div>
          <div className="xoopah-card xoopah-accent-lime p-5 pl-7">
            <p className="font-sub font-semibold text-black">5. Meta Just Changed Again (Andromeda) — Should Small Businesses Panic?</p>
            <p className="mt-2 text-sm text-black/70">
              Explains Meta&apos;s Andromeda shift from manual targeting
              rules to AI-led decisions based on signals across the whole
              platform. Fixes: broader audience (let Meta find people
              instead of boxing it in), skip interest stacking, give budget
              room to breathe, install the pixel. Closer: &quot;Or let
              Xoopah do it all for you! Free 14-day trial.&quot;
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="font-sub text-lg font-semibold text-black">Blog articles (titles — full text pending)</h2>
        <div className="xoopah-card mt-4 divide-y divide-black/5">
          {[
            "The Decision Overload Problem in Advertising for Small Businesses",
            "How to Turn One Winning Ad into a Repeatable System",
            "How Small Businesses Are Beating Enterprise Brands with AI Video Ads",
            "The Hidden Cost of Manual Ad Creation (And Why Automation Pays for Itself)",
            "The Complete Guide to Creating UGC-Style Ads Without Creators",
          ].map((t) => (
            <p key={t} className="px-6 py-3 text-sm text-black/70">{t}</p>
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-sub text-lg font-semibold text-black">Paid Ads (5 creatives, $50 budget, DIY campaign)</h2>
        <p className="mt-1 text-sm text-black/60">
          Approach: a complete funnel, not isolated ads — problem → solution
          → belief → proof → offer → action across multiple formats and
          hooks.
        </p>
        <div className="mt-4 space-y-4">
          <div className="xoopah-card xoopah-accent-lime p-5 pl-7">
            <p className="font-sub font-semibold text-black">Ad 1 — UGC Style, Outcome Hook (Fatima)</p>
            <p className="mt-2 text-sm text-black/70">Headline overlay: &quot;Create Ads in Minutes for $20/Month.&quot; Transform raw images into ads that actually convert — add details, pick tone and avatar, upload images, done. CTA: Start Free Trial.</p>
          </div>
          <div className="xoopah-card xoopah-accent-lime p-5 pl-7">
            <p className="font-sub font-semibold text-black">Ad 2 — Animated</p>
            <p className="mt-2 text-sm text-black/70">Xoopah dashboard, clean interface: AI script generation → avatar selection → ad preview → &quot;Generate&quot; clicked → success animation → end screen with logo + CTA.</p>
          </div>
          <div className="xoopah-card xoopah-accent-lime p-5 pl-7">
            <p className="font-sub font-semibold text-black">Ad 3 — Founder POV, Problem Hook</p>
            <p className="mt-2 text-sm text-black/70">&quot;So over the last 3 months, I talked to 30+ small business owners. And I kept hearing the same thing: I want to run ads now, but I&apos;m stuck waiting on creative... Creators are expensive. Filming is expensive. So we built Xoopah. Don&apos;t know what to write? We do it. Don&apos;t want to be on camera? No need. Don&apos;t know ads? Already set up. Just twenty dollars a month.&quot;</p>
          </div>
          <div className="xoopah-card xoopah-accent-lime p-5 pl-7">
            <p className="font-sub font-semibold text-black">Ad 4 — Testimonial (static)</p>
            <p className="mt-2 text-sm text-black/70">Clean background, large centered quote: &quot;An amazing team with incredible support at Xoopah. Everyone is responsive, professional, and genuinely cares about helping you succeed&quot; — Walter Wilson. AI Ad Creation + Meta Launch, 14-Day Free Trial.</p>
          </div>
          <div className="xoopah-card xoopah-accent-lime p-5 pl-7">
            <p className="font-sub font-semibold text-black">Ad 5 — Direct Offer (static)</p>
            <p className="mt-2 text-sm text-black/70">Bold minimal design. Heading: &quot;Create Ads in Minutes.&quot; Subhead: &quot;No Creator. No filming.&quot; ✓ AI Scripts ✓ 30+ UGC AI Avatars ✓ Meta Ads Optimized. 14 Days FREE, then $20/month.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
