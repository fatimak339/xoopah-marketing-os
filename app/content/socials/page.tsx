import Link from "next/link";

const PLATFORMS = [
  { label: "Facebook", slug: "facebook" },
  { label: "Instagram", slug: "instagram" },
  { label: "LinkedIn", slug: "linkedin" },
  { label: "TikTok", slug: "tiktok" },
];

const CALENDARS = [
  { title: "Feb '26", status: "Complete", desc: "5 SMM posts, 5 blog articles, 5 paid ads — full SMM + paid ads detail available.", href: "/content/socials/calendar-feb26" },
  { title: "June '26", status: "Complete", desc: "11 posts, full creative briefs — announcement, brand manifesto video, ICP carousel, AI Avatar, founder VO, AI Remix, and more.", href: "/content/socials/calendar-june26" },
  { title: "July '26", status: "To Do", desc: "Not yet planned.", href: null },
  { title: "Community calendar", status: "To Do", desc: "30-day broadcast/community calendar — Teach/Ask/Show/Belong pillars across IG Broadcast, WhatsApp, and FB Community.", href: null },
];

export default function SocialsPage() {
  return (
    <div className="space-y-10">
      <div>
        <p className="font-sub text-sm font-semibold uppercase tracking-[0.2em] text-xoopah-blue">
          Channels · Socials
        </p>
        <h1 className="mt-3 xoopah-display text-3xl text-black">
          Platforms &amp; calendars
        </h1>
      </div>

      <div>
        <h2 className="font-sub text-lg font-semibold text-black">Platforms</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {PLATFORMS.map((p) => (
            <Link key={p.slug} href={`/content/socials/${p.slug}`} className="xoopah-card group flex items-center justify-between p-5">
              <span className="font-sub font-semibold text-black">{p.label}</span>
              <span className="text-sm font-semibold text-xoopah-blue group-hover:underline">Open →</span>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-sub text-lg font-semibold text-black">Calendars</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {CALENDARS.map((c) => (
            <div key={c.title} className="xoopah-card xoopah-accent-lime p-5 pl-7">
              <div className="flex items-center justify-between">
                <p className="font-sub font-semibold text-black">{c.title}</p>
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${c.status === "Complete" ? "bg-[#D9F2E3] text-[#1E7A46]" : "bg-[#FFE9D6] text-[#B65A17]"}`}>
                  {c.status}
                </span>
              </div>
              <p className="mt-2 text-sm text-black/60">{c.desc}</p>
              {c.href && (
                <Link href={c.href} className="mt-3 inline-block text-sm font-semibold text-xoopah-blue hover:underline">
                  See full creative briefs →
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
