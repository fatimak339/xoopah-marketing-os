export type NavLeaf = {
  label: string;
  slug: string;
};

export type NavNode = NavLeaf & {
  children?: NavNode[];
};

export const NAV: NavNode[] = [
  { label: "Home", slug: "" },
  {
    label: "Brand",
    slug: "brand",
    children: [
      { label: "Visual", slug: "visual" },
      { label: "Messaging", slug: "messaging" },
      { label: "Positioning", slug: "positioning" },
    ],
  },
  { label: "ICP", slug: "icp" },
  {
    label: "Competitors",
    slug: "competitors",
    children: [
      { label: "AI UGC Avatars", slug: "ai-ugc-avatars" },
      { label: "AI Remix", slug: "ai-remix" },
      { label: "Static Editor", slug: "static-editor" },
      { label: "Voiceover Video Ads", slug: "voiceover-video-ads" },
      { label: "Ad Launch", slug: "ad-launch" },
    ],
  },
  {
    label: "Content",
    slug: "content",
    children: [
      { label: "Meta Ads", slug: "meta-ads" },
      { label: "Blogs", slug: "blogs" },
      { label: "Socials", slug: "socials" },
      { label: "Community", slug: "community" },
      { label: "Emails", slug: "emails" },
    ],
  },
  { label: "Reports", slug: "reports" },
  {
    label: "H1",
    slug: "h1",
    children: [
      { label: "Meetings", slug: "meetings" },
      { label: "Competitor Monitoring", slug: "competitor-monitoring" },
      { label: "Email Sequences", slug: "email-sequences" },
      { label: "Research Repository", slug: "research-repository" },
      { label: "Content Pipeline", slug: "content-pipeline" },
      { label: "Job Descriptions", slug: "job-descriptions" },
    ],
  },
];

/** Find a node by its full path segments, e.g. ["h1", "meetings"] */
export function findNode(path: string[]): NavNode | undefined {
  let level: NavNode[] = NAV;
  let node: NavNode | undefined;
  for (const segment of path) {
    node = level.find((n) => n.slug === segment);
    if (!node) return undefined;
    level = node.children ?? [];
  }
  return node;
}
