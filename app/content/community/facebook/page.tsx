import Link from "next/link";

const CONTENT_CATEGORIES = [
  { title: "Templates & Swipe Files", items: ["Ad copy swipe file for beauty/skincare brands", "Hook formula sheet (5 hooks that work for product ads)", "Caption templates for product launches", "Before/after ad script template"] },
  { title: "Breakdowns & Teardowns", items: ["\u201cWhy this ad worked\u201d — break down a real performing e-commerce ad", "Teardown of a bad ad and how to fix it", "Meta ad structure breakdown (what goes where and why)"] },
  { title: "Quick Wins & Checklists", items: ["5-point checklist before launching any ad", "What to do when your ad stops performing", "How to test creatives without wasting budget"] },
  { title: "Education Lite", items: ["What the Meta learning phase actually means (in plain English)", "Why your CPM goes up and what to do about it", "Voiceover vs static — when to use which"] },
  { title: "Xoopah-Specific", items: ["\u201cMade with Xoopah\u201d showcase — real ads from real users", "Tutorial: how to make a voiceover ad in under 10 minutes", "Before Xoopah vs after Xoopah — user story"] },
];

const RATED_IDEAS: Record<string, { idea: string; rating: string }[]> = {
  "🖼️ Still with Caption": [
    { idea: "\u201cThe 3-second rule for ads\u201d — one bold stat as visual", rating: "★★★★★" },
    { idea: "\u201cStop using this word in your ad copy\u201d", rating: "★★★★★" },
    { idea: "Before/after hook rewrite (text only visual)", rating: "★★★★" },
    { idea: "\u201cYour ad is losing people here\u201d — funnel drop visual", rating: "★★★★" },
    { idea: "A myth vs reality statement about Meta ads", rating: "★★★" },
  ],
  "📄 Document": [
    { idea: "Ad Teardown", rating: "★★★★★" },
    { idea: "5 hooks that work for product ads — swipe file", rating: "★★★★★" },
    { idea: "Pre-launch ad checklist", rating: "★★★★" },
    { idea: "\u201cWhy your ad stopped working\u201d troubleshooting guide", rating: "★★★★" },
    { idea: "Meta learning phase explained simply", rating: "★★★" },
  ],
  "🎠 Carousel": [
    { idea: "\u201c7 hooks for beauty/skincare ads\u201d — one per slide", rating: "★★★★★" },
    { idea: "Bad ad vs good ad — side by side rewrite", rating: "★★★★★" },
    { idea: "\u201cWhat $500 in Meta ads taught us\u201d — data story", rating: "★★★★" },
    { idea: "5 mistakes e-commerce brands make in ads", rating: "★★★★" },
    { idea: "Ad formats explained — when to use which", rating: "★★★" },
  ],
  "🎬 Video": [
    { idea: "Screen recording: making an ad in Xoopah in 5 min", rating: "★★★★★" },
    { idea: "\u201cWhy this ad worked\u201d — talking head breakdown", rating: "★★★★★" },
    { idea: "Tutorial: how to write a hook in 2 minutes", rating: "★★★" },
  ],
};

