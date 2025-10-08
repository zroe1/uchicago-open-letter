import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Other open letters and resources | Save UChicago",
  description: "Links to related open letters and resources with sign buttons.",
};

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Top banner */}
      <header className="w-full border-b border-black/10">
        <div className="mx-auto max-w-3xl px-5 py-10 md:px-8 md:py-12">
          <h1 className="text-3xl md:text-4xl font-semibold">Other open letters and resources</h1>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 md:px-8 py-10 md:py-12">
        <div className="space-y-8">
          {/* AAUP letter */}
          <div>
            <h2 className="text-xl font-semibold mb-2">UChicago AAUP open letter</h2>
            <p className="text-black/70 mb-4">This is a letter sponsored by UChicago AAUP.</p>
            <a
              href="https://docs.google.com/document/d/1E0iaPTAicdA-tKr8f552MTapfJzUYjRjItWXsjh00mI/edit?tab=t.0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded bg-[var(--maroon)] px-5 py-2.5 font-medium hover:bg-[var(--maroon)]/90 transition-colors"
              style={{ color: "#fff" }}>
              Sign letter
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>

          {/* GSU open letter */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Graduate Student Union (GSU) open letter</h2>
            <p className="text-black/70 mb-4">
              This is an open letter from the Graduate Student Union (GSU).
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfdJfGG3kz8CPBKcqYkQwJJgES1dcSCOEIPFxlAnoz9q2QUCA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded bg-[var(--maroon)] px-5 py-2.5 font-medium hover:bg-[var(--maroon)]/90 transition-colors"
              style={{ color: "#fff" }}>
              Sign letter
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </main>

      <footer className="border-t border-black/10">
        <div className="mx-auto max-w-3xl px-5 md:px-8 py-8">
          <div className="mb-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[var(--maroon)] hover:underline underline-offset-4">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to homepage
            </Link>
          </div>
          <div className="text-sm text-black/60">
            © {new Date().getFullYear()} UChicago Open Letter
          </div>
        </div>
      </footer>
    </div>
  );
}
