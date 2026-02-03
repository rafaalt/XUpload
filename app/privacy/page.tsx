import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | XUpload",
  description: "Privacy Policy for XUpload application.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
        <p className="text-gray-500 dark:text-gray-400">Last updated: February 2, 2026</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. Information We Collect</h2>
        <p className="leading-relaxed text-gray-600 dark:text-gray-300">
          When you use XUpload, we may collect the following information from your connected TikTok account:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
          <li><strong>Account Information:</strong> Your TikTok account identifier (user ID) provided via OAuth authentication.</li>
          <li><strong>Authentication Tokens:</strong> Access and refresh tokens needed to act on your behalf. These are stored securely.</li>
          <li><strong>Content:</strong> Video files that you upload or provide for processing. These are held temporarily.</li>
          <li><strong>Usage Data:</strong> Basic logs including error reports and timestamps to help us improve the service.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. How We Use Your Information</h2>
        <p className="leading-relaxed text-gray-600 dark:text-gray-300">
          We use the data we collect solely for the purpose of providing the XUpload service:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
          <li>To authenticate your identity with TikTok.</li>
          <li>To process, format, and upload videos to your TikTok account upon your request.</li>
          <li>To troubleshoot technical issues and maintain service stability.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Data Retention</h2>
        <p className="leading-relaxed text-gray-600 dark:text-gray-300">
          <strong>Tokens:</strong> We retain your authentication tokens until you revoke access or request account deletion.
          <br />
          <strong>Videos:</strong> Processed video files are stored temporarily for the duration of the upload process and are automatically deleted shortly thereafter (typically within 24 hours).
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Data Sharing</h2>
        <p className="leading-relaxed text-gray-600 dark:text-gray-300">
          We do not sell, trade, or rent your personal identification information to others. We only transfer data to TikTok's servers as required to publish your content via their official API.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Contact Us</h2>
        <p className="leading-relaxed text-gray-600 dark:text-gray-300">
          If you have any questions about this Privacy Policy, please contact us at:
          <br />
          <a href="mailto:contact@example.com" className="text-blue-600 dark:text-blue-400 hover:underline">contact@example.com</a>
        </p>
      </section>
    </div>
  );
}
