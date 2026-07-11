import PlaceholderPage from "@/components/PlaceholderPage";

export default function H2Page() {
  return (
    <PlaceholderPage
      eyebrow="H2 2026"
      title="The second half, just getting started"
      description="Content, Reporting, and Strategy for H2 — ICP and Competitors now live in the main nav."
      children={[
        { label: "Content", href: "/h2/content" },
        { label: "Reporting", href: "/h2/reporting" },
        { label: "Strategy", href: "/h2/strategy" },
      ]}
    />
  );
}
