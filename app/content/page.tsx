import Link from "next/link";

const SECTIONS = [
  { title: "Meta Ads", desc: "Creative scripts and copy per feature — UGC & Ad Launch, Static Editor, AI Remix, Voiceover.", href: "/content/meta-ads" },
  { title: "Blogs", desc: "21 blog title ideas, 3 full published posts, and both lead magnet guides.", href: "/content/blogs" },
  { title: "Socials", desc: "Feb '26 and June '26 calendars, plus Facebook and Instagram platform pages.", href: "/content/socials" },
  { title: "Community", desc: "Growth strategy and Facebook group content ideas.", href: "/content/community" },
  { title: "Emails", desc: "DIY-to-DFY offer and Ad Creative launch announcement copy.", href: "/content/emails" },
];

export default function ContentPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="font-sub text-sm font-semibold uppercase tracking-[0.2em] text-xoopah-blue">
          Content
        </p>
        <h1 className="mt-3 xoopah-display text-3xl text-black">
          Every piece of marketing content, in one place
        </h1>
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
