import Link from "next/link";

type CrumbItem = { label: string; href: string };
type ChildLink = { label: string; href: string };

const ACCENTS = [
  "xoopah-accent-blue",
  "xoopah-accent-lime",
  "xoopah-accent-coral",
  "xoopah-accent-pink",
  "xoopah-accent-orange",
  "xoopah-accent-yellow",
];

export default function PlaceholderPage({
  eyebrow,
  title,
  description,
  crumbs,
  children,
  squareCards,
}: {
  eyebrow: string;
  title: string;
  description: string;
  crumbs?: CrumbItem[];
  children?: ChildLink[];
  squareCards?: boolean;
}) {
  return (
    <div className="space-y-5">
      <div>
        {crumbs && crumbs.length > 0 && (
          <div className="mb-2 flex flex-wrap items-center gap-1 text-xs text-black/40">
            {crumbs.map((c, i) => (
              <span key={c.href} className="flex items-center gap-1">
                <Link href={c.href} className="hover:text-xoopah-blue">
                  {c.label}
                </Link>
                {i < crumbs.length - 1 && <span>/</span>}
              </span>
            ))}
          </div>
        )}
        <p className="font-sub text-sm font-semibold uppercase tracking-[0.2em] text-xoopah-blue">
          {eyebrow}
        </p>
        <h1 className="xoopah-display mt-2 text-2xl text-black sm:text-3xl">{title}</h1>
        <p className="mt-2 max-w-xl text-sm text-black/60">{description}</p>
      </div>

      {children && children.length > 0 && squareCards && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {children.map((c, i) => (
            <Link
              key={c.href}
              href={c.href}
              className={`xoopah-card ${ACCENTS[i % ACCENTS.length]} group flex aspect-[4/3] flex-col justify-between p-5 pl-7 transition-transform hover:-translate-y-1`}
            >
              <span className="font-sub text-lg font-semibold leading-snug text-black">{c.label}</span>
              <span className="text-sm font-semibold text-xoopah-blue group-hover:underline">
                Open →
              </span>
            </Link>
          ))}
        </div>
      )}

      {children && children.length > 0 && !squareCards && (
        <div className="grid gap-4 sm:grid-cols-2">
          {children.map((c, i) => (
            <Link
              key={c.href}
              href={c.href}
              className={`xoopah-card ${ACCENTS[i % ACCENTS.length]} group flex items-center justify-between p-5 pl-7`}
            >
              <span className="font-sub font-semibold text-black">{c.label}</span>
              <span className="text-sm font-semibold text-xoopah-blue group-hover:underline">
                Open →
              </span>
            </Link>
          ))}
        </div>
      )}

      {(!children || children.length === 0) && (
        <div className="xoopah-card flex flex-col items-start gap-4 p-8">
          <svg width="56" height="32" viewBox="0 0 56 32" fill="none" aria-hidden="true">
            <path
              d="M2 24C8 8 14 8 20 24C26 40 32 40 38 24C42 12 46 12 54 20"
              stroke="#D6FC93"
              strokeWidth="5"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
          <p className="max-w-md text-sm text-black/70">
            No content populated here yet — this section is structured and
            ready to fill in.
          </p>
        </div>
      )}
    </div>
  );
}
