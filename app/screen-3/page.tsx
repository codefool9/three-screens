import Link from 'next/link';

export default function Screen3() {
  return (
    <div className="flex min-h-full flex-col">

      {/* Header */}
      <div className="flex shrink-0 items-center justify-between border-b border-gray-100 px-5 py-4">
        <Link href="/screen-2" className="flex items-center gap-1.5 text-gray-500">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <span className="text-sm">Back</span>
        </Link>
        <h1 className="text-base font-semibold text-gray-900">[ Detail Title ]</h1>
        <Link href="/" className="text-sm text-gray-500 underline underline-offset-2">
          Home
        </Link>
      </div>

      {/* Hero image */}
      <div className="shrink-0 px-5 pt-4">
        <div className="flex h-44 w-full flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-gray-200 bg-gray-100">
          <svg className="h-10 w-10 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
          <span className="text-xs text-gray-400">[ Image / Media ]</span>
        </div>
      </div>

      {/* Detail content */}
      <div className="flex-1 px-5 py-5">

        {/* Title */}
        <div className="mb-4">
          <div className="mb-2 h-5 w-48 rounded-full bg-gray-200" />
          <div className="flex items-center gap-2">
            <div className="h-3 w-20 rounded-full bg-gray-100" />
            <span className="text-gray-300">·</span>
            <div className="h-3 w-16 rounded-full bg-gray-100" />
          </div>
        </div>

        {/* Tags */}
        <div className="mb-5 flex gap-2">
          {['Tag 1', 'Tag 2', 'Tag 3'].map((tag) => (
            <div key={tag} className="rounded-full border border-dashed border-gray-300 bg-gray-100 px-3 py-1">
              <span className="text-xs text-gray-400">{tag}</span>
            </div>
          ))}
        </div>

        {/* Description skeleton */}
        <div className="mb-6">
          <p className="mb-3 text-[10px] uppercase tracking-widest text-gray-400">Details</p>
          <div className="space-y-2">
            <div className="h-3 w-full rounded-full bg-gray-100" />
            <div className="h-3 w-full rounded-full bg-gray-100" />
            <div className="h-3 w-5/6 rounded-full bg-gray-100" />
            <div className="h-3 w-full rounded-full bg-gray-100" />
            <div className="h-3 w-3/4 rounded-full bg-gray-100" />
          </div>
        </div>

        {/* Stats */}
        <div className="mb-6 grid grid-cols-3 gap-3">
          {['Stat 1', 'Stat 2', 'Stat 3'].map((s) => (
            <div key={s} className="rounded-xl border border-dashed border-gray-200 bg-gray-50 p-3 text-center">
              <div className="mx-auto mb-1 h-5 w-10 rounded bg-gray-200" />
              <span className="text-[10px] text-gray-400">{s}</span>
            </div>
          ))}
        </div>

      </div>

      {/* Primary action */}
      <div className="shrink-0 px-5 pb-5 pt-2">
        <button className="w-full rounded-2xl bg-gray-900 py-4 text-center">
          <span className="font-semibold text-white">[ Primary Action ]</span>
        </button>
      </div>

    </div>
  );
}
