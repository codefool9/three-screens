import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col px-5 pb-6 pt-8">

      {/* App identity */}
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gray-900">
          <span className="text-lg font-bold text-white">A</span>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-widest text-gray-400">Welcome to</p>
          <p className="text-base font-bold text-gray-900">[ App Name ]</p>
        </div>
      </div>

      {/* ── VALUE PROPOSITION ── dominant element ─────────────────── */}
      <div className="mb-8 rounded-3xl border-2 border-dashed border-gray-200 bg-gray-50 p-6">
        <p className="mb-2 text-[10px] uppercase tracking-widest text-gray-400">Core Value</p>
        <h1 className="mb-3 text-2xl font-bold leading-tight text-gray-900">
          [Your headline: the value at a glance]
        </h1>
        <p className="text-sm leading-relaxed text-gray-500">
          [One or two sentences describing what the product does and why it matters to your persona.]
        </p>
      </div>

      {/* Visual placeholder */}
      <div className="mb-8 flex h-40 w-full flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-gray-200 bg-gray-100">
        <svg className="h-10 w-10 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
        <span className="text-xs text-gray-400">[ Visual / Illustration ]</span>
      </div>

      {/* Primary CTA → Screen 2 */}
      <Link href="/screen-2">
        <div className="mb-3 flex w-full items-center justify-center gap-2 rounded-2xl bg-gray-900 py-4">
          <span className="font-semibold text-white">Get Started</span>
          <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </Link>

      {/* Secondary CTA placeholder */}
      <button className="mb-10 w-full rounded-2xl border border-gray-200 py-3.5">
        <span className="text-sm text-gray-400">[ Secondary Action ]</span>
      </button>

      {/* Feature highlights */}
      <div className="border-t border-gray-100 pt-6">
        <p className="mb-4 text-[10px] uppercase tracking-widest text-gray-400">What you get</p>
        <div className="space-y-3">
          {[
            'Feature one — explain the capability',
            'Feature two — explain the capability',
            'Feature three — explain the capability',
          ].map((text, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gray-100">
                <span className="text-xs font-bold text-gray-400">{i + 1}</span>
              </div>
              <div className="flex-1">
                <div className="h-3 w-full rounded-full bg-gray-100" />
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
