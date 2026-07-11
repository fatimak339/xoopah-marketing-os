import PlaceholderPage from "@/components/PlaceholderPage";

export default function H1ContentPage() {
  return (
    <PlaceholderPage
      eyebrow="H1 2026 / Content"
      title="Every piece of content produced in H1"
      description="Meta Ads, Blogs, Socials, Community, Emails — plus the pipeline tracker behind them."
      crumbs={[{ label: "H1", href: "/h1" }]}
      squareCards
      children={[
        { label: "Meta Ads", href: "/content/meta-ads" },
        { label: "Blogs", href: "/content/blogs" },
        { label: "Socials", href: "/content/socials" },
        { label: "Community", href: "/content/community" },
        { label: "Emails", href: "/content/emails" },
        { label: "Content Pipeline", href: "/h1/content-pipeline" },
      ]}
    />
  );
}
