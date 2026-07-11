import PlaceholderPage from "@/components/PlaceholderPage";

export default function H2Page() {
  return (
    <PlaceholderPage
      eyebrow="H2 2026"
      title="The second half, just getting started"
      description="ICP is filled in — Competitors, Content, and Reporting will build out as H2 progresses."
      children={[
        { label: "ICP", href: "/h2/icp" },
        { label: "Competitors", href: "/h2/competitors" },
        { label: "Content", href: "/h2/content" },
        { label: "Reporting", href: "/h2/reporting" },
      ]}
    />
  );
}
