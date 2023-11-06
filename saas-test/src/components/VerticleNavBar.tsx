// components/VerticalNavBar.tsx
'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
import { UserButton } from '@clerk/nextjs'; // Make sure to import UserButton

const VerticalNavBar = () => {
  const pathname = usePathname();

  return (
    <nav className="w-64 h-screen p-4 text-gray-200 bg-gray-900 flex flex-col">
      {/* Logo or App name next to UserButton */}
      <div className="flex justify-between items-center mb-8 text-3xl font-bold text-white border-b-2 border-white pb-2">
        <span>You^10</span>
        <UserButton afterSignOutUrl="/" />
      </div>

      {/* Dashboard Section */}
      <div className="mb-8">
        <Link href="/dashboard">
        <h2 className="mb-2 text-xl font-semibold text-white">Dashboard</h2>
        </Link>
        <ul className="flex flex-col mb-4">
          {/* Use <Link> without <a> for Next.js 13 */}
          <li>
            <Link href="/meetingroom" className={`block p-3 rounded-lg ${pathname === '/dashboard/page1' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-blue-600 hover:text-white'}`}>
              Meeting Room
            </Link>
          </li>
          <li>
            <Link href="/pdfchat" className={`block p-3 rounded-lg ${pathname === '/dashboard/chat' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-blue-600 hover:text-white'}`}>
              PDF Chat
            </Link>
          </li>
          {/* ... more links */}
        </ul>
      </div>
      <hr className="border-t border-white mb-8" />

      {/* Settings Section */}
      <div className="mb-8">
        <h2 className="mb-2 text-xl font-semibold text-white">Settings</h2>
        <ul className="flex flex-col mb-4">
          <li>
            <Link href="/settings/page1" className={`block p-3 rounded-lg ${pathname === '/settings/page1' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-blue-600 hover:text-white'}`}>
              Settings Page 1
            </Link>
          </li>
          {/* ... more links */}
        </ul>
      </div>
      <hr className="border-t border-white mb-8" />

      {/* Footer Links and Stripe Button */}
      <div className="mt-auto">
        <div className="flex items-center gap-2 text-sm text-slate-500 flex-wrap mb-2">
          <Link href="/">
            Home
          </Link>
          <Link href="/source">
            Source
          </Link>
        </div>
        <Button className="w-full text-white bg-slate-700">
          Upgrade to Pro!
        </Button>
      </div>
    </nav>
  );
}

export default VerticalNavBar;
