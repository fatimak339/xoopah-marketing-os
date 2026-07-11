import PlaceholderPage from "@/components/PlaceholderPage";

export default function H1Page() {
  return (
    <PlaceholderPage
      eyebrow="H1 2026"
      title="Everything filled out so far, organized three ways"
      description="Content, Reports, and Strategy — the full H1 2026 archive of meetings, trackers, research, and job descriptions, grouped by what it's actually for."
      children={[
        { label: "Content", href: "/h1/content" },
        { label: "Reports", href: "/h1/reports" },
        { label: "Strategy", href: "/h1/strategy" },
      ]}
    />
  );
}
