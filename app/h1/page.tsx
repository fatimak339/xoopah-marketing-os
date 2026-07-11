import Link from "next/link";

const SECTIONS = [
  { title: "Meetings", desc: "Internal meetings, townhalls, 1:1s with Sumaiya, and the client funnel reviews discussed in them.", href: "/h1/meetings" },
  { title: "Competitor Monitoring", desc: "14 tracked competitors across creative, pricing, positioning, and feature launches.", href: "/h1/competitor-monitoring" },
  { title: "Email Sequences", desc: "12 lifecycle sequences — onboarding, win-back, and nurture, mapped to Brevo.", href: "/h1/email-sequences" },
  { title: "Research Repository", desc: "20 research entries spanning interviews, onboarding data, and secondary market research.", href: "/h1/research-repository" },
  { title: "Content Pipeline", desc: "32 tracked content items across blogs, socials, paid ads, and emails.", href: "/h1/content-pipeline" },
  { title: "Job Descriptions", desc: "Open and filled roles — Animator, Creative Designer, SEO Specialist.", href: "/h1/job-descriptions" },
];

export default function H1Page() {
  return (
    <div className="space-y-8">
      <div>
        <p className="font-sub text-sm font-semibold uppercase tracking-[0.2em] text-xoopah-blue">
          H1 2026
        </p>
        <h1 className="mt-3 xoopah-display text-3xl text-black">
          The historical archive
        </h1>
        <p className="mt-2 max-w-xl text-sm text-black/60">
          Everything tracked through the first half of 2026 — meetings,
          trackers, and job descriptions. New reporting going forward lives
          in Reports.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {SECTIONS.map((s) => (
          <Link key={s.href} href={s.href} className="xoopah-card group flex flex-col justify-between p-5">
            <div>
              <p className="font-sub font-semibold text-black">{s.title}</p>
              <p className="mt-2 text-sm text-black/60">{s.desc}</p>
            </div>
            <span className="mt-4 text-sm font-semibold text-xoopah-blue group-hover:underline">
              Open →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
