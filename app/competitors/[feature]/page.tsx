import { notFound } from "next/navigation";
import PlaceholderPage from "@/components/PlaceholderPage";
import { findNode } from "@/lib/nav-data";

export default function CompetitorFeaturePage({
  params,
}: {
  params: { feature: string };
}) {
  const node = findNode(["competitors", params.feature]);
  if (!node) return notFound();

  return (
    <PlaceholderPage
      eyebrow="Competitors"
      title={node.label}
      description="No competitor data logged for this feature yet — will populate from the weekly competitor audit."
      crumbs={[
        { label: "Competitors", href: "/competitors" },
        { label: node.label, href: `/competitors/${node.slug}` },
      ]}
    />
  );
}
