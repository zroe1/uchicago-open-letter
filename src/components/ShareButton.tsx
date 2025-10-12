"use client";

import { useState } from "react";

export default function ShareButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [showCopied, setShowCopied] = useState(false);

  const shareUrl = "https://saveuchicago.com";
  const shareText = "Sign the open letter to save UChicago's humanities and social sciences programs. Stand against the dismantling of essential academic departments.";
  const storyImageUrl = `${typeof window !== 'undefined' ? window.location.origin : ''}/story-share.png`;

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
    const textToCopy = `${shareText}\n\n${shareUrl}`;
    try {
      await navigator.clipboard.writeText(textToCopy);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    } catch (err) {
      console.log("Failed to copy:", err);
    }
  };

  const handleInstagramShare = () => {
    // Instagram doesn't have a direct web API for stories
    // We'll provide instructions and a download button
    const link = document.createElement("a");
    link.href = storyImageUrl;
    link.download = "uchicago-letter-story.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSnapchatShare = () => {
    // Snapchat also doesn't have a direct web API
    // We'll provide instructions and a download button
    const link = document.createElement("a");
    link.href = storyImageUrl;
    link.download = "uchicago-letter-story.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Dropdown Menu */}
          <div className="absolute left-0 mt-2 w-80 rounded-lg bg-white shadow-xl border border-black/10 z-50 overflow-hidden">
            <div className="p-4 border-b border-black/10">
              <h3 className="font-semibold text-lg">Share Open Letter</h3>
              <p className="text-sm text-black/70 mt-1">
                Help spread the word about this important cause
              </p>
            </div>

            <div className="p-2 space-y-1">
              {/* Instagram Stories */}
              <button
                onClick={handleInstagramShare}
                className="w-full flex items-center gap-3 p-3 rounded-md hover:bg-black/5 transition-colors text-left">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium">Instagram Stories</div>
                  <div className="text-sm text-black/70">Download & share to your story</div>
                </div>
              </button>

              {/* Snapchat */}
              <button
                onClick={handleSnapchatShare}
                className="w-full flex items-center gap-3 p-3 rounded-md hover:bg-black/5 transition-colors text-left">
                <div className="w-10 h-10 rounded-full bg-[#FFFC00] flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-7 h-7"
                    fill="black"
                    viewBox="0 0 24 24">
                    <path d="M12.166 3c.796 0 3.495.223 4.769 3.073.426.959.324 2.589.24 3.898l-.002.047c-.011.146-.018.278-.024.41a.62.62 0 00.322.072c.241 0 .533-.143.886-.33.366-.195.775-.413 1.207-.413.473 0 .782.257.916.535.153.316.096.714-.159 1.118-.089.14-.193.265-.3.392l-.04.048c-.24.285-.524.623-.556 1.022-.069.865 1.042 1.354 2.203 1.87.266.119.541.24.808.374.648.325.91.768.784 1.315-.115.503-.612.851-1.294.907-.066.01-.136.014-.21.014-.41 0-1.017-.277-2.226-.84l-.04-.02c-.31-.143-.658-.306-.992-.462-.65-.303-1.162-.543-1.755-.543-.33 0-.635.091-.961.465-.524.601-1.01.847-1.67.847-.128 0-.267-.014-.419-.043l-.167-.031-.179-.032c-.441-.08-.932-.17-1.343-.17-.408 0-.9.09-1.342.17l-.179.032-.167.031c-.153.029-.291.043-.42.043-.658 0-1.144-.246-1.668-.847-.326-.374-.632-.465-.962-.465-.594 0-1.104.24-1.755.543-.334.156-.683.32-.992.463l-.04.019c-1.207.562-1.814.839-2.225.839-.074 0-.144-.005-.21-.014-.682-.056-1.178-.404-1.294-.907-.126-.547.136-.99.784-1.315.267-.134.542-.255.808-.374 1.16-.516 2.272-1.005 2.203-1.87-.032-.399-.316-.737-.556-1.022l-.04-.048c-.107-.127-.211-.252-.3-.392-.255-.404-.312-.802-.159-1.118.134-.278.443-.535.916-.535.432 0 .841.218 1.207.413.353.187.645.33.886.33a.62.62 0 00.322-.072c-.006-.132-.013-.264-.024-.41l-.002-.047c-.084-1.309-.186-2.939.24-3.898 1.274-2.85 3.973-3.073 4.769-3.073m0-1c-4.786 0-6.166 2.787-6.166 6.999 0 .553.046 1.189.095 1.86-.222.052-.44.078-.655.078-.468 0-.94-.171-1.303-.363-.345-.183-.66-.349-.909-.349-.684 0-1.246.397-1.51.997-.297.677-.17 1.449.378 2.292.088.136.19.261.293.386l.04.048c.213.252.435.513.45.731.038.557-.576.944-1.654 1.42-1.181.522-2.654 1.175-2.654 2.587 0 1.237 1.073 1.859 2.147 1.954.175.015.353.023.529.023 1.136 0 2.057-.553 2.967-.975l.04-.019c.3-.14.635-.295.954-.445.542-.256.899-.424 1.195-.424.062 0 .118.009.174.038.385.441.767.613 1.326.613.141 0 .297-.016.467-.048l.168-.031.178-.032c.405-.074.86-.158 1.208-.158.351 0 .806.084 1.209.158l.179.032.167.031c.17.032.326.048.467.048.559 0 .941-.172 1.326-.613.056-.029.112-.038.174-.038.296 0 .653.168 1.195.424.319.15.654.305.954.445l.04.019c.91.422 1.831.975 2.967.975.176 0 .354-.008.529-.023 1.074-.095 2.147-.717 2.147-1.954 0-1.412-1.473-2.065-2.654-2.587-1.078-.476-1.692-.863-1.654-1.42.015-.218.237-.479.45-.731l.04-.048c.103-.125.205-.25.293-.386.548-.843.675-1.615.378-2.292-.264-.6-.826-.997-1.51-.997-.249 0-.564.166-.909.349-.363.192-.835.363-1.303.363-.215 0-.433-.026-.655-.078.049-.671.095-1.307.095-1.86 0-4.212-1.38-6.999-6.166-6.999z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium">Snapchat</div>
                  <div className="text-sm text-black/70">Download & add to your story</div>
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
                className="w-full flex items-center gap-3 p-3 rounded-md hover:bg-black/5 transition-colors text-left">
                <div className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center flex-shrink-0">
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
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium">Copy Link</div>
                  <div className="text-sm text-black/70">
                    {showCopied ? "Copied!" : "Copy link to clipboard"}
                  </div>
                </div>
              </button>
            </div>

            {/* Instructions */}
            <div className="p-4 bg-black/5 border-t border-black/10">
              <p className="text-xs text-black/70">
                <strong>For Instagram/Snapchat:</strong> After downloading, open the app and add the
                image to your story. You can add text, stickers, or your own message!
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

