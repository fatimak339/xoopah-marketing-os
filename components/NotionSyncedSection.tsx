import { getH2Docs, type H2Section } from "@/lib/notion";

export default async function NotionSyncedSection({ section }: { section: H2Section }) {
  const docs = await getH2Docs(section);

  if (docs.length === 0) {
    return (
      <div className="xoopah-card flex flex-col items-start gap-3 p-6">
        <span className="rounded-full bg-black/5 px-3 py-1 text-xs font-semibold text-black/50">
          Synced from Notion
        </span>
        <p className="max-w-md text-sm text-black/60">
          Nothing tagged <span className="font-semibold">{section}</span> in
          the H2 Document Hub yet — add a page there and it&apos;ll show up
          here automatically within a few minutes.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <p className="text-xs font-semibold uppercase tracking-wide text-black/40">
        Synced from Notion — H2 Document Hub
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        {docs.map((doc) => (
          <a
            key={doc.id}
            href={doc.url}
            target="_blank"
            rel="noopener noreferrer"
            className="xoopah-card xoopah-accent-blue group flex items-center justify-between p-5 pl-7"
          >
            <span className="font-sub font-semibold text-black">{doc.title}</span>
            <span className="text-sm font-semibold text-xoopah-blue group-hover:underline">
              Open in Notion →
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
