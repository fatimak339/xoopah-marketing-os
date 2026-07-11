import Link from "next/link";

export default function InstagramPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-2 text-xs text-black/40">
          <Link href="/content" className="hover:text-xoopah-blue">Content</Link> /{" "}
          <Link href="/content/socials" className="hover:text-xoopah-blue">Socials</Link> / Instagram
        </p>
        <p className="font-sub text-sm font-semibold uppercase tracking-[0.2em] text-xoopah-blue">
          Socials · Instagram
        </p>
        <h1 className="mt-3 xoopah-display text-3xl text-black">Content posted here</h1>
        <p className="mt-2 max-w-xl text-sm text-black/60">
          Every IG Feed post lives in the calendars below — shown there
          rather than duplicated here, since the same posts run on
          Facebook too.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Link href="/content/socials/calendar-feb26" className="xoopah-card group p-5">
          <p className="font-sub font-semibold text-black">Feb &apos;26 calendar</p>
          <p className="mt-2 text-sm text-black/60">5 SMM posts, 5 paid ads — cross-posted FB Feed + IG Feed + LinkedIn.</p>
          <span className="mt-3 inline-block text-sm font-semibold text-xoopah-blue group-hover:underline">Open →</span>
        </Link>
        <Link href="/content/socials/calendar-june26" className="xoopah-card group p-5">
          <p className="font-sub font-semibold text-black">June &apos;26 calendar</p>
          <p className="mt-2 text-sm text-black/60">11 posts, full creative briefs — FB Feed + IG Feed.</p>
          <span className="mt-3 inline-block text-sm font-semibold text-xoopah-blue group-hover:underline">Open →</span>
        </Link>
      </div>
    </div>
  );
}
