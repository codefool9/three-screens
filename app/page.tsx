import Link from 'next/link';

const categories = [
  { label: 'Obedience', emoji: '🦴', color: 'bg-blue-100 text-blue-800' },
  { label: 'Tricks',    emoji: '⭐', color: 'bg-purple-100 text-purple-800' },
  { label: 'Hunting',   emoji: '🦆', color: 'bg-green-100 text-green-800' },
  { label: 'Agility',   emoji: '🏃', color: 'bg-orange-100 text-orange-800' },
];

const popularCourses = [
  { emoji: '🐶', title: 'Puppy Basics', tag: 'Obedience', level: 'Easy', weeks: 3 },
  { emoji: '🦮', title: 'Leash Training', tag: 'Obedience', level: 'Medium', weeks: 4 },
];

export default function Home() {
  return (
    <div className="flex flex-col bg-amber-50 pb-6">

      {/* App header */}
      <div className="flex items-center justify-between px-5 pb-4 pt-5">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🐾</span>
          <span className="text-xl font-extrabold tracking-tight text-amber-900">PawSteps</span>
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-200">
          <span className="text-base">🧑</span>
        </div>
      </div>

      {/* ── VALUE PROPOSITION ── dominant element ──────────────── */}
      <div className="px-5 pb-5">
        <h1 className="text-[34px] font-extrabold leading-tight tracking-tight text-amber-900">
          Train your<br />best friend.
        </h1>
      </div>

      {/* Hero illustration */}
      <div className="mx-5 mb-6 flex h-40 items-center justify-center rounded-3xl bg-gradient-to-br from-amber-200 to-amber-300 shadow-inner">
        <div className="text-7xl">🐕</div>
      </div>

      {/* Primary CTA */}
      <div className="px-5 pb-3">
        <Link href="/screen-2">
          <div className="flex w-full items-center justify-center gap-2 rounded-2xl bg-amber-600 py-4 shadow-md active:bg-amber-700">
            <span className="text-base font-bold text-white">Start Training</span>
            <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </Link>
      </div>

      {/* Secondary CTA */}
      <div className="px-5 pb-8">
        <button className="w-full rounded-2xl border-2 border-amber-300 bg-amber-50 py-3 text-sm font-semibold text-amber-700">
          Find a Local Trainer 🗺️
        </button>
      </div>

      {/* Browse by goal */}
      <div className="px-5 pb-5">
        <div className="grid grid-cols-4 gap-2">
          {categories.map((cat) => (
            <Link key={cat.label} href="/screen-2">
              <div className="flex flex-col items-center gap-1.5 rounded-2xl bg-white px-2 py-3 shadow-sm border border-amber-100 active:bg-amber-50">
                <span className="text-xl">{cat.emoji}</span>
                <span className="text-[10px] font-semibold text-stone-600">{cat.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Popular courses */}
      <div className="px-5">
        <div className="grid grid-cols-2 gap-3">
          {popularCourses.map((course) => (
            <Link key={course.title} href="/screen-3">
              <div className="rounded-2xl bg-white p-4 shadow-sm border border-amber-100 active:bg-amber-50">
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-2xl">
                  {course.emoji}
                </div>
                <p className="mb-1 text-sm font-bold text-amber-900 leading-tight">{course.title}</p>
                <p className="text-xs text-stone-500">{course.level} · {course.weeks} wks</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}
