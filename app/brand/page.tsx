import PlaceholderPage from "@/components/PlaceholderPage";
import { NAV } from "@/lib/nav-data";

export default function BrandPage() {
  const brand = NAV.find((n) => n.slug === "brand")!;
  return (
    <PlaceholderPage
      eyebrow="Brand"
      title="Visual, messaging, and positioning"
      description="Sourced from the Brand Overview and Master Intelligence Brief — ready to populate once you say go."
      children={brand.children!.map((c) => ({
        label: c.label,
        href: `/brand/${c.slug}`,
      }))}
    />
  );
}
