import Link from "next/link";

const IDEAS = [
  "What Is an Ad Launch System? A Complete Guide for Small Businesses",
  "Ad Launching for SMBs – Part 1: Understanding the Real Problem Behind Failed Ads",
  "Ad Launching for SMBs – Part 2: Choosing the Right Ad Destination",
  "Ad Launching for SMBs – Part 3: How to Simplify Ad Creative Without Hiring a Team",
  "Ad Launching for SMBs – Part 4: Budgeting Meta Ads the Smart Way",
  "Ad Launching for SMBs – Part 5: Building a Repeatable Ad Process",
  "Meta Ads for Small Businesses: A Practical Beginner's Guide",
  "The Hidden Cost of Running Ads Without a System",
  "Why Small Businesses Struggle With Ad Creative (Even When the Product Is Good)",
  "How to Launch Your First Meta Ad Without an Agency or Creator Team",
  "The Decision Overload Problem in Advertising for Small Businesses",
  "How Much Budget Do Meta Ads Really Need to Work for SMBs?",
  "The Complete Guide to Creating UGC-Style Ads Without Creators",
  "Why Boosted Posts Don't Build Real Ad Performance",
  "From Idea to Live Ad: A Simple Ad Launch Framework for SMBs",
  "What Makes an Ad \u201cReady\u201d to Go Live? A Pre-Launch Checklist for SMBs",
  "Why Most Ad Tools Confuse Small Businesses (And What a Better System Looks Like)",
  "The Future of Advertising for SMBs: Fewer Tools, Fewer Decisions, Better Results",
  "Ad Strategy for SMBs: What Actually Matters and What Doesn't",
  "AI-Generated Ad Creatives vs. Traditional Design: The ROI Battle Results",
];

