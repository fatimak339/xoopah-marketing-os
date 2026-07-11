import PlaceholderPage from "@/components/PlaceholderPage";

export default function H1StrategyPage() {
  return (
    <PlaceholderPage
      eyebrow="H1 2026 / Strategy"
      title="The thinking behind the work"
      description="ICP research, competitor tracking, internal meetings, and the roles that support the strategy."
      crumbs={[{ label: "H1", href: "/h1" }]}
      children={[
        { label: "ICP & Research", href: "/icp" },
        { label: "Research Repository", href: "/h1/research-repository" },
        { label: "Meetings", href: "/h1/meetings" },
        { label: "Competitor Monitoring", href: "/h1/competitor-monitoring" },
        { label: "Job Descriptions", href: "/h1/job-descriptions" },
      ]}
    />
  );
}
