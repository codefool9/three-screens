import Link from 'next/link';

export default function Screen2() {
  return (
    <div className="flex min-h-full flex-col">

      {/* Header */}
      <div className="flex shrink-0 items-center justify-between border-b border-gray-100 px-5 py-4">
        <Link href="/" className="flex items-center gap-1.5 text-gray-500">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <span className="text-sm">Home</span>
        </Link>
        <h1 className="text-base font-semibold text-gray-900">[ Screen 2 Title ]</h1>
        <div className="w-16" />
      </div>

      {/* Search / filter bar */}
      <div className="shrink-0 border-b border-gray-100 px-5 py-3">
        <div className="flex items-center gap-3 rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 px-4 py-3">
          <svg className="h-4 w-4 shrink-0 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <span className="text-sm text-gray-400">[ Search or filter placeholder ]</span>
        </div>
      </div>

      {/* Content list */}
      <div className="flex-1 px-5 py-4">
        <p className="mb-4 text-[10px] uppercase tracking-widest text-gray-400">[ Results / Content ]</p>
        <div className="space-y-3">
          {[1, 2, 3, 4].map((i) => (
            <Link key={i} href="/screen-3">
              <div className="flex cursor-pointer items-center gap-4 rounded-2xl border-2 border-dashed border-gray-200 p-4 transition-colors hover:border-gray-400 hover:bg-gray-50">
                {/* Thumbnail */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-dashed border-gray-300 bg-gray-100">
                  <span className="text-xs text-gray-400">IMG</span>
                </div>
                {/* Skeleton lines */}
                <div className="min-w-0 flex-1 space-y-2">
                  <div className="h-3.5 w-28 rounded-full bg-gray-200" />
                  <div className="h-2.5 w-full rounded-full bg-gray-100" />
                  <div className="h-2.5 w-3/4 rounded-full bg-gray-100" />
                </div>
                {/* Chevron */}
                <svg className="h-4 w-4 shrink-0 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}
