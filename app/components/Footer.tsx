import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full py-8 border-t border-gray-100 dark:border-gray-800 mt-auto">
      <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500 dark:text-gray-400">
        <div>
          &copy; {new Date().getFullYear()} XUpload. All rights reserved.
        </div>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-black dark:hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-black dark:hover:text-white transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
