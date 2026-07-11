import Link from "next/link";

const COLORS = [
  { name: "Primary blue", hex: "#4485F4" },
  { name: "Signature lime", hex: "#D6FC93" },
  { name: "Orange", hex: "#FF7838" },
  { name: "Coral", hex: "#FF9F2C" },
  { name: "Yellow", hex: "#FDC857" },
  { name: "Pink", hex: "#FF8BF3" },
  { name: "Light blue", hex: "#C6E0FB" },
];

const TYPE_SCALE = [
  { weight: "ExtraBold", use: "Headlines", face: "Lexend" },
  { weight: "SemiBold", use: "Subheadings & CTAs", face: "Lexend" },
  { weight: "Regular", use: "Body copy", face: "Lexend" },
];

const LOGO_VARIANTS = [
  { name: "Blue", file: "/brand/logo-blue.png", use: "Default mark" },
  { name: "White", file: "/brand/logo-white.png", use: "On solid, darker backgrounds" },
];

const LOGO_MISUSE = [
  "Do not crop the logo",
  "Do not change the transparency of the logo",
  "Do not use different colors",
  "Do not distort the logo",
  "Do not use drop shadows or any other effects",
  "Do not re-create using any other typeface",
  "Do not outline the logotype",
];

export default function BrandVisualPage() {
  return (
    <div className="space-y-12">
      <div>
        <p className="mb-2 text-xs text-black/40">
          <Link href="/brand" className="hover:text-xoopah-blue">Brand</Link> / Visual
        </p>
        <p className="font-sub text-sm font-semibold uppercase tracking-[0.2em] text-xoopah-blue">
          Brand · Visual
        </p>
        <h1 className="mt-3 xoopah-display text-3xl text-black">
          Modern, bold, <span className="xoopah-highlight">approachable</span>, clean.
        </h1>
      </div>

      {/* Logo */}
      <div>
        <h2 className="font-sub text-lg font-semibold text-black">Logo</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {LOGO_VARIANTS.map((l) => (
            <div key={l.name} className="xoopah-card overflow-hidden">
              <div className="flex h-32 items-center justify-center bg-black p-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={l.file} alt={`Xoopah logo — ${l.name}`} className="max-h-full max-w-full object-contain" />
              </div>
              <div className="p-4">
                <p className="text-sm font-semibold text-black">{l.name}</p>
                <p className="text-xs text-black/50">{l.use}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="xoopah-card xoopah-accent-lime p-5 pl-7">
            <p className="font-sub text-sm font-semibold text-black">Sizing</p>
            <ul className="mt-2 space-y-1 text-sm text-black/60">
              <li>Small-use wordmark: 50–90px wide</li>
              <li>Small-use submark: 15–20px tall</li>
              <li>Placement: bottom-left, small, unobtrusive</li>
            </ul>
          </div>
          <div className="xoopah-card xoopah-accent-lime p-5 pl-7">
            <p className="font-sub text-sm font-semibold text-black">Never</p>
            <ul className="mt-2 space-y-1 text-sm text-black/60">
              {LOGO_MISUSE.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Colors */}
      <div>
        <h2 className="font-sub text-lg font-semibold text-black">Colors</h2>
        <p className="mt-1 text-sm text-black/60">
          One dominant background color per layout. No gradients. Black is
          never used as a background — text only.
        </p>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {COLORS.map((c) => (
            <div key={c.hex} className="xoopah-card overflow-hidden">
              <div className="h-16" style={{ backgroundColor: c.hex }} />
              <div className="p-3">
                <p className="text-xs font-semibold text-black">{c.name}</p>
                <p className="text-xs text-black/40">{c.hex}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-black/50">
          Text only in white, black, or blue. Lime highlights one or two
          words in a headline — never more. All combinations shown pass
          accessible contrast standards.
        </p>
        <div className="mt-4 overflow-hidden rounded-2xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/colors-expanded.png" alt="Expanded color palette, tints and shades" className="w-full" />
        </div>
        <div className="mt-3 rounded-xl border border-dashed border-black/15 p-4 text-xs text-black/50">
          <span className="font-sub font-semibold text-black">Expanded branding — WIP, not ratified:</span>{" "}
          tints and shades of these colors are being explored to open the
          palette up further, beyond the flat hex set above.
        </div>
      </div>

      {/* Typography */}
      <div>
        <h2 className="font-sub text-lg font-semibold text-black">Typography</h2>
        <p className="mt-1 text-sm text-black/60">
          Primary typeface: Lexend.
        </p>
        <div className="xoopah-card mt-4 divide-y divide-black/5">
          {TYPE_SCALE.map((t) => (
            <div key={t.weight} className="flex items-center justify-between px-6 py-4">
              <span className="font-sub text-sm font-semibold text-black">{t.weight}</span>
              <span className="text-sm text-black/50">{t.use}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-xl border border-dashed border-black/15 p-4 text-xs text-black/50">
          <span className="font-sub font-semibold text-black">Expanded branding — WIP, not ratified:</span>{" "}
          Bricolage Grotesque is being added as a second typeface,
          primarily for subheadings, alongside Lexend.
        </div>
      </div>

      {/* Photography */}
      <div className="xoopah-card xoopah-accent-blue p-6 pl-8">
        <h2 className="font-sub text-lg font-semibold text-black">Photography</h2>
        <ul className="mt-3 space-y-2 text-sm text-black/60">
          <li>Authentic, diverse, relatable, energetic, human</li>
          <li>Avoid polished, generic white-background stock</li>
          <li>Images should capture the ICP directly</li>
        </ul>
      </div>

      {/* Doodles */}
      <div>
        <h2 className="font-sub text-lg font-semibold text-black">Doodles</h2>
        <p className="mt-1 text-sm text-black/60">
          Moving toward a hand-drawn-on-paper-then-vectorized feel — these
          are the rough sketches; final versions will be similar but drawn
          a little more neatly.
        </p>
        <div className="xoopah-card mt-4 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/doodles.png" alt="Xoopah hand-drawn doodle set" className="w-full" />
        </div>
        <p className="mt-2 text-xs text-black/40">WIP — not fully ratified.</p>
      </div>

      {/* Patterns */}
      <div>
        <h2 className="font-sub text-lg font-semibold text-black">Patterns</h2>
        <p className="mt-1 text-sm text-black/60">
          Five wavy, bold-color patterns to add energy without overwhelming
          content.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {[1, 2, 4].map((n) => (
            <div key={n} className="xoopah-card overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/brand/pattern-0${n}.png`}
                alt={`Pattern ${n < 10 ? "0" + n : n}`}
                className="w-full"
              />
              <p className="px-4 py-2 text-xs font-semibold text-black/50">
                Pattern {String(n).padStart(2, "0")}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-2 text-xs text-black/40">
          WIP — not fully ratified. Pattern 03 and Pattern 05, and the black
          logo variant, were corrupted in the last export and are hidden
          until they're re-pulled from the source brand deck.
        </p>
      </div>

      {/* Layout */}
      <div className="xoopah-card xoopah-accent-blue p-6 pl-8">
        <h2 className="font-sub text-lg font-semibold text-black">Layout</h2>
        <p className="mt-3 text-sm text-black/60">
          Headline → supporting copy → product interface or device mockup →
          logo. UI screenshots always sit inside rounded white cards or
          device frames. Minimal layouts, strong hierarchy, large headlines.
        </p>
      </div>
    </div>
  );
}
