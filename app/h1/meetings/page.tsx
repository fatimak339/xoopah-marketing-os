import Link from "next/link";

const MEETINGS_LOG = [
  { name: "Xoopah Townhall (6-week paid ads funnel review)", type: "Cross-functional", date: "Apr 30, 2026", attendees: "Company-wide", decision: "Reviewed 5 marketing channels (Paid Ads, Website, Social, Emails, Community). 6-week paid ads funnel Mar 17–Apr 29: 600 LP → 123 business info → 112 generated → 46 signed up → 8–10 returned.", followUp: false },
  { name: "Townhall", type: "Cross-functional", date: "—", attendees: "—", decision: null, followUp: false },
  { name: "H1 Progress Review", type: "1:1 Sumaiya", date: "Jun 30, 2026", attendees: "—", decision: null, followUp: false },
  { name: "Client Funnel Review (Mar 17 – Apr 6 funnel)", type: "Team Sync", date: "Apr 7, 2026", attendees: "Marketing + product", decision: "Funnel: 253 LP → 71 trials (41% of 2-wk LP) → 54 business info → 36 generated → 28 signed up; only 7 returned. 4 users returned in last 3 weeks (Rugbygirl, CallblueyAI, Thomas Coyle, Alfonza, Randy, Lulaj, J Cordonez). Retention/return is the weak step.", followUp: true },
  { name: "H2 Progress Review", type: "1:1 Sumaiya", date: "Jul 1, 2026", attendees: "—", decision: null, followUp: true },
  { name: "2-Week Sync", type: "1:1 Sumaiya", date: "—", attendees: "—", decision: null, followUp: true },
];

export default function MeetingsPage() {
  return (
    <div className="space-y-10">
      <div>
        <p className="mb-2 text-xs text-black/40">
          <Link href="/h1" className="hover:text-xoopah-blue">H1</Link> / Meetings
        </p>
        <p className="font-sub text-sm font-semibold uppercase tracking-[0.2em] text-xoopah-blue">
          Meetings
        </p>
        <h1 className="mt-3 xoopah-display text-3xl text-black">
          Internal meetings &amp; the funnel data behind them
        </h1>
      </div>

      <div className="xoopah-card xoopah-accent-blue p-6 pl-8">
        <h2 className="font-sub text-lg font-semibold text-black">
          Client Funnel Review — Funnel (17th – 6th April)
        </h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-black/5 bg-xoopah-light-blue/30">
                {["Month/Week", "Landing Page", "Trial Started", "Business Info", "Generated", "Signed Up", "Returned"].map((h) => (
                  <th key={h} className="px-4 py-3 font-sub font-semibold text-black">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["March 2026 – Week 1 (17th–24th)", "133", "22 (20, 2)", "18", "7", "8*", "—"],
                ["March 2026 – Week 2 (25th–31st)", "62", "24 (22, 2)", "18", "12", "9", "—"],
                ["April 2026 – Week 3 (1st–6th)", "58", "25 (17, 8)", "18", "17", "11*", "—"],
                ["Total", "253", "71", "54", "36", "28", "7"],
                ["2-week Total", "120", "49 (41%)", "36 (30%)", "29 (24%)", "20 (17%)", "—"],
              ].map((row, i) => (
                <tr key={i} className={i !== 0 ? "border-t border-black/5" : ""}>
                  {row.map((cell, j) => (
                    <td key={j} className={`px-4 py-3 ${j === 0 ? "font-semibold text-black" : "text-black/70"}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ul className="mt-4 space-y-1 text-sm text-black/60">
          <li>Landing page is tracked on the web scrapper page.</li>
          <li>Trial started includes users that have shared website or skipped.</li>
          <li>4 users returned in the last 3 weeks (Rugbygirl, CallblueyAI, Thomas Coyle, Alfonza, Randy, Lulaj, J Cordonez).</li>
        </ul>
      </div>

      <div className="xoopah-card xoopah-accent-blue p-6 pl-8">
        <h2 className="font-sub text-lg font-semibold text-black">
          Xoopah Townhall — Marketing Channels
        </h2>
        <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm text-black/70">
          <li>Paid Ads</li>
          <li>Website</li>
          <li>Social Media Platforms (Facebook, Instagram, LinkedIn)</li>
          <li>Emails (old, current, pipedrive, dropped)</li>
          <li>Community</li>
        </ol>
        <h3 className="mt-5 font-sub text-sm font-semibold text-black">
          Funnel (6 weeks — via Paid Ads)
        </h3>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-black/5 bg-xoopah-light-blue/30">
                {["Month/Week", "Landing Page", "Trial Started", "Business Info", "Generated", "Signed Up", "Returned"].map((h) => (
                  <th key={h} className="px-4 py-3 font-sub font-semibold text-black">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-3 font-semibold text-black">17th March – 29th April</td>
                <td className="px-4 py-3 text-black/70">600</td>
                <td className="px-4 py-3 text-black/70">15</td>
                <td className="px-4 py-3 text-black/70">123</td>
                <td className="px-4 py-3 text-black/70">112</td>
                <td className="px-4 py-3 text-black/70">46</td>
                <td className="px-4 py-3 text-black/70">8–10</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="font-sub text-lg font-semibold text-black">Meetings log</h2>
        <div className="xoopah-card mt-4 overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-black/5 bg-xoopah-light-blue/30">
                <th className="px-5 py-3 font-sub font-semibold text-black">Meeting</th>
                <th className="px-5 py-3 font-sub font-semibold text-black">Type</th>
                <th className="px-5 py-3 font-sub font-semibold text-black">Date</th>
                <th className="px-5 py-3 font-sub font-semibold text-black">Follow-up</th>
              </tr>
            </thead>
            <tbody>
              {MEETINGS_LOG.map((m, i) => (
                <tr key={m.name} className={i !== 0 ? "border-t border-black/5" : ""}>
                  <td className="px-5 py-4 align-top font-semibold text-black">
                    {m.name}
                    {m.decision && <p className="mt-1 font-normal text-black/60">{m.decision}</p>}
                  </td>
                  <td className="px-5 py-4 align-top text-black/60">{m.type}</td>
                  <td className="px-5 py-4 align-top text-black/60">{m.date}</td>
                  <td className="px-5 py-4 align-top text-black/60">{m.followUp ? "Yes" : "No"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
