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
    label: "H1",
    slug: "h1",
    children: [
      { label: "Content", slug: "content" },
      { label: "Strategy", slug: "strategy" },
    ],
  },
  {
    label: "H2",
    slug: "h2",
    children: [
      { label: "ICP", slug: "icp" },
      { label: "Competitors", slug: "competitors" },
      { label: "Content", slug: "content" },
      { label: "Reporting", slug: "reporting" },
    ],
  },
  { label: "Learning Hub", slug: "learning-hub" },
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