export default function BlogsPage() {
  return (
    <div className="space-y-10">
      <div>
        <p className="mb-2 text-xs text-black/40">
          <Link href="/content" className="hover:text-xoopah-blue">Content</Link> / Blogs
        </p>
        <p className="font-sub text-sm font-semibold uppercase tracking-[0.2em] text-xoopah-blue">
          Website · Blogs
        </p>
        <h1 className="mt-3 xoopah-display text-3xl text-black">
          Blog ideas, published posts &amp; lead magnets
        </h1>
      </div>

      <div>
        <h2 className="font-sub text-lg font-semibold text-black">Blog title ideas ({IDEAS.length})</h2>
        <div className="xoopah-card mt-4 divide-y divide-black/5">
          {IDEAS.map((t) => (
            <p key={t} className="px-6 py-3 text-sm text-black/70">{t}</p>
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-sub text-lg font-semibold text-black">Published posts</h2>

        <div className="mt-4 xoopah-card p-6">
          <h3 className="font-sub text-lg font-semibold text-black">1. Website vs DMs: Where Should Your Ads Take Your Clients?</h3>
          <div className="prose-sm mt-3 space-y-3 text-sm leading-relaxed text-black/70">
            <p>When you run ads on Facebook or Instagram, most people focus on the creative — the visuals, the copy, the hook, the offer. But one of the most important decisions is often ignored: where should your ad send people?</p>
            <p>Your ad destination matters just as much as your ad itself. It decides how easy it is for someone to become your customer, how much trust they feel, how fast they take action — and it directly affects your cost, your conversion rate, and your results.</p>
            <p>In simple terms, there are two main destinations: your <strong className="text-black">website</strong>, and your <strong className="text-black">DMs</strong> (Direct Messages on Instagram, Facebook, or WhatsApp). Both can work. Both can fail. The key is knowing when to use which.</p>
            <p className="font-sub font-semibold text-black">Why Ad Destination Matters</p>
            <p>People scroll through Facebook and Instagram fast. They&apos;re not sitting down to &quot;analyze&quot; your ad — they&apos;re killing time, watching reels, replying to friends. Your ad gets a few seconds of attention. If the next step feels confusing, slow, or effort-heavy, they leave.</p>
            <p>A website is for exploring. A landing page is for converting. Your ad destination should make the user take one action as fast as possible — ideally in under 10 seconds: submit a form, book a call, send a DM, make a purchase. In ads, the winner isn&apos;t the business with the most information — it&apos;s the one that makes action feel easiest.</p>
            <p className="font-sub font-semibold text-black">When Your Ad Should Go to a Website</p>
            <p>A website is the best destination when your business is built around structure and clarity — offer is well-defined, pricing is visible, customer doesn&apos;t need a conversation before buying. Websites work 24/7, build credibility, handle multiple visitors at once, track performance easily, and convert without you being online.</p>
            <p className="font-sub font-semibold text-black">When Your Ad Should Go to DMs</p>
            <p>DMs are right when your business depends on trust, conversation, and personal connection — offer needs explanation, pricing is flexible, customers usually have questions before buying. They work best for service-based businesses (salons, clinics, consultants, coaches, trainers, tutors), local businesses, high-ticket offers, custom solutions, and early-stage brands still learning their audience.</p>
            <p className="font-sub font-semibold text-black">The Smartest Strategy: Use Both</p>
            <p>Cold audience → DMs. Warm audience → Website. Retargeting → Website. New launches → DMs. Discounts and offers → Website. DMs warm people up; websites close them faster.</p>
            <p className="font-sub font-semibold text-black">How to Choose for Your Business</p>
            <p>Do customers usually ask questions before buying? → DMs. Can customers buy without talking to you? → Website. Products → Website. Services → DMs. Have time/team to reply quickly? Yes → DMs, No → Website. Want automation or connection? Automation → Website, Connection → DMs.</p>
            <p>Give each channel a fair run — at least 7-10 days — before drawing conclusions. Ads don&apos;t fail because people don&apos;t click. They fail because the destination doesn&apos;t guide people forward.</p>
          </div>
        </div>

        <div className="mt-4 xoopah-card p-6">
          <h3 className="font-sub text-lg font-semibold text-black">2. Why Your Ads Aren&apos;t Working: 3 Common Solopreneur Mistakes</h3>
          <div className="prose-sm mt-3 space-y-3 text-sm leading-relaxed text-black/70">
            <p>Running ads as a solopreneur is powerful — you control your growth, budget, and strategy. But every mistake comes directly out of your pocket. Most solopreneurs think ads fail because of budget. In reality, ads fail because of structure: weak creative, unclear destination, rushed targeting.</p>
            <p>A good ad is built on three simple parts: a clear message, a strong visual, a simple action. When someone sees your ad, it should answer three questions in a few seconds — what is this, why should I care, what should I do next.</p>
            <p className="font-sub font-semibold text-black">Mistake 1: Weak or Confusing Ad Creative</p>
            <p>Many solopreneurs make ads that look good but don&apos;t say anything powerful. With shorter attention spans, if your creative doesn&apos;t clearly communicate the problem you solve and the benefit you offer within 1-2 seconds, people scroll past. Common signs: too much text or busy visuals, no emotional hook, no clear problem being solved, generic wording, no call-to-action. Best practice: one main message, one clear benefit, one call to action.</p>
            <p className="font-sub font-semibold text-black">Mistake 2: Not Matching Creative with Destination</p>
            <p>Your ad and destination must feel like one continuous journey. If your ad says &quot;Book a free call&quot; but the page says &quot;Buy now,&quot; that breaks trust. Design your destination to capture the lead, and match the message on that destination to the promise made in your ad.</p>
            <p className="font-sub font-semibold text-black">Mistake 3: Running Ads Without a Clear Goal</p>
            <p>This happens when solopreneurs run ads without deciding what they actually want — mismatched campaign goals and ad copy confuse Meta&apos;s algorithm. Best practice: one campaign, one objective, one audience, 2-3 creatives. When your intention is clear, Meta understands your campaign better, and your results improve faster.</p>
            <p>Ads are not magic. They are systems. Start simple. Create clarity. Let data guide decisions.</p>
          </div>
        </div>

        <div className="mt-4 xoopah-card p-6">
          <h3 className="font-sub text-lg font-semibold text-black">3. How Many Meta Ads Should a Small Business Run?</h3>
          <div className="prose-sm mt-3 space-y-3 text-sm leading-relaxed text-black/70">
            <p>One of the biggest myths in advertising is that you need a lot of ads to get results. In reality, too many ads create confusion, split budgets, and slow down performance. For small businesses, success comes from simplicity, focus, and consistency.</p>
            <p>Meta&apos;s system needs data to learn. When you run too many ads with a small budget, none of them get enough data — performance becomes unstable. Running 8-10 ads across multiple audiences and goals divides your budget into tiny pieces.</p>
            <p className="font-sub font-semibold text-black">The Ideal Number of Ads</p>
            <p>For most small businesses, the sweet spot is 3-4 ads per campaign: 1 campaign, 1 objective (Messages, Traffic, or Conversions), 1 audience, 2-4 ads. The offer, destination, and objective should stay the same across all ads — this keeps testing clean so you can see which creative element is actually working.</p>
            <p className="font-sub font-semibold text-black">Think in Phases</p>
            <p>Phase 1 (Testing): 2-3 ads, find what works. Phase 2 (Refining): keep winners, add small variations. Phase 3 (Scaling): increase budget, duplicate best performers.</p>
            <p className="font-sub font-semibold text-black">Budget Affects Ad Quantity</p>
            <p>$5-10/day → 1-2 ads. $10-30/day → 2-4 ads. $50+/day → 4-6 ads. More ads need more money to perform properly.</p>
            <p>Small businesses don&apos;t need many ads — they need a few strong ones, tested properly. Meta Ads reward simplicity, consistency, and clear structure, not chaos.</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="font-sub text-lg font-semibold text-black">Lead magnets</h2>

        <div className="mt-4 xoopah-card p-6">
          <h3 className="font-sub text-lg font-semibold text-black">If Your Ads Aren&apos;t Converting, It&apos;s Not Your Budget — It&apos;s Your Creative</h3>
          <div className="mt-3 space-y-3 text-sm text-black/70">
            <p>Case study reference: ARMRA generated 10,391 purchases with UGC campaign spend in 1 year, following the formula Hook → Problem → Solution → Offer/CTA.</p>
            <p><strong className="text-black">The Hook:</strong> looks straight into camera holding the product — calls out the viewer&apos;s exact problem without naming them. <strong className="text-black">The Problem:</strong> shown, not explained — a close-up, no long text. <strong className="text-black">The Solution:</strong> product fills the frame, clean, no clutter. <strong className="text-black">The Offer/CTA:</strong> one clear next step (e.g. 30% off first order) — not a website, not a follow, just one action.</p>
            <p><strong className="text-black">Why UGC works for a service business:</strong> people don&apos;t buy services from businesses, they buy from people they trust. UGC doesn&apos;t look like an ad, so it blends into the feed and doesn&apos;t get skipped.</p>
            <p><strong className="text-black">How to make UGC ads fast with Xoopah:</strong> Sign up (free, ~30 sec) → Choose a goal → Generate your script (AI writes it using trending formats + your business details, tone-adjustable) → Pick your avatar (30+ AI avatars) → Add your visuals (your own photos/clips or Xoopah&apos;s library) → Trim the length (30-45 sec sweet spot for Meta) → Hit Generate (download or launch straight to Meta).</p>
            <p>Xoopah gives full access to: 30+ AI avatars, AI script generator, unlimited photos and videos, AI voiceover, captions, ads optimized for launch. First 14 days free.</p>
          </div>
        </div>

        <div className="mt-4 xoopah-card p-6">
          <h3 className="font-sub text-lg font-semibold text-black">Want ads like this — fast? Skip agencies. Try Xoopah.</h3>
          <div className="mt-3 space-y-3 text-sm text-black/70">
            <p>You boosted a post. Waited. Nothing. So you tweak the targeting — still nothing. Here&apos;s what no one tells you: targeting isn&apos;t the problem, your creative is. Since Meta&apos;s Andromeda update, the platform took most targeting controls away — Meta&apos;s AI decides who sees your ad based entirely on your creative.</p>
            <p><strong className="text-black">Pro tip:</strong> when an ad performs, don&apos;t start from scratch on the next one — pull it apart and multiply it. Xoopah takes you from one winning ad to five variations live on Meta in the same afternoon. Never let a winner retire — clone it, twist it, scale it.</p>
            <p>Same 7-step &quot;how it works&quot; flow as above (sign up → goal → script using the Hook-Angle-Offer formula → avatar → visuals → trim → generate), positioned around the Xoopah Growth Plan: a free demo booking that includes a repeatable ad system, UGC avatar videos + static + video ads in one place, onboarding support, and access to new formats as they drop.</p>
          </div>
        </div>
      </div>

      <div className="xoopah-card border-2 border-dashed border-black/15 p-6">
        <p className="font-sub text-sm font-semibold text-black">Note on images</p>
        <p className="mt-2 text-sm text-black/60">
          Both lead magnets and several blog posts reference product screenshots
          in Notion. Those images use temporary signed links that expire in
          minutes, so they need a dedicated pass to download and host
          properly rather than being embedded here.
        </p>
      </div>
    </div>
  );
}