export default function CommunityFacebookPage() {
  return (
    <div className="space-y-10">
      <div>
        <p className="mb-2 text-xs text-black/40">
          <Link href="/content" className="hover:text-xoopah-blue">Content</Link> /{" "}
          <Link href="/content/community" className="hover:text-xoopah-blue">Community</Link> / Facebook
        </p>
        <p className="font-sub text-sm font-semibold uppercase tracking-[0.2em] text-xoopah-blue">
          Community · Facebook
        </p>
        <h1 className="mt-3 xoopah-display text-3xl text-black">Content ideas &amp; calendar</h1>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {CONTENT_CATEGORIES.map((c) => (
          <div key={c.title} className="xoopah-card xoopah-accent-lime p-5 pl-7">
            <p className="font-sub font-semibold text-black">{c.title}</p>
            <ul className="mt-2 space-y-1 text-sm text-black/60">
              {c.items.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <div>
        <h2 className="font-sub text-lg font-semibold text-black">Value drop ideas, rated by format</h2>
        <p className="mt-1 text-sm text-black/60">Rated by engagement potential and effort for the e-commerce ICP.</p>
        <div className="mt-4 space-y-6">
          {Object.entries(RATED_IDEAS).map(([format, ideas]) => (
            <div key={format} className="xoopah-card xoopah-accent-lime p-5 pl-7">
              <p className="font-sub font-semibold text-black">{format}</p>
              <div className="mt-2 divide-y divide-black/5">
                {ideas.map((i) => (
                  <div key={i.idea} className="flex items-center justify-between py-2 text-sm">
                    <span className="text-black/70">{i.idea}</span>
                    <span className="text-xoopah-blue">{i.rating}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="xoopah-card xoopah-accent-blue p-6 pl-8">
        <h2 className="font-sub text-lg font-semibold text-black">Weekly prompts</h2>
        <div className="mt-3 space-y-3 text-sm text-black/70">
          <p><strong className="text-black">Week 1 (Poll):</strong> &quot;What stops you from running ads consistently?&quot; — No time to make creatives / Don&apos;t know if it&apos;ll work / Budget feels too small / Don&apos;t know where to start</p>
          <p><strong className="text-black">Week 3 (Poll):</strong> &quot;How long does it take you to make one ad from scratch?&quot; — Less than 30 mins / 1-2 hours / Half a day / I outsource it</p>
          <p><strong className="text-black">Week 5 (Question):</strong> &quot;If your ads were performing perfectly right now — what would that mean for your business?&quot;</p>
        </div>
      </div>

      <div className="xoopah-card xoopah-accent-blue p-6 pl-8">
        <h2 className="font-sub text-lg font-semibold text-black">Top 5 recommended posts</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-black/70">
          <li><strong className="text-black">Carousel:</strong> &quot;7 hooks for beauty/skincare ads — one per slide.&quot; Directly serves the ICP, highly saveable, easy to produce, repurposable across Instagram and LinkedIn.</li>
          <li><strong className="text-black">Document:</strong> &quot;5 hooks that work for product ads — swipe file.&quot; Practical, immediately usable, positions Xoopah as the expert.</li>
          <li><strong className="text-black">Still with link:</strong> &quot;Free ad copy swipe file — comment to get it.&quot; Drives comments, boosts organic reach, gets warm leads inside the community.</li>
          <li><strong className="text-black">Video:</strong> Screen recording — making an ad in Xoopah in 5 minutes. Highest conversion potential of all formats.</li>
        </ol>
      </div>

      <div className="xoopah-card xoopah-accent-blue p-6 pl-8">
        <h2 className="font-sub text-lg font-semibold text-black">Article: Stop Using This Word in Your Ad Copy</h2>
        <div className="mt-3 space-y-3 text-sm leading-relaxed text-black/70">
          <p className="rounded-lg bg-xoopah-light-blue/30 p-3 font-sub font-semibold text-black">The word is &quot;quality.&quot;</p>
          <p>And if you&apos;re using it in your ads right now — you&apos;re not alone. Almost every e-commerce brand does. But it&apos;s quietly killing your conversions.</p>
          <p className="font-sub font-semibold text-black">Why &quot;Quality&quot; Doesn&apos;t Work</p>
          <p>When someone scrolls past your ad, they have about 2 seconds to decide if it&apos;s worth their attention. &quot;Quality&quot; doesn&apos;t do that — it&apos;s a claim without proof, so overused it has lost all meaning, like &quot;premium&quot; or &quot;luxurious.&quot; It&apos;s what YOU think about your product. Your customer cares what it does for them.</p>
          <p className="font-sub font-semibold text-black">The Words That Are Just As Bad</p>
          <p>Premium, Luxurious, Effective, Natural, Best, Innovative, High-performance — these are &quot;empty adjectives&quot; that describe your product from your perspective, not your customer&apos;s experience.</p>
          <p className="font-sub font-semibold text-black">What to Use Instead</p>
          <div className="overflow-x-auto">
            <table className="mt-2 w-full min-w-[500px] text-left text-sm">
              <thead>
                <tr className="border-b border-black/10">
                  <th className="py-1 pr-4 font-semibold text-black">Instead of this</th>
                  <th className="py-1 font-semibold text-black">Write this</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Quality serum", "The serum that cleared my skin in 11 days"],
                  ["Premium ingredients", "No parabens, no fillers. Just what your skin actually needs"],
                  ["Effective moisturiser", "Woke up and my skin felt like I'd slept 10 hours"],
                  ["Luxurious formula", "Sinks in within 30 seconds. No greasy feeling."],
                  ["High-quality haircare", "My hairdresser asked what I'd been using"],
                  ["Natural skincare", "94% plant-based. The other 6% keeps it stable on your shelf"],
                ].map((r) => (
                  <tr key={r[0]} className="border-b border-black/5">
                    <td className="py-1.5 pr-4">{r[0]}</td>
                    <td className="py-1.5">{r[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="font-sub font-semibold text-black">The Framework: Claim → Proof → Feeling</p>
          <p>&quot;Quality serum&quot; has a claim but no proof and no feeling. &quot;Cleared my skin in 11 days — dermatologist tested&quot; has all three. You need at least two of the three, or you have empty copy.</p>
          <p className="font-sub font-semibold text-black">Real Examples: Before and After</p>
          <p><strong className="text-black">Beauty (Vitamin C serum):</strong> ❌ &quot;Premium quality Vitamin C serum for glowing skin.&quot; → ✅ &quot;Your skin in 4 weeks — before you even finish the bottle.&quot;</p>
          <p><strong className="text-black">Pet (grooming products):</strong> ❌ &quot;High-quality grooming essentials for your dog.&quot; → ✅ &quot;Vet-recommended. No harsh chemicals. Your dog won&apos;t flinch.&quot;</p>
          <p><strong className="text-black">Electronics (wireless earbuds):</strong> ❌ &quot;Premium sound quality for music lovers.&quot; → ✅ &quot;8 hours of battery. Zero cables. Stays in on a run.&quot;</p>
          <p><strong className="text-black">Skincare (cleanser):</strong> ❌ &quot;Luxurious cleanser with natural ingredients.&quot; → ✅ &quot;Removes SPF, makeup, and the whole day. In 60 seconds.&quot;</p>
          <p className="font-sub font-semibold text-black">How to Audit Your Own Ad Copy</p>
          <p>Highlight every adjective in your current ads and ask: &quot;Could my competitor say the exact same thing?&quot; If yes, cut it or replace it.</p>
          <p className="font-sub font-semibold text-black">The One Rule to Remember</p>
          <p><strong className="text-black">Specificity is credibility.</strong> Vague copy sounds like marketing. Specific copy sounds like truth. Your customer can tell the difference.</p>
        </div>
      </div>
    </div>
  );
}
