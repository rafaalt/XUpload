import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "XUpload - TikTok Video Publisher",
  description: "Turn clips into vertical, generate captions, and publish to TikTok — with your permission.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen antialiased bg-white dark:bg-black text-slate-900 dark:text-slate-100">
        <Header />
        <main className="flex-grow w-full max-w-4xl mx-auto px-4 py-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}