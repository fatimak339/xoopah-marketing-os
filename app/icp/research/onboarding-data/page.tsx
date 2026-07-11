import Link from "next/link";

const STATS = [
  { value: "54%", label: "Activation rate", sub: "Highest in the flow — pure e-commerce" },
  { value: "49", label: "Users (9% of 550)", sub: "E-commerce + Beauty/Salon combined" },
  { value: "1.0", label: "Avg creatives/user", sub: "Pure e-commerce — highest output rate" },
  { value: "550", label: "Total users tracked", sub: "Full onboarding flow sample" },
];

const SEGMENTS = [
  { segment: "E-commerce & Beauty/Salons", volume: "49 (9%)", signup: "55% signed up, 78% onboarded", activation: "41%", creatives: "0.71" },
  { segment: "E-commerce", volume: "28 (5%)", signup: "39% signed up, 93% onboarded", activation: "54%", creatives: "1.0" },
];

export default function OnboardingDataPage() {
  return (
    <div className="space-y-10">
      <div>
        <p className="mb-2 text-xs text-black/40">
          <Link href="/icp" className="hover:text-xoopah-blue">ICP</Link> / Onboarding data
        </p>
        <p className="font-sub text-sm font-semibold uppercase tracking-[0.2em] text-xoopah-blue">
          Research method
        </p>
        <h1 className="mt-3 max-w-2xl xoopah-display text-3xl text-black">
          Onboarding data — 550 users
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-black/60">
          Among 550 users, pure e-commerce accounts for 28 signups (5%) with
          54% activation and 1.0 average creatives per user — the highest
          activation rate in the entire flow.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="xoopah-card xoopah-accent-lime p-5 pl-7">
            <p className="text-2xl font-extrabold text-black sm:text-3xl">{s.value}</p>
            <p className="mt-1 font-sub text-sm font-semibold text-black">{s.label}</p>
            <p className="mt-1 text-xs text-black/50">{s.sub}</p>
          </div>
        ))}
      </div>

      <div className="xoopah-card overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-black/5 bg-xoopah-light-blue/30">
              <th className="px-5 py-3 font-sub font-semibold text-black">Segment</th>
              <th className="px-5 py-3 font-sub font-semibold text-black">Volume (550 users)</th>
              <th className="px-5 py-3 font-sub font-semibold text-black">Signup → Onboarding</th>
              <th className="px-5 py-3 font-sub font-semibold text-black">Activation rate</th>
              <th className="px-5 py-3 font-sub font-semibold text-black">Avg creatives</th>
            </tr>
          </thead>
          <tbody>
            {SEGMENTS.map((s, i) => (
              <tr key={s.segment} className={i !== 0 ? "border-t border-black/5" : ""}>
                <td className="px-5 py-4 font-semibold text-black">{s.segment}</td>
                <td className="px-5 py-4 text-black/70">{s.volume}</td>
                <td className="px-5 py-4 text-black/70">{s.signup}</td>
                <td className="px-5 py-4 text-black/70">{s.activation}</td>
                <td className="px-5 py-4 text-black/70">{s.creatives}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="xoopah-card xoopah-accent-blue p-6 pl-8">
        <h2 className="font-sub text-lg font-semibold text-black">Analysis</h2>
        <p className="mt-2 text-sm text-black/70">
          Adding beauty/salon scope expands the segment to 49 users (9%)
          with 41% activation, making it the second-highest volume segment.
          While the combined segment shows a lower activation rate than
          pure e-commerce, the volume increase and the consistent pattern
          of visual-asset-dependent performance across all features
          confirms that e-commerce + beauty/salon is the right scope for
          the ICP. The 54% activation ceiling even for the best-fit segment
          is itself indirect evidence of friction — a gap between signup
          and real usage that the product and GTM strategy must address.
        </p>
      </div>
    </div>
  );
}
