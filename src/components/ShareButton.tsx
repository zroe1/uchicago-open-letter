"use client";

import { useState, useEffect } from "react";

export default function ShareButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [showCopied, setShowCopied] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Detect if user is on mobile
    const checkMobile = () => {
      const userAgent = navigator.userAgent;
      const mobile = /iPhone|iPad|iPod|Android/i.test(userAgent);
      const ios = /iPhone|iPad|iPod/i.test(userAgent);
      setIsMobile(mobile);
      setIsIOS(ios);
    };
    checkMobile();
  }, []);

  const shareUrl = "https://saveuchicago.com";
  const shareText = "Sign the open letter to save UChicago's humanities programs.";
  const storyImageUrl = `${
    typeof window !== "undefined" ? window.location.origin : ""
  }/story-share.png`;

  const handleWebShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Save UChicago",
          text: shareText,
          url: shareUrl,
        });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      // Fallback: copy to clipboard
      await copyToClipboard();
    }
  };

  const copyToClipboard = async () => {
    const textToCopy = `${shareUrl}`;
    try {
      await navigator.clipboard.writeText(textToCopy);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    } catch (err) {
      console.log("Failed to copy:", err);
    }
  };

  // Unified story share (Instagram/Snapchat)
  const handleStoryShare = () => {
    if (isIOS) {
      // iOS: Open image in new tab so user can long-press and "Add to Photos"
      window.open(storyImageUrl, "_blank");
      setTimeout(() => {
        alert(
          "Save to Photos:\n\n" +
            "1. Long-press the image\n" +
            "2. Tap 'Add to Photos' or 'Save Image'\n" +
            "3. Open Instagram or Snapchat\n" +
            "4. Create a Story and select the saved image\n" +
            "5. Post to your story!"
        );
      }, 600);
    } else if (isMobile) {
      // Android and other mobile: download to gallery/downloads
      const link = document.createElement("a");
      link.href = storyImageUrl;
      link.download = "uchicago-letter-story.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => {
        alert(
          "Template downloaded!\n\n" +
            "Open Instagram or Snapchat, create a Story, select the downloaded image, and post."
        );
      }, 500);
    } else {
      // Desktop: download and instruct to transfer
      const link = document.createElement("a");
      link.href = storyImageUrl;
      link.download = "uchicago-letter-story.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => {
        alert(
          "Template downloaded!\n\nTransfer it to your phone, then open Instagram or Snapchat to post as a Story."
        );
      }, 300);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 rounded bg-[var(--maroon)] px-6 py-3 font-medium hover:bg-[var(--maroon)]/90 transition-colors"
        style={{ color: "#fff" }}
        aria-label="Share this open letter">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
          />
        </svg>
        Share
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} aria-hidden="true" />

          {/* Dropdown Menu */}
          <div className="absolute left-0 mt-2 w-80 rounded-lg bg-white shadow-xl border border-black/10 z-50 overflow-hidden">
            <div className="p-4 border-b border-black/10">
              <h3 className="font-semibold text-lg">Share Open Letter</h3>
              <p className="text-sm text-black/70 mt-1">
                Help spread the word about this important cause
              </p>
            </div>

            <div className="p-2 space-y-1">
              {/* Instagram/Snapchat Story */}
              <button
                onClick={handleStoryShare}
                className="w-full flex items-center gap-3 p-3 rounded-md hover:bg-black/5 transition-colors text-left">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium">Instagram/Snapchat Story</div>
                  <div className="text-sm text-black/70">
                    {isIOS
                      ? "Open template, Save to Photos"
                      : isMobile
                      ? "Download template"
                      : "Download template"}
                  </div>
                </div>
              </button>

              {/* Messages / General Share */}
              <button
                onClick={handleWebShare}
                className="w-full flex items-center gap-3 p-3 rounded-md hover:bg-black/5 transition-colors text-left">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium">Send via Message</div>
                  <div className="text-sm text-black/70">Share via text, email, or other apps</div>
                </div>
              </button>

              {/* Copy Link */}
              <button
                onClick={copyToClipboard}
                className={`w-full flex items-center gap-3 p-3 rounded-md transition-colors text-left ${
                  showCopied ? "bg-green-50" : "hover:bg-black/5"
                }`}
                aria-live="polite"
                aria-atomic="true">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                    showCopied ? "bg-green-600" : "bg-gray-500"
                  }`}>
                  {showCopied ? (
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className={`font-medium ${showCopied ? "text-green-800" : ""}`}>
                    {showCopied ? "Copied!" : "Copy Link"}
                  </div>
                  <div className={`text-sm ${showCopied ? "text-green-700" : "text-black/70"}`}>
                    {showCopied ? "Link copied to clipboard" : "Copy link to clipboard"}
                  </div>
                </div>
              </button>
            </div>

            {/* Instructions */}
            {/* Removed bottom note per request */}
          </div>
        </>
      )}
    </div>
  );
}
