import PlaceholderPage from "@/components/PlaceholderPage";
import { NAV } from "@/lib/nav-data";

export default function CompetitorsPage() {
  const competitors = NAV.find((n) => n.slug === "competitors")!;
  return (
    <PlaceholderPage
      eyebrow="Competitors"
      title="Tracked by feature"
      description="HeyGen, Creatify, AdCreative.ai, Pencil, Zeely — broken down by which Xoopah feature they compete with."
      children={competitors.children!.map((c) => ({
        label: c.label,
        href: `/competitors/${c.slug}`,
      }))}
    />
  );
}
