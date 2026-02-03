import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | XUpload",
  description: "Terms of Service for XUpload application.",
};

export default function TermsPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Terms of Service</h1>
        <p className="text-gray-500 dark:text-gray-400">Last updated: February 2, 2026</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. Service Description</h2>
        <p className="leading-relaxed text-gray-600 dark:text-gray-300">
          XUpload is a tool designed to assist users in formatting and publishing videos to TikTok. The service includes video processing, caption generation, and uploading content to the user's connected TikTok account.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. User Responsibilities</h2>
        <p className="leading-relaxed text-gray-600 dark:text-gray-300">
          By using our service, you agree to the following:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
          <li>You represent and warrant that you own or have the necessary rights and permissions to use and publish the content you upload via XUpload.</li>
          <li>You agree to comply with TikTok's Terms of Service, Community Guidelines, and all applicable laws and regulations.</li>
          <li>You will not use XUpload to publish content that is illegal, harmful, threatening, abusive, harassment, defamatory, vulgar, obscene, or invasive of another's privacy.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Disclaimer</h2>
        <p className="leading-relaxed text-gray-600 dark:text-gray-300">
          <strong>No Affiliation:</strong> XUpload is an independent third-party application and is not affiliated with, endorsed by, or sponsored by TikTok or ByteDance.
          <br /><br />
          <strong>"As Is" Basis:</strong> The service is provided on an "as is" and "as available" basis. We make no warranties, expressed or implied, regarding the reliability, accuracy, or availability of the service.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Termination</h2>
        <p className="leading-relaxed text-gray-600 dark:text-gray-300">
          You may stop using our service at any time. You can revoke XUpload's access to your TikTok account via your TikTok app settings. We reserve the right to suspend or terminate access to our service at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties, or for any other reason.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Contact Us</h2>
        <p className="leading-relaxed text-gray-600 dark:text-gray-300">
          If you have any questions regarding these Terms of Service, please contact us at:
          <br />
          <a href="mailto:contact@example.com" className="text-blue-600 dark:text-blue-400 hover:underline">contact@example.com</a>
        </p>
      </section>
    </div>
  );
}
