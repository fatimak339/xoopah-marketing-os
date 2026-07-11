import Link from "next/link";
import NotionSyncedSection from "@/components/NotionSyncedSection";

export const revalidate = 300;

export default function H2ReportingPage() {
  return (
    <div className="space-y-6">
      <div>
        <div className="mb-2 flex flex-wrap items-center gap-1 text-xs text-black/40">
          <Link href="/h2" className="hover:text-xoopah-blue">H2</Link>
          <span>/</span>
        </div>
        <p className="font-sub text-sm font-semibold uppercase tracking-[0.2em] text-xoopah-blue">
          H2 2026 / Reporting
        </p>
        <h1 className="xoopah-display mt-2 text-2xl text-black sm:text-3xl">Not started yet</h1>
        <p className="mt-2 max-w-xl text-sm text-black/60">
          Auto-synced from Notion — tag a page &quot;Reporting&quot; in the
          H2 Document Hub and it lands here on its own.
        </p>
      </div>
      <NotionSyncedSection section="Reporting" />
    </div>
  );
}
