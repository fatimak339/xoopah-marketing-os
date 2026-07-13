import type { DailyReport } from "../types";

export const report: DailyReport = {
  date: "July 13, 2026",
  slug: "2026-07-13",
  readMinutes: 20,
  sections: [
    {
      title: "Today's growth idea for Xoopah",
      accent: "xoopah-accent-blue",
      items: [
        { text: "Creatify now lets its AI avatars physically hold and present products (\"Avatar Holding Product\") — this directly closes the exact gap flagged in Xoopah's own D2C research: AI Avatars can't yet demonstrate hand-held product use. Worth escalating to product as a competitive-urgency signal, not just a backlog item.", source: "Creatify / vidmetoo.com" },
        { text: "New York's synthetic-performer disclosure law (effective June 9) requires a visible disclosure whenever an ad features an AI-generated human performer, based on where the ad is seen rather than where the business is based. Since Xoopah's AI Avatar output is exactly this kind of synthetic performer, it's worth building disclosure guidance into onboarding before a customer runs into this cold.", source: "AdsUploader" },
        { text: "A growing set of competitor comparisons are framing the pairing of ad intelligence (competitor research, what's-working data) with generation as the real differentiator over single-purpose creation tools. That's a positioning angle Xoopah doesn't currently claim — worth testing on the website rebuild.", source: "GetHookd comparison writeups" },
      ],
    },
    {
      title: "Meta Ads",
      accent: "xoopah-accent-coral",
      items: [
        { text: "Median Facebook CPM hit $21.90 in June 2026, up 16.5% year-over-year, per a benchmark tracker built on roughly $3B of anonymized ad spend. Useful context for any CPL conversation with Sumaiya/Badar — the whole market floor rose, not just Xoopah's account.", source: "Superads benchmark via AdMakeAI" },
        { text: "\"Push Delivery to This Ad\" — a manual delivery override — is now live on nearly all ad accounts as of July 10. It lets a new creative get budget pushed to it directly inside the existing ad set, without duplicating the ad set or resetting the learning phase. Could replace the current pattern of duplicating ad sets to test new creative.", source: "AdMakeAI changelog" },
        { text: "Andromeda (creative-as-targeting) is now the standard delivery model across all Meta campaign types — ad creative content itself increasingly determines audience delivery, more than manual targeting settings do. Reinforces variant volume as the real lever, which lines up with Xoopah's 'workflow compression with variants' wedge.", source: "AdAdvisor" },
        { text: "Location-based Digital Services Tax fees (2-5%) on ads delivered in the UK, France, Italy, Spain, Austria, and Turkey took effect July 1, charged based on where the ad is shown rather than where the advertiser is based. Not urgent for a US-only ICP, but relevant the moment international testing comes up.", source: "Search Engine Land via admanage.ai" },
      ],
    },
    {
      title: "AI ad creative landscape",
      accent: "xoopah-accent-yellow",
      items: [
        { text: "Creatify's Batch Mode now generates multiple ad variants with different hooks/CTAs in a single session — the same variant-volume workflow Xoopah is building around, from a direct competitor.", source: "Creatify" },
        { text: "HeyGen continues to position as the multilingual/avatar-realism leader (175+ languages) for broad video use, while Creatify is explicitly positioned as the e-commerce/performance specialist. Xoopah's flat $20/month pricing is still a real differentiator against both tools' credit-based models.", source: "vidmetoo.com / creatify.ai comparisons" },
        { text: "GetHookd is a newer entrant bundling competitor ad research (65M+ Meta ad database) with AI creative generation in one workspace — a category adjacency worth watching since it approaches the same workflow-compression problem from the intelligence side rather than the production side.", source: "GetHookd" },
      ],
    },
  ],
};
