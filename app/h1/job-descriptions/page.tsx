import Link from "next/link";

export default function JobDescriptionsPage() {
  return (
    <div className="space-y-10">
      <div>
        <p className="mb-2 text-xs text-black/40">
          <Link href="/h1" className="hover:text-xoopah-blue">H1</Link> / Job Descriptions
        </p>
        <p className="font-sub text-sm font-semibold uppercase tracking-[0.2em] text-xoopah-blue">
          Job Descriptions
        </p>
        <h1 className="mt-3 xoopah-display text-3xl text-black">
          Animator, Creative Designer, SEO Specialist
        </h1>
      </div>

      <div className="xoopah-card xoopah-accent-blue p-6 pl-8">
        <div className="flex items-center justify-between">
          <h2 className="font-sub text-lg font-semibold text-black">JD — Animator</h2>
          <span className="rounded-full bg-[#D9F2E3] px-3 py-1 text-xs font-semibold text-[#1E7A46]">Complete</span>
        </div>

        <h3 className="mt-5 font-sub text-sm font-semibold text-black">Why join SpurSol?</h3>
        <p className="mt-2 text-sm text-black/70">
          SpurSol is a purpose-driven technology company. We are
          bootstrapped, profitable, and proud. Our reason for existence is
          to create impact for every life we touch, by doing the right
          thing. We believe massive impact is possible when you gather the
          right people, give them the right values, and equip them with the
          right opportunities and resources to maximize their potential.
        </p>
        <p className="mt-2 text-sm text-black/70">
          The goal above is lofty and idealistic. To bring this to reality,
          we are building teams of individuals that are purpose-driven and
          want to chase greater outcomes with their life&apos;s work and
          have unwavering faith in their ability to cause change.
        </p>
        <p className="mt-2 text-sm text-black/70">
          Whether you are a technologist, a marketer, or a generalist, we
          seek people who align with our values and are driven and
          self-motivated to excel.
        </p>

        <h3 className="mt-5 font-sub text-sm font-semibold text-black">About the Role</h3>
        <p className="mt-2 text-sm text-black/70">
          We are looking for a Visual Content Creator, who will be
          responsible for creating high-performing video content for paid
          social campaigns, primarily Meta ads. The role focuses on
          executing clear briefs and turning them into conversion-driven
          video creatives. This includes editing short-form ads,
          occasionally shooting UGC-style content, and staying updated with
          trends in paid advertising.
        </p>

        <h3 className="mt-5 font-sub text-sm font-semibold text-black">Key Responsibilities</h3>
        <div className="mt-2 space-y-3 text-sm text-black/70">
          <p><strong className="text-black">A. Video Editing —</strong> Edit videos optimized for Meta ads with strong hooks, pacing, and clear messaging. Apply text overlays, motion graphics, transitions, and sound design that support performance and conversions.</p>
          <p><strong className="text-black">B. Video Shooting —</strong> Shoot UGC-style and ad-friendly footage using a phone or camera with proper lighting and framing. Follow shot lists, creative direction, and brand guidelines.</p>
          <p><strong className="text-black">C. Trend &amp; Research —</strong> Research trending music, ad formats, hooks, and creative styles performing well on Meta. Stay updated on paid ad trends relevant to different industries.</p>
          <p><strong className="text-black">D. Timely Delivery &amp; Communication —</strong> Deliver projects within agreed timelines and maintain consistency in quality. Communicate progress, blockers, and updates clearly.</p>
          <p><strong className="text-black">E. Secondary: Graphic Design Support —</strong> Support basic graphic design needs such as thumbnails, simple layouts, and static ad creatives when required.</p>
        </div>

        <h3 className="mt-5 font-sub text-sm font-semibold text-black">Qualifications</h3>
        <ul className="mt-2 space-y-1.5 text-sm text-black/70">
          <li>1–2 years of experience using video editing tools (Premiere Pro, After Effects, Final Cut Pro, DaVinci Resolve, or CapCut)</li>
          <li>Experience creating short-form video content for paid social platforms</li>
          <li>Strong understanding of ad-focused editing principles — hooks, retention, pacing, visual hierarchy</li>
          <li>Ability to shoot simple, clean, UGC-style videos with good lighting, framing, and stability</li>
          <li>Good visual taste with an eye for typography, composition, and clean design execution</li>
        </ul>
      </div>

      <div className="xoopah-card border-2 border-dashed border-black/15 p-6">
        <p className="font-sub text-sm font-semibold text-black">Pending next pass</p>
        <p className="mt-2 text-sm text-black/60">
          JD — Creative Designer (Complete) and JD — SEO Specialist (In
          Progress) are in Notion but not yet pulled in full detail here.
        </p>
      </div>
    </div>
  );
}
