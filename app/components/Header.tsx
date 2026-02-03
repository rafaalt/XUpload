import Link from 'next/link';
import Logo from './Logo';

export default function Header() {
  return (
    <header className="w-full border-b border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-black/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Logo className="w-8 h-8 text-black dark:text-white" />
          <span className="font-bold text-lg tracking-tight">XUpload</span>
        </Link>
        <nav className="flex gap-4 text-sm font-medium text-gray-600 dark:text-gray-400">
          <Link href="/privacy" className="hover:text-black dark:hover:text-white transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-black dark:hover:text-white transition-colors">
            Terms
          </Link>
        </nav>
      </div>
    </header>
  );
}
