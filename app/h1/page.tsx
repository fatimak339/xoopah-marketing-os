import PlaceholderPage from "@/components/PlaceholderPage";

export default function H1Page() {
  return (
    <PlaceholderPage
      eyebrow="H1 2026"
      title="Everything filled out so far, organized two ways"
      description="Content and Strategy — the full H1 2026 archive of meetings, trackers, research, and job descriptions, grouped by what it's actually for."
      squareCards
      children={[
        { label: "Content", href: "/h1/content" },
        { label: "Strategy", href: "/h1/strategy" },
      ]}
    />
  );
}
