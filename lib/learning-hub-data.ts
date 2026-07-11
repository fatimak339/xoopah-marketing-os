export type ReportItem = {
  text: string;
  source?: string;
  url?: string;
};

export type ReportSection = {
  title: string;
  accent: string;
  items: ReportItem[];
};

export type DailyReport = {
  date: string; // display date
  readMinutes: number;
  sections: ReportSection[];
};

// Newest first. Add a new object to the top of this array for each new day.
export const LEARNING_HUB_REPORTS: DailyReport[] = [
  {
    date: "July 12, 2026",
    readMinutes: 28,
    sections: [
      {
        title: "Today's growth idea for Xoopah",
        accent: "xoopah-accent-blue",
        items: [
          { text: "Meta's shift toward creator-driven, shoppable formats (up to 30 shoppable products per Reel, expanded Trending Ads categories) is a real whitespace right now — early adopters are seeing lower competition and lower CPMs before more brands catch on. Worth testing a Reels-native creative batch this quarter." },
          { text: "B2B SaaS data shows SEO delivering 702% ROI with a ~7-month break-even, versus rising paid CAC — a strong case for prioritizing the website rebuild and SEO vendor work once ICP/positioning lock, since organic is compounding while paid gets more expensive." },
          { text: "51% of B2B software buyers now start research in an AI chatbot more than Google (up from 29% a year ago) — this directly supports treating AI-search visibility (GEO/AEO) as part of the website launch, not an afterthought.", source: "G2 via Martal" },
        ],
      },
      {
        title: "Meta Ads",
        accent: "xoopah-accent-coral",
        items: [
          { text: "Location-based Digital Services Tax fees (2-5%) on ad impressions delivered in the UK, France, Italy, Spain, Austria, and Turkey took effect July 1 — charged based on where the ad is shown, not where the advertiser is based.", source: "Search Engine Land" },
          { text: "Meta removed the 'Your activity off Meta technologies' opt-out in July, meaning off-platform data (Pixel, Conversions API) now always links to a user's account. Meta says no new data is being collected — but retargeting audience sizes may grow for brands with clean Pixel/CAPI setups.", source: "Common Thread Co" },
          { text: "Meta Ads AI Connectors (open beta): a Meta-authenticated MCP server + CLI that lets advertisers manage campaigns from their own AI tools, no dev credentials required. Also new: an AI-enriched Pixel and one-click Conversions API setup.", source: "AdsUploader" },
          { text: "Meta Business Agent (AI chat handling for WhatsApp/Messenger/Instagram) is now used by 1M+ businesses, with 1B+ active threads a day — a sign Meta wants ad spend and conversational commerce tied together.", source: "margabagus.com" },
        ],
      },
      {
        title: "Google Ads",
        accent: "xoopah-accent-yellow",
        items: [
          { text: "Google's Ads Terms of Service updated automatically for every account on July 1 — advertisers now explicitly authorize Google's AI to format, select, or generate targets, ads, and destinations on their behalf. No opt-in needed; advertisers remain liable for what runs.", source: "Search Engine Land" },
          { text: "A 'Bid Target Adjustment Tool' rolled out July 6 for accounts that have been over-delivering on Target CPA/ROAS — gives a 6-week window before Google auto-pulls budget-limited campaigns back toward stated targets on August 17.", source: "Digital Applied" },
          { text: "Real-Time Policy Reviews now give instant ad-approval feedback for Responsive Search Ads, cutting review time from hours to seconds.", source: "Google Ads" },
          { text: "New 'AI Brief' tool lets advertisers feed business goals, audience personas, and brand guidelines directly to Google's AI to guide auto-generated campaigns — worth testing once Google Ads is further along in onboarding." },
        ],
      },
      {
        title: "Competitor watch",
        accent: "xoopah-accent-pink",
        items: [
          { text: "HeyGen shipped Avatar V in May — its most realistic avatar model yet, built from a 15-second recording with multi-angle stability for longer-form video." },
          { text: "Creatify's Avatar Aurora now does realistic lip-sync at 24fps, plus a 'product-holding' avatar feature — AI presenters that physically hold and present a product. Worth watching given Xoopah's own known gap: avatars currently can't demonstrate hand-held product use." },
          { text: "AdCreative.ai continues to position on performance scoring tied directly to Meta and Google account data — a different angle than Xoopah's pure creation focus, closer to a reporting/optimization layer." },
          { text: "A newer entrant, GetHookd, is combining a 65M+ ad database (competitor research) with AI creative generation in one workspace — worth a look as a positioning reference, since it's explicitly selling 'research + creation in one place,' adjacent to Xoopah's all-in-one angle." },
        ],
      },
      {
        title: "Tools worth exploring",
        accent: "xoopah-accent-lime",
        items: [
          { text: "Canva Grow 2.0 (late June) bundles AI ad creation, publishing, reporting, and creative refresh generation for Meta, TikTok, and LinkedIn into one workflow — a direct signal that 'all-in-one ad creation + launch' is becoming a crowded lane, not just Xoopah's wedge." },
          { text: "Runway Agent 2.0 analyzes a campaign and auto-generates ad variations and format adaptations from winning content — same 'one asset in, many variants out' logic as Xoopah's positioning." },
          { text: "Google DeepMind's Nano Banana 2 Lite (image model) and Gemini Omni Flash both went to developers in late June — fast, cheap image generation worth testing for static ad backgrounds or product shots." },
        ],
      },
      {
        title: "SEO & AI search strategy",
        accent: "xoopah-accent-orange",
        items: [
          { text: "Google published its first official guide to optimizing for AI-generated search features on May 15 — the core message: there's no separate 'AI SEO' strategy, GEO/AEO is foundational SEO applied to an AI surface.", source: "Google Search Central via Launchcodex" },
          { text: "Google's guide names five things that help AI-response visibility: unique non-commodity content, clean product/local data feeds, fast and crawlable pages, structured content, and demonstrated first-hand expertise." },
          { text: "The industry-wide framing has shifted from 'rank first' to 'get cited' — AI answer engines pull from citation patterns and entity recognition, not just top search results, so a page can rank well and still be invisible to AI answers." },
        ],
      },
      {
        title: "Content formats",
        accent: "xoopah-accent-blue",
        items: [
          { text: "30-60 seconds remains the sweet spot for short-form ad and social video across platforms in 2026 — most marketers rank short-form as the single highest-ROI content format." },
          { text: "The '5:3:1' repurposing ratio is gaining traction: five micro-clips, three medium-length videos, and one flagship piece, all cut from the same source material — a useful frame for stretching a single shoot further." },
          { text: "LinkedIn video posts get 3x the engagement of text-only posts — relevant if the ICP work leans further into services-layer e-commerce brands with a B2B-adjacent audience." },
        ],
      },
      {
        title: "Design trends (FYI, not prescriptive)",
        accent: "xoopah-accent-yellow",
        items: [
          { text: "Worth flagging honestly: several 2026 design trend reports (Canva, VistaPrint) describe a pullback from bright, bubbly, mascot-heavy branding toward 'imperfect,' hand-drawn, more restrained visuals — described as a reaction to AI-polished sameness. This runs counter to the friendly/bubbly direction you asked for on the dashboard, which is fine — Xoopah's brand call, just worth having visibility into the broader trend." },
          { text: "Where it does align: hand-drawn doodles and imperfect, human-made textures are trending up — which fits Xoopah's existing doodle set (still WIP, hand-drawn-then-vectorized)." },
        ],
      },
      {
        title: "B2B SaaS benchmarks",
        accent: "xoopah-accent-coral",
        items: [
          { text: "Median SaaS CAC is now $2 spent per $1 of new ARR, up 14% year over year — acquisition is getting more expensive industry-wide, reinforcing the case for organic/content channels." },
          { text: "7-day trials convert at 40.4% vs. 30.6% for trials over 61 days — worth keeping in mind if Xoopah's 14-day trial length ever comes up for review." },
          { text: "Median Net Revenue Retention sits at 101%, with top-quartile companies above 110% — retention/expansion is described industry-wide as the primary 2026 growth lever, not new acquisition alone." },
        ],
      },
      {
        title: "Marketing trend updates",
        accent: "xoopah-accent-pink",
        items: [
          { text: "AI agents are moving from assistive to autonomous in martech — several vendors (SAS, Alteryx) shipped tools this month letting non-technical marketers build and deploy their own automated workflows without engineering support." },
          { text: "Paid acquisition's share of B2B pipeline has dropped from 34% (2023) to 26% (2026), while organic and AI-search-driven pipeline has grown from 22% to 27% — a structural shift toward earned/organic channels across the industry, not just an SEO detail." },
        ],
      },
    ],
  },
];
