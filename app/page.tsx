import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-start gap-12">
      <section className="space-y-6 max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          XUpload
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
          Turn clips into vertical, generate captions, and publish to TikTok — with your permission.
        </p>
        
        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href="mailto:contact@example.com"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-black dark:bg-white text-white dark:text-black font-semibold hover:opacity-90 transition-opacity"
          >
            Contact
          </a>
          <Link
            href="/privacy"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </section>

      <div className="grid md:grid-cols-2 gap-12 w-full border-t border-gray-100 dark:border-gray-800 pt-12">
        <section className="space-y-4">
          <h2 className="text-xl font-bold">What it does</h2>
          <ul className="space-y-3 text-gray-600 dark:text-gray-400">
            <li className="flex items-start gap-3">
              <span className="mt-1 block w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
              <span>Download and process user-provided videos</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 block w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
              <span>Convert to 9:16 vertical format with black background</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 block w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
              <span>Generate optimized title + hashtags (optional)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 block w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
              <span>Publish to TikTok only after explicit user authorization</span>
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold">How it works</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center font-bold text-sm">1</div>
              <div>
                <h3 className="font-semibold">Connect TikTok</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Securely log in with your TikTok account to grant permission.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center font-bold text-sm">2</div>
              <div>
                <h3 className="font-semibold">Prepare Video</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Our system formats your video and generates captions automatically.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center font-bold text-sm">3</div>
              <div>
                <h3 className="font-semibold">Review & Publish</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Confirm the details and we publish it directly to your feed.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}