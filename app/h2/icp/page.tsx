import Link from "next/link";

export default function H2IcpPage() {
  return (
    <div className="space-y-8">
      <div>
        <div className="mb-2 flex flex-wrap items-center gap-1 text-xs text-black/40">
          <Link href="/h2" className="hover:text-xoopah-blue">H2</Link>
          <span>/</span>
        </div>
        <p className="font-sub text-sm font-semibold uppercase tracking-[0.2em] text-xoopah-blue">
          H2 2026 / ICP
        </p>
        <h1 className="xoopah-display mt-3 text-3xl text-black">
          E-commerce brands — now with services, too
        </h1>
        <p className="mt-2 max-w-xl text-sm text-black/60">
          Updated for H2: US-based e-commerce brands selling physical
          products under their own name, including brands that layer a
          services offering alongside their products.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="xoopah-card xoopah-accent-pink p-6 pl-8">
          <h2 className="font-sub text-sm font-semibold uppercase tracking-wide text-black/40">
            Who this is
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-black/70">
            US e-commerce brands selling physical products under their own
            brand — beauty, skincare, pets, and electronics remain the
            strongest-fit categories from H1 research. The H2 update widens
            this to brands that combine product sales with a services
            layer (e.g. product + fitting, product + consultation), not
            just pure product-only sellers.
          </p>
        </div>
        <div className="xoopah-card xoopah-accent-blue p-6 pl-8">
          <h2 className="font-sub text-sm font-semibold uppercase tracking-wide text-black/40">
            Why this update
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-black/70">
            H1 research (Articos, founder interviews, 550-user onboarding
            data) established e-commerce as the core segment. Widening to
            include a services layer is the H2 refinement — validation
            work for this is tracked in ICP Validation on the homepage.
          </p>
        </div>
      </div>

      <div className="xoopah-card flex flex-col items-start gap-4 p-8">
        <span className="rounded-full bg-xoopah-light-blue px-3 py-1 text-xs font-semibold text-xoopah-blue">
          Carried over from H1
        </span>
        <p className="max-w-md text-sm text-black/70">
          Full H1 ICP research — Articos study, founder interviews, Maze
          survey, onboarding data — still lives in H1 → Strategy.
        </p>
        <Link href="/h1/strategy" className="text-sm font-semibold text-xoopah-blue hover:underline">
          See H1 Strategy research →
        </Link>
      </div>
    </div>
  );
}
