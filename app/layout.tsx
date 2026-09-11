import type { Metadata } from 'next'
import './globals.css'
import BottomNav from '@/components/BottomNav'

export const metadata: Metadata = {
  title: 'App Prototype',
  description: 'Three-screen mobile app prototype',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-200 md:flex md:min-h-screen md:items-center md:justify-center md:py-10">
        {/* Phone frame on desktop, full-screen on mobile */}
        <div className="flex w-full flex-col overflow-hidden bg-white md:h-[844px] md:w-[390px] md:rounded-[48px] md:shadow-2xl">

          {/* Status Bar */}
          <div className="flex h-10 shrink-0 items-center justify-between bg-white px-5">
            <span className="text-sm font-semibold text-gray-900">9:41</span>
            <div className="flex items-center gap-1.5 text-gray-700">
              <span className="text-[11px] font-semibold">5G</span>
              {/* Signal bars */}
              <div className="flex items-end gap-px" style={{ height: '12px' }}>
                <div className="w-[3px] rounded-sm bg-gray-700" style={{ height: '40%' }} />
                <div className="w-[3px] rounded-sm bg-gray-700" style={{ height: '55%' }} />
                <div className="w-[3px] rounded-sm bg-gray-700" style={{ height: '75%' }} />
                <div className="w-[3px] rounded-sm bg-gray-700" style={{ height: '100%' }} />
              </div>
              {/* Battery */}
              <div className="flex items-center gap-px">
                <div className="flex h-[12px] w-[22px] items-center rounded-[3px] border border-gray-700 px-[2px]">
                  <div className="h-[7px] w-full rounded-[1px] bg-gray-700" />
                </div>
                <div className="h-[5px] w-[2px] rounded-r-[1px] bg-gray-500" />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>

          {/* Bottom Navigation */}
          <BottomNav />
        </div>
      </body>
    </html>
  )
}
