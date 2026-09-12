'use client';
import Link from 'next/link';
import { useState } from 'react';

const CATEGORIES = ['All', 'Obedience', 'Tricks', 'Hunting', 'Agility'] as const;
type Category = typeof CATEGORIES[number];

const courses = [
  { emoji: '🐶', title: 'Puppy Basics',       category: 'Obedience', level: 'Easy',     weeks: 3, lessons: 8,  rating: 4.9, reviews: 312 },
  { emoji: '🦮', title: 'Leash Training',      category: 'Obedience', level: 'Medium',   weeks: 4, lessons: 10, rating: 4.8, reviews: 204 },
  { emoji: '🐾', title: 'Sit, Stay, Come',     category: 'Obedience', level: 'Easy',     weeks: 2, lessons: 6,  rating: 4.9, reviews: 418 },
  { emoji: '🏠', title: 'House Training 101',  category: 'Obedience', level: 'Easy',     weeks: 3, lessons: 7,  rating: 4.7, reviews: 189 },
  { emoji: '⭐', title: 'Basic Tricks Pack',   category: 'Tricks',    level: 'Easy',     weeks: 3, lessons: 8,  rating: 4.8, reviews: 276 },
  { emoji: '🎪', title: 'Advanced Tricks',     category: 'Tricks',    level: 'Medium',   weeks: 5, lessons: 12, rating: 4.6, reviews: 94  },
  { emoji: '🦆', title: 'Hunting Intro',       category: 'Hunting',   level: 'Advanced', weeks: 8, lessons: 15, rating: 4.9, reviews: 67  },
  { emoji: '🐦', title: 'Bird Dog Basics',     category: 'Hunting',   level: 'Advanced', weeks: 6, lessons: 12, rating: 4.8, reviews: 52  },
  { emoji: '🏃', title: 'Agility Foundations', category: 'Agility',   level: 'Medium',   weeks: 6, lessons: 10, rating: 4.7, reviews: 131 },
];

const specialists = [
  { name: 'Jake M.',  specialty: 'Obedience & Tricks', rating: 4.9, distance: '2.1 mi', emoji: '👨‍🏫' },
  { name: 'Sarah T.', specialty: 'Hunting Dogs',       rating: 4.8, distance: '3.4 mi', emoji: '👩‍🏫' },
  { name: 'Mike R.',  specialty: 'Agility',            rating: 4.7, distance: '5.2 mi', emoji: '👨‍🎓' },
];

const levelColors: Record<string, string> = {
  Easy:     'bg-green-100 text-green-700',
  Medium:   'bg-yellow-100 text-yellow-700',
  Advanced: 'bg-red-100 text-red-700',
};

const categoryColors: Record<string, string> = {
  Obedience: 'bg-blue-100 text-blue-700',
  Tricks:    'bg-purple-100 text-purple-700',
  Hunting:   'bg-green-100 text-green-700',
  Agility:   'bg-orange-100 text-orange-700',
};

function Stars({ rating }: { rating: number }) {
  return (
    <span className="text-amber-400 text-xs">
      {'★'.repeat(Math.round(rating))}{'☆'.repeat(5 - Math.round(rating))}
    </span>
  );
}

export default function Screen2() {
  const [active, setActive] = useState<Category>('All');

  const filtered = courses.filter(
    (c) => active === 'All' || c.category === active
  );

  return (
    <div className="flex min-h-full flex-col bg-amber-50">

      {/* Header */}
      <div className="flex shrink-0 items-center justify-between border-b border-amber-200 bg-white px-5 py-4">
        <Link href="/" className="flex items-center gap-1.5 text-amber-700">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <span className="text-sm font-medium">Home</span>
        </Link>
        <h1 className="text-base font-extrabold text-amber-900">Browse Courses</h1>
        <button className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100">
          <svg className="h-4 w-4 text-amber-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
      </div>

      {/* Filter tabs */}
      <div className="shrink-0 border-b border-amber-200 bg-white px-5 py-3">
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
                active === cat
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'bg-amber-100 text-amber-700 hover:bg-amber-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Course list */}
      <div className="flex-1 px-5 py-4">
        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-amber-700">
          {filtered.length} Course{filtered.length !== 1 ? 's' : ''}
          {active !== 'All' ? ` · ${active}` : ''}
        </p>
        <div className="space-y-3">
          {filtered.map((course) => (
            <Link key={course.title} href="/screen-3">
              <div className="flex cursor-pointer items-center gap-4 rounded-2xl border border-amber-100 bg-white p-4 shadow-sm transition-colors active:bg-amber-50">
                {/* Icon */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-2xl">
                  {course.emoji}
                </div>
                {/* Info */}
                <div className="min-w-0 flex-1">
                  <p className="mb-1 text-sm font-bold text-amber-900 leading-tight">{course.title}</p>
                  <div className="mb-1 flex flex-wrap gap-1">
                    <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${categoryColors[course.category]}`}>
                      {course.category}
                    </span>
                    <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${levelColors[course.level]}`}>
                      {course.level}
                    </span>
                    <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold text-amber-700">
                      {course.weeks} wks
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Stars rating={course.rating} />
                    <span className="text-[10px] text-stone-400">({course.reviews})</span>
                  </div>
                </div>
                {/* Chevron */}
                <svg className="h-4 w-4 shrink-0 text-amber-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* ── Local Specialists ──────────────────────────────────── */}
        <div className="mt-8">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-bold uppercase tracking-widest text-amber-700">🗺️ Local Specialists</p>
            <span className="text-xs font-medium text-amber-600">See all</span>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {specialists.map((s) => (
              <div key={s.name} className="shrink-0 w-36 rounded-2xl border border-amber-100 bg-white p-4 shadow-sm">
                <div className="mb-2 text-2xl text-center">{s.emoji}</div>
                <p className="text-xs font-bold text-amber-900 text-center leading-tight">{s.name}</p>
                <p className="mb-2 text-[10px] text-stone-500 text-center">{s.specialty}</p>
                <div className="flex items-center justify-center gap-1">
                  <span className="text-amber-400 text-xs">★</span>
                  <span className="text-[10px] font-semibold text-stone-600">{s.rating}</span>
                  <span className="text-[10px] text-stone-400">· {s.distance}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
