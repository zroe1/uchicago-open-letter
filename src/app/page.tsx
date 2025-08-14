export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Top banner */}
      <header className="w-full border-b border-black/10">
        <div className="mx-auto max-w-screen-2xl px-5 py-10 md:px-8 md:py-12 lg:px-10 lg:py-14">
          <h1 className="text-4xl md:text-5xl/[1.1] font-semibold tracking-tight">
            An Open Letter to the University of Chicago
          </h1>
          <p className="mt-3 md:mt-4 max-w-3xl text-lg md:text-xl text-black/70">
            A statement from members of the University of Chicago community.
          </p>
        </div>
      </header>

      {/* Mobile quick nav */}
      <nav className="lg:hidden border-b border-black/10">
        <div className="mx-auto max-w-screen-2xl px-5 py-3 overflow-x-auto">
          <ul className="flex gap-3">
            <li>
              <a
                className="whitespace-nowrap rounded-full border border-[var(--maroon)]/50 px-3 py-1.5 text-[15px] text-[var(--maroon)]"
                href="#letter">
                Open Letter
              </a>
            </li>
            <li>
              <a
                className="whitespace-nowrap rounded-full border border-[var(--maroon)]/50 px-3 py-1.5 text-[15px] text-[var(--maroon)]"
                href="#signatories">
                Signatories
              </a>
            </li>
            <li>
              <a
                className="whitespace-nowrap rounded-full border border-[var(--maroon)]/50 px-3 py-1.5 text-[15px] text-[var(--maroon)]"
                href="#add-signature">
                Add signature
              </a>
            </li>
            <li>
              <a
                className="whitespace-nowrap rounded-full border border-[var(--maroon)]/50 px-3 py-1.5 text-[15px] text-[var(--maroon)]"
                href="#appendix">
                Appendix
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main content grid: sidebar + content */}
      <div className="mx-auto max-w-screen-2xl px-5 md:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10 lg:gap-12 py-10 lg:py-12">
        {/* Sidebar navigation */}
        <aside className="hidden lg:block">
          <nav className="sticky top-10">
            <ul className="space-y-5 text-[18px]">
              <li>
                <a
                  className="hover:underline decoration-[var(--maroon)] underline-offset-4"
                  href="#letter">
                  Open Letter
                </a>
              </li>
              <li>
                <a
                  className="hover:underline decoration-[var(--maroon)] underline-offset-4"
                  href="#signatories">
                  Signatories
                </a>
              </li>
              <li>
                <a
                  className="hover:underline decoration-[var(--maroon)] underline-offset-4"
                  href="#add-signature">
                  Add your signature
                </a>
              </li>
              <li>
                <a
                  className="hover:underline decoration-[var(--maroon)] underline-offset-4"
                  href="#appendix">
                  Appendix
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main sections */}
        <main className="pb-20 lg:pb-24">
          {/* Hutchins Quote */}
          <blockquote className="mb-10 md:mb-12 px-6 md:px-8 py-8 md:py-10 bg-[var(--maroon)]/4 rounded-lg border-l-4 border-[var(--maroon)] max-w-4xl">
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed md:leading-relaxed lg:leading-relaxed font-medium text-black/90 mb-4">
              "A university is a community of scholars. It is not a kindergarten; it is not a club;
              it is not a reform school; it is not a political party; it is not an agency of
              propaganda. A university is a community of scholars."
            </p>
            <footer className="text-sm md:text-base text-black/70">
              <cite className="not-italic">
                — University of Chicago President <strong>Robert Maynard Hutchins</strong>
              </cite>
            </footer>
          </blockquote>

          {/* Letter */}
          <section id="letter" className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold">Dear Reader,</h2>
            <hr className="mt-5 md:mt-6 mb-8 md:mb-10 border-[var(--maroon)]/30" />
            <div className="max-w-none text-[17px] md:text-[19px] leading-7 md:leading-8 space-y-5">
              <p>
                We write to you as members of the University of Chicago community. Our commitment to
                open inquiry and rigorous debate compels us to speak plainly and constructively
                about the responsibilities we share.
              </p>
              <p>
                This letter outlines our concerns, our principles, and specific steps we believe
                will better align decisions with the public good. We invite thoughtful engagement
                and welcome signatories from across disciplines and roles.
              </p>
              <p>
                The full text is presented here for clarity and ease of citation. This is a living
                statement and may be updated to reflect new information and community feedback.
              </p>
            </div>
          </section>

          {/* Signatories */}
          <section id="signatories" className="max-w-4xl mt-16 md:mt-20">
            <div className="flex items-baseline justify-between">
              <h2 className="text-2xl md:text-3xl font-semibold">Signatories</h2>
              <span className="text-sm text-black/60">Sample list</span>
            </div>
            <hr className="mt-5 md:mt-6 mb-6 md:mb-8 border-[var(--maroon)]/30" />

            <ul className="divide-y divide-black/10 rounded-md border border-black/10">
              {[
                {
                  name: "First Last",
                  title: "Professor, Department",
                },
                {
                  name: "First Last",
                  title: "Graduate Student, Division",
                },
                {
                  name: "First Last",
                  title: "Researcher, Institute",
                },
              ].map((p, idx) => (
                <li key={idx} className="flex items-center justify-between p-4 md:p-5">
                  <div>
                    <div className="text-base md:text-lg">{p.name}</div>
                    <div className="text-sm md:text-base text-black/70">{p.title}</div>
                  </div>
                  <span className="inline-flex items-center rounded-full border border-[var(--maroon)]/50 px-2.5 py-1 text-xs md:text-sm text-[var(--maroon)]">
                    Supporter
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Add signature */}
          <section id="add-signature" className="max-w-3xl mt-16 md:mt-20">
            <h2 className="text-2xl md:text-3xl font-semibold">Add your signature</h2>
            <hr className="mt-5 md:mt-6 mb-8 md:mb-10 border-[var(--maroon)]/30" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <input className="rounded border border-black/20 px-4 py-3" placeholder="Full name" />
              <input
                className="rounded border border-black/20 px-4 py-3"
                placeholder="Affiliation"
              />
              <input
                className="sm:col-span-2 rounded border border-black/20 px-4 py-3"
                placeholder="Email (not displayed)"
              />
              <button className="sm:col-span-2 w-full sm:w-max rounded bg-[var(--maroon)] px-6 py-3 text-white">
                Submit signature
              </button>
            </div>
          </section>

          {/* Appendix */}
          <section id="appendix" className="max-w-3xl mt-16 md:mt-20">
            <h2 className="text-2xl md:text-3xl font-semibold">Appendix</h2>
            <hr className="mt-5 md:mt-6 mb-6 md:mb-8 border-[var(--maroon)]/30" />
            <p className="text-[17px] md:text-[19px] leading-7 md:leading-8 text-black/80">
              Supplemental materials, references, and footnotes can be listed here.
            </p>
          </section>
        </main>
      </div>

      <footer className="border-t border-black/10">
        <div className="mx-auto max-w-screen-2xl px-5 md:px-8 lg:px-10 py-8 text-sm text-black/60">
          © {new Date().getFullYear()} UChicago Open Letter
        </div>
      </footer>
    </div>
  );
}
