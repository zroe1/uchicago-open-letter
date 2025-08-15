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
            A statement from the academic and scholarly community.
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
              &ldquo;A university is a community of scholars. It is not a kindergarten; it is not a
              club; it is not a reform school; it is not a political party; it is not an agency of
              propaganda. A university is a community of scholars.&rdquo;
            </p>
            <footer className="text-sm md:text-base text-black/70">
              <cite className="not-italic">
                — <strong>Robert Maynard Hutchins</strong>, President of the University of Chicago
                (1929–1945)
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
                open inquiry and rigorous debate compels us to speak plainly about the
                responsibilities the University has abandoned with its recent restructuring
                initiatives.
              </p>
              <p>
                This letter sets out our concerns and the steps we believe are necessary to realign
                the University&rsquo;s decisions with its fundamental principles. We invite
                engagement from across disciplines and roles. The full text is presented here for
                clarity and ease of citation.
              </p>
              <p>
                In recent months, the University has undertaken sweeping restructuring initiatives
                within the Social Sciences Division (SSD) and the Division of the Arts & Humanities
                (AHD) that would allow them to redirect funds previously allocated to those
                divisions. On June 14th, the Divisional Organization Committee—composed of AHD
                faculty—was directed to come up with proposals for consolidating fifteen humanities
                and arts departments into eight, eliminating any department with fewer than fifteen
                tenured or tenure-track professors. This criterion would all but dismantle the area
                studies departments. At the same time, the University has informed faculty of plans
                to cut language classes with enrollments under twelve students.
              </p>
              <p>
                The first concrete effects of these initiatives are already here: Ph.D. admissions
                across half of the humanities departments (including Classics, Comparative
                Literature, and Germanic Studies) have been frozen, with several social sciences
                departments (including the Committee on Social Thought) also instructed to do the
                same.
              </p>
              <p>
                The administration wants us to believe these changes stem from federal budget cuts—a
                convenient distraction from the debt generated by years of financial mismanagement.
                We urge readers to consult Clifford Ando&rsquo;s published analyses of the
                University&rsquo;s finances, which lay bare the true scope of the problem. The Board
                of Trustees using the Trump administration&rsquo;s budgetary moves as cover to
                unilaterally push through long-desired restructuring is not only dishonest—it is a
                betrayal of its commitments to the intellectual community that supports it.
              </p>
              <p>
                The timing of these decisions is no accident. They were made in the summer, when
                faculty and students are dispersed, ensuring that the community is less able to
                respond or organize. This is an intentional tactic to suppress opposition.
              </p>
              <p>
                The attack on area studies is, at its core, an attack on the study and support of
                minority groups. Instructing faculty to &ldquo;identify languages we no longer need
                to teach&rdquo; imposes a hierarchy of value, implying that some languages—and, by
                extension, the cultures they represent—are less worthy of preservation or study. The
                departments slated for merger or dissolution are precisely those dedicated to
                minority-focused scholarship. The departments whose Ph.D. admissions have been
                frozen are those where language study is essential, and cutting language classes
                with fewer than twelve students will disproportionately harm minority studies, which
                tend to have lower enrollments.
              </p>
              <p>
                These moves betray the University&rsquo;s stated commitment to global perspectives
                and diversity in scholarship. They also insult students and parents who pay
                private-school-level tuition expecting small, specialized classes—precisely the
                courses now targeted for elimination. The planned increase in undergraduate
                enrollment without a corresponding expansion of faculty will only accelerate the
                erosion of academic quality.
              </p>
              <p>
                If this restructuring proceeds, the University&rsquo;s top humanities and social
                sciences faculty will have every incentive to leave for institutions that value
                their work. The resulting loss of established and accomplished scholars will be
                irreversible.
              </p>
              <p>
                The Board of Trustees is demonstrating a profound misunderstanding of what the
                University of Chicago stands for and why it is valued. We will not accept a vision
                of the University that sacrifices intellectual breadth and rigor for financial
                expediency. Below are our demands to the University:
              </p>
              <div className="mt-8 space-y-4">
                <div className="border-l-4 border-[var(--maroon)] pl-4">
                  <h3 className="font-semibold mb-2">No department mergers or dissolutions.</h3>
                  <p>
                    The University must immediately halt any plans to consolidate or eliminate
                    departments, particularly those in the humanities, arts, and social sciences,
                    which are integral to our intellectual mission and diversity of scholarship.
                  </p>
                </div>
                <div className="border-l-4 border-[var(--maroon)] pl-4">
                  <h3 className="font-semibold mb-2">No pauses in doctoral admissions.</h3>
                  <p>
                    Ph.D. admissions must remain open across all departments. Freezing admissions
                    undermines the continuity of research, damages department reputations, and
                    drives prospective scholars to competing institutions.
                  </p>
                </div>
                <div className="border-l-4 border-[var(--maroon)] pl-4">
                  <h3 className="font-semibold mb-2">Preservation of language studies.</h3>
                  <p>All language programs, regardless of enrollment size, must be protected.</p>
                </div>
                <div className="border-l-4 border-[var(--maroon)] pl-4">
                  <h3 className="font-semibold mb-2">
                    Transparency about the financial situation of the University.
                  </h3>
                  <p>
                    The administration must provide the University community with a full, publicly
                    accessible accounting of its finances, including debt levels, spending
                    priorities, and the decision-making process behind budgetary changes.
                  </p>
                </div>
                <div className="border-l-4 border-[var(--maroon)] pl-4">
                  <h3 className="font-semibold mb-2">
                    No administrative changes without committee review.
                  </h3>
                  <p>
                    Any restructuring proposals must be vetted and approved by elected faculty
                    committees.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Signatories */}
          <section id="signatories" className="max-w-4xl mt-16 md:mt-20">
            <div className="flex items-baseline justify-between">
              <h2 className="text-2xl md:text-3xl font-semibold">Signatories</h2>
            </div>
            <hr className="mt-5 md:mt-6 mb-6 md:mb-8 border-[var(--maroon)]/30" />

            <ul className="divide-y divide-black/10 rounded-md border border-black/10">
              {[
                {
                  name: "Isabelle Lee",
                  title: "BA/MA Candidate at the University of Chicago",
                },
                {
                  name: "Zephaniah Roe",
                  title: "Undergraduate Student at the University of Chicago",
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
            <div className="space-y-6">
              <p className="text-[17px] md:text-[19px] leading-7 md:leading-8 text-black/80">
                Add your name to affirm the University of Chicago&rsquo;s commitment to intellectual
                breadth and transparent governance.
              </p>
              <div className="bg-[var(--maroon)]/4 rounded-lg p-6 border-l-4 border-[var(--maroon)]">
                <h3 className="text-lg font-semibold mb-3 text-[var(--maroon)]">
                  Sign the Open Letter
                </h3>
                <p className="text-black/80 mb-4">
                  Sign using the secure University of Chicago form.
                </p>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSff70ymDPLK6n2UhN5INTzqc9jBudXdDXpz6FUbOhCX-0-4gg/viewform?usp=dialog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded bg-[var(--maroon)] px-6 py-3 font-medium hover:bg-[var(--maroon)]/90 transition-colors"
                  style={{ color: "#fff" }}>
                  Sign the Letter
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
          </section>

          {/* Appendix */}
          <section id="appendix" className="max-w-3xl mt-16 md:mt-20">
            <h2 className="text-2xl md:text-3xl font-semibold">Appendix</h2>
            <hr className="mt-5 md:mt-6 mb-6 md:mb-8 border-[var(--maroon)]/30" />
            <p className="text-[17px] md:text-[19px] leading-7 md:leading-8 text-black/80">
              We will update this section with additional information as it becomes available.{" "}
              <b>
                Because it may be updated after one signs, the content in the appendix is not
                necessarily endorsed by all signatories.
              </b>
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
