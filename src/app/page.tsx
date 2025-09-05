import { basename } from "path";

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
                href="#add-signature">
                Add signature
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
                  href="#add-signature">
                  Add your signature
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
                In recent months, the University has undertaken sweeping restructuring initiatives
                within the Social Sciences Division (SSD) and the Division of the Arts & Humanities
                (AHD) that would allow them to redirect funds previously allocated to those
                divisions.
                <sup className="footnote-ref">
                  <a
                    href="#footnote-1"
                    className="text-[var(--maroon)] hover:underline text-sm font-bold">
                    1
                  </a>
                </sup>{" "}
                On June 14th, the Divisional Organization Committee—composed of AHD faculty—was
                directed to come up with proposals for consolidating sixteen humanities and arts
                departments into eight, eliminating any department with fewer than fifteen tenured
                or tenure-track professors. This criterion would all but dismantle the area studies
                departments. At the same time, the University directed the Languages Working Group,
                also consisting of instructors and faculty in AHD, to propose a minimum number of
                students required for any language class to run, and even the wholesale elimination
                of certain languages within the division.
              </p>
              <p>
                The first concrete effects of these initiatives are already here: Ph.D. admissions
                across all the humanities departments except Music Composition and Philosophy have
                been frozen for the upcoming application cycle, with several social sciences
                departments (including the Committee on Social Thought and Anthropology), also
                instructed to do the same.
              </p>
              <p>
                The administration wants us to believe these changes stem from federal budget cuts—a
                convenient distraction from the debt generated by years of financial mismanagement.
                <sup className="footnote-ref">
                  <a
                    href="#footnote-2"
                    className="text-[var(--maroon)] hover:underline text-sm font-bold">
                    2
                  </a>
                </sup>
                <sup className="footnote-ref">
                  <a
                    href="#footnote-3"
                    className="text-[var(--maroon)] hover:underline text-sm font-bold">
                    3
                  </a>
                </sup>{" "}
                We urge readers to consult Clifford Ando&rsquo;s published analyses of the
                University&rsquo;s finances, which lay bare the true scope of the problem.
                <sup className="footnote-ref">
                  <a
                    href="#footnote-4"
                    className="text-[var(--maroon)] hover:underline text-sm font-bold">
                    4
                  </a>
                </sup>
                <sup className="footnote-ref">
                  <a
                    href="#footnote-5"
                    className="text-[var(--maroon)] hover:underline text-sm font-bold">
                    5
                  </a>
                </sup>{" "}
                The Board of Trustees using the Trump administration’s budgetary moves as cover to
                unilaterally push through long-desired restructuring is not only dishonest—it is a
                betrayal of its commitments to the intellectual community that supports it.
                <sup className="footnote-ref">
                  <a
                    href="#footnote-6"
                    className="text-[var(--maroon)] hover:underline text-sm font-bold">
                    6
                  </a>
                </sup>
              </p>
              <p>
                The timing of these decisions is no accident. They were made in the summer, when
                faculty and students are dispersed, ensuring that the community is less able to
                respond or organize. This is an intentional tactic to suppress opposition.
              </p>
              <p>
                The attack on area studies is, at its core, an attack on the study and support of
                minority groups. Instructing faculty to “identify languages we no longer need to
                teach” imposes a hierarchy of value, implying that some languages—and, by extension,
                the cultures they represent—are less worthy of preservation or study. Many of the
                departments slated for merger or dissolution are precisely those dedicated to
                minority-focused scholarship. The departments whose Ph.D. admissions have been
                frozen are those where language study is essential, and cutting language classes
                that don’t meet a certain threshold of students will disproportionately harm
                minority studies, which tend to have lower enrollments.
              </p>
              <p>
                These moves betray the University’s stated commitment to global perspectives and
                diversity in scholarship. They are an affront to students and parents who pay
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

              {/* Footnotes */}
              <div className="mt-12 pt-8 border-t border-black/20">
                <h3 className="text-lg font-semibold mb-4 text-black/80">References</h3>
                <div className="space-y-3 text-sm md:text-base leading-6">
                  <div id="footnote-1" className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[var(--maroon)]/10 text-[var(--maroon)] text-xs font-medium mt-0.5 flex-shrink-0">
                      1
                    </span>
                    <div className="text-black/70">
                      <a
                        href="https://www.compactmag.com/article/the-crisis-of-the-university-started-long-before-trump/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--maroon)] hover:underline underline-offset-2 break-words">
                        https://www.compactmag.com/article/the-crisis-of-the-university-started-long-before-trump/
                      </a>
                    </div>
                  </div>
                  <div id="footnote-2" className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[var(--maroon)]/10 text-[var(--maroon)] text-xs font-medium mt-0.5 flex-shrink-0">
                      2
                    </span>
                    <div className="text-black/70">
                      <a
                        href="https://chicagomaroon.com/40486/news/uchicago-professor-sounds-alarm-over-troubling-university-finances/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--maroon)] hover:underline underline-offset-2 break-words">
                        https://chicagomaroon.com/40486/news/uchicago-professor-sounds-alarm-over-troubling-university-finances/
                      </a>
                    </div>
                  </div>
                  <div id="footnote-3" className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[var(--maroon)]/10 text-[var(--maroon)] text-xs font-medium mt-0.5 flex-shrink-0">
                      3
                    </span>
                    <div className="text-black/70">
                      <a
                        href="https://chicagomaroon.com/43960/news/get-up-to-date-on-the-universitys-financial-issues/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--maroon)] hover:underline underline-offset-2 break-words">
                        https://chicagomaroon.com/43960/news/get-up-to-date-on-the-universitys-financial-issues/
                      </a>
                    </div>
                  </div>
                  <div id="footnote-4" className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[var(--maroon)]/10 text-[var(--maroon)] text-xs font-medium mt-0.5 flex-shrink-0">
                      4
                    </span>
                    <div className="text-black/70">
                      <a
                        href="https://www.chicagotribune.com/2025/07/14/opinion-university-of-chicago-donald-trump-research-funding/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--maroon)] hover:underline underline-offset-2 break-words">
                        https://www.chicagotribune.com/2025/07/14/opinion-university-of-chicago-donald-trump-research-funding/
                      </a>
                    </div>
                  </div>
                  <div id="footnote-5" className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[var(--maroon)]/10 text-[var(--maroon)] text-xs font-medium mt-0.5 flex-shrink-0">
                      5
                    </span>
                    <div className="text-black/70">
                      <a
                        href="https://chicagomaroon.com/48231/viewpoints/op-ed/reorg-101-the-past-and-future-of-the-race-to-the-bottom/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--maroon)] hover:underline underline-offset-2 break-words">
                        https://chicagomaroon.com/48231/viewpoints/op-ed/reorg-101-the-past-and-future-of-the-race-to-the-bottom/
                      </a>
                    </div>
                  </div>
                  <div id="footnote-6" className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[var(--maroon)]/10 text-[var(--maroon)] text-xs font-medium mt-0.5 flex-shrink-0">
                      6
                    </span>
                    <div className="text-black/70">
                      <a
                        href="https://www.chicagotribune.com/2025/07/23/university-of-chicago-weighs-restructuring/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--maroon)] hover:underline underline-offset-2 break-words">
                        https://www.chicagotribune.com/2025/07/23/university-of-chicago-weighs-restructuring/
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                  Sign using the following external form. Emails entered will not be displayed.
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

          {/* Signatories */}
          <section id="signatories" className="max-w-4xl mt-16 md:mt-20">
            <div className="flex items-baseline justify-between">
              <h2 className="text-2xl md:text-3xl font-semibold">Signatories</h2>
            </div>
            <hr className="mt-5 md:mt-6 mb-6 md:mb-8 border-[var(--maroon)]/30" />

            <ul className="divide-y divide-black/10 rounded-md border border-black/10">
              {[
                {
                  name: "John E. Woods",
                  title: "UChicago Emeritus Professor of History",
                  badge: "UChicago Emeritus Professor",
                  badgeType: "emphasized",
                },
                {
                  name: "David Martinez",
                  title: "UChicago Associate Professor",
                  badge: "UChicago Faculty",
                  badgeType: "emphasized",
                },
                {
                  name: "Jonathan Hall",
                  title: "Phyllis Fay Horton Distinguished Service Professor in the Humanities",
                  badge: "UChicago Faculty",
                  badgeType: "emphasized",
                },
                {
                  name: "Jonah Radding",
                  title: "UChicago Assistant Instructional Professor",
                  badge: "UChicago Faculty",
                  badgeType: "emphasized",
                },
                {
                  name: "Emily Austin",
                  title: "UChicago Associate Professor",
                  badge: "UChicago Faculty",
                  badgeType: "emphasized",
                },
                {
                  name: "Eduardo García-Molina",
                  title: "Assistant Professor of Classics, University of Illinois Urbana-Champaign",
                  badge: "UChicago Graduate",
                  badgeType: "normal",
                },
                {
                  name: "Isabelle Lee",
                  title: "BA/MA Candidate at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Zephaniah Roe",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Antônio Both Schenatto",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Caroline Kaminsky",
                  title: "Graduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Ziyu Feng",
                  title: "Graduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Theo Knights",
                  title: "Univeristy of Chicago, PhD Student, MES and History",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Andreas Petrou-Zeniou",
                  title: "PhD Student at MIT",
                  badge: "UChicago Graduate",
                  badgeType: "normal",
                },
                {
                  name: "Evan Yamaguchi",
                  title: "Graduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Alice Wang",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Frances Mangina",
                  title: "PhD Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Aydan Shahdadpuri",
                  title: "PhD Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Smyrna Osae",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Grace Donavan Lafuente",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Parker T. Robbins",
                  title: "PhD Student in Linguistics at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Madison Mathes",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Nathan Katkin",
                  title: "PhD Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Vanessa Vaz",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Ye Ram Kim",
                  title: "Graduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Surya Chinnappa",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Avery Winder",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Eliot Aguera y Arcas",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Elizabeth Harrison",
                  title:
                    "University of Chicago, English, Classics and Comparative Literature BA, 2025",
                  badge: "UChicago Graduate",
                  badgeType: "normal",
                },
                {
                  name: "Mariska Kassi",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Sarah Ware",
                  title: "Unversity of Chicago, Classical Studies and Medieval Studies AB, 2024",
                  badge: "UChicago Graduate",
                  badgeType: "normal",
                },
                {
                  name: "Ashley Kulp",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Elizabeth Johnson",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Alexa Shepherd",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Josephine Barboriak",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Arshy Azizi",
                  title: "University of Chicago, PhD Candidate, Classics",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Will Zimmermann",
                  title: "University of Chicago, BA in Linguistics, 2025",
                  badge: "UChicago Graduate",
                  badgeType: "normal",
                },
                {
                  name: "Ryan MacIsaac",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Christine Hignite",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Theo Johnson",
                  title: "University of Chicago, BA, 2025",
                  badge: "UChicago Graduate",
                  badgeType: "normal",
                },
                {
                  name: "Mickey Kelly",
                  title: "University of Chicago, BA Physics, 2024",
                  badge: "UChicago Graduate",
                  badgeType: "normal",
                },
                {
                  name: "Sasha Maskoff",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Barbara Marbell",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Will Epstein",
                  title: "University of Chicago, BS, 2025",
                  badge: "UChicago Graduate",
                  badgeType: "normal",
                },
                {
                  name: "Carolina Sardinas",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Hudson Ozaki Kottman",
                  title: "University of Chicago, Graduate",
                  badge: "UChicago Graduate",
                  badgeType: "normal",
                },
                {
                  name: "Chester Wooldridge",
                  title: "University of Chicago, Biology BA, 2025",
                  badge: "UChicago Graduate",
                  badgeType: "normal",
                },
                {
                  name: "Cole Washburn",
                  title: "Univeristy of Chicago, Bachelors of English, 2025",
                  badge: "UChicago Graduate",
                  badgeType: "normal",
                },
                {
                  name: "Yujini Son",
                  title: "University of Chicago, BA, 2025",
                  badge: "UChicago Graduate",
                  badgeType: "normal",
                },
                {
                  name: "Kayla Davis",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Selah Dungey",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Don Harmon",
                  title: "University of Chicago, BA Classics and Comparative Literature, 2022",
                  badge: "UChicago Graduate",
                  badgeType: "normal",
                },
                {
                  name: "J.C. Rodríguez Oceguera",
                  title: "University of Chicago, Race, Diaspora, and Indigeneity, 2025",
                  badge: "UChicago Graduate",
                  badgeType: "normal",
                },
                {
                  name: "Julia Marin",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Hayley Mirabile",
                  title: "University of Chicago, Public Policy Studies BA, 2023",
                  badge: "UChicago Graduate",
                  badgeType: "normal",
                },
                {
                  name: "Will Choi",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Asad Fayiz",
                  title: "BS/MS Candidate at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Elliot Lin",
                  title: "University of Chicago, 2024 and University of Chicago MAPSS-Econ, 2025",
                  badge: "UChicago Graduate",
                  badgeType: "normal",
                },
                {
                  name: "Mack Minter",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Kait Albarran",
                  title: "Unviersity of Chicago, Biological Chemistry BS, 2025",
                  badge: "UChicago Graduate",
                  badgeType: "normal",
                },
                {
                  name: "Violet Reed",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Brynna Gang",
                  title: "PhD Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Alejandro Sarria",
                  title: "PhD Student at Duke University",
                  badge: "UChicago Graduate",
                  badgeType: "normal",
                },
                {
                  name: "Oscar Dorr",
                  title: "University of Chicago, BA, 2024",
                  badge: "UChicago Graduate",
                  badgeType: "normal",
                },
                {
                  name: "Rebecca Shaw",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Feifan Li",
                  title: "PhD Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Alyssa Manthi",
                  title: "BA/MA Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Alan Cano",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "India Hill",
                  title: "University of Chicago, Critical Race & Ethnic Studies BA, 2024",
                  badge: "UChicago Graduate",
                  badgeType: "normal",
                },
                {
                  name: "Georgia Levine",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Kaleel Mayanja",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Agustin Esteva",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Lloali Gallegos",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Eve Glasergreen",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Violeta Lopez Molina",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Kali Konstantinakos",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Andrew Manuel Soto",
                  badge: "UChicago Graduate",
                  badgeType: "normal",
                },
                {
                  name: "Ovia Sundar",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Gianfranco Miranda Romero",
                  title: "University of Chicago, BA, 2025",
                  badge: "UChicago Graduate",
                  badgeType: "normal",
                },
                {
                  name: "Otto Reed",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Xiaoqi Zhou",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Annie Yang",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Shama Tirukkala",
                  title: "University of Chicago, BA, 2024",
                  badge: "UChicago Graduate",
                  badgeType: "normal",
                },
                {
                  name: "Maxime Zigrand",
                  title: "University of Chicago, MA Political Science, 2025",
                  badge: "UChicago Graduate",
                  badgeType: "normal",
                },
                {
                  name: "Mingxuan (Aldous) Li",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Ye Ram Kim",
                  title: "Graduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Mae Daughety",
                  title: "Undergraduate at Texas State University",
                  badge: null,
                },
                {
                  name: "Blaise Antin",
                  title: "UChicago Parent",
                  badge: "UChicago Parent",
                  badgeType: "normal",
                },
                {
                  name: "Sydney Cook",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Chloe Chiles Troutman",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Rohan Rao",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Soph Franklin",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Natalie Antin",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Henie Zhang",
                  title: "UChicago Master's Student",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Maximiliano Mendoza",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Hannah Thier",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Anjali Jain",
                  title: "Incoming Master of Arts Program in the Humanities",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Owen Sussman",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Yufei Chen",
                  title: "BA/MA Candidate at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Charles Robinson",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Francesco Rahe",
                  title: "BA in Fundamentals: Issues and Texts and Religious Studies, 2025",
                  badge: "UChicago Graduate",
                  badgeType: "normal",
                },
                {
                  name: "Viviana Hilario",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Abbey Figueroa",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Marcus Catanzaro",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Tuba Balta",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Leslie Xiao",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Natalia Serrano-Chavez",
                  title: "UChicago Comparative Human Development, 2025",
                  badge: "UChicago Graduate",
                  badgeType: "normal",
                },
                {
                  name: "Viviana Ornelas",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Emma Pavlicek",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Jacob Stump",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Harjas Sandhu",
                  title: "University of Chicago, BA in Physics, 2025",
                  badge: "UChicago Graduate",
                  badgeType: "normal",
                },
                {
                  name: "Monica Gould",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Jack Foley",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Clara Pressey",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Ximena Valverde",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Julia Fink",
                  title: "University of Chicago, Classical Studies, 2025",
                  badge: "UChicago Graduate",
                  badgeType: "normal",
                },
                {
                  name: "Livia Zhu",
                  title: "Masters Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Desmond Saunders",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Nic Restivo",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Madeleine Grosso",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Sallie Hinkle",
                  title: "University of Chicago, Global Studies BA, 2025",
                  badge: "UChicago Graduate",
                  badgeType: "normal",
                },
                {
                  name: "Jenna Moor",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Keyara Sims",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Zoe Fulton",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Mira Kaplan",
                  title: "University of Chicago, Philosophy BA, 2025",
                  badge: "UChicago Graduate",
                  badgeType: "normal",
                },
                {
                  name: "Nicole Reed",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Julian Huang",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Katherine O’Donnell",
                  title: "University of Chicago, BS, 2025",
                  badge: "UChicago Graduate",
                  badgeType: "normal",
                },
                {
                  name: "Eva Youel Page",
                  title: "University of Chicago, Comparative Human Development BA, 2025",
                  badge: "UChicago Graduate",
                  badgeType: "normal",
                },
                {
                  name: "Esslam Ashour",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Gabriela Hernandez",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Grayson Maki",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Soraya Wilson",
                  title: "University of Chicago, BA/MA Candidate",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Pavlik Braverman",
                  title: "Univeristy of Chicago Undergraduate / Harris School of Public Policy",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Jonathan Kim",
                  title: "University of Chicago J.D Candidate",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Sydney Sparr",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Walton Yan",
                  title:
                    "University of Chicago, Classics, German, Art History, and Religious Studies BA, 2025",
                  badge: "UChicago Graduate",
                  badgeType: "normal",
                },
                {
                  name: "Lillian Fu",
                  title: "UChicago Student",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Marina Mendoza",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Alexa Perez",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Ashlee Boodoo",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Declan Hilfers",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Katia Sergeeva",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Lucille Cygal",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Madeline Chaffer",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Manuel Maria Azpurua",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Audrey Shin",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Kaavya Agarwal",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Nicholas Cipi",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Adelle Almansi",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "David Jercha",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Linden Martin",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Alexis Elliott",
                  title: "University of Chicago, Computer Science BA, 2025",
                  badge: "UChicago Graduate",
                  badgeType: "normal",
                },
                {
                  name: "Cameron Clark",
                  title: "Univeristy of Chicago, Classical Studies BA, 2025",
                  badge: "UChicago Graduate",
                  badgeType: "normal",
                },
                {
                  name: "Angharad A. Whitfield",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Hanzhi Wang",
                  title: "University of Chicago Class of 2022",
                  badge: "UChicago Graduate",
                  badgeType: "normal",
                },
                {
                  name: "Aine Zhang",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Yanyu Hu",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Xiru Du",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Steven Wang",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Rosalyn Jia",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Olivia Moreno",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Brooklyn Zhao",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Aaron Huang",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Sasha Malysheva",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Ariana L",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Yushu Qiu",
                  title: "University of Chicago, Alum",
                  badge: "UChicago Graduate",
                  badgeType: "normal",
                },
                {
                  name: "Kalea Walthall",
                  badge: null,
                },
                {
                  name: "Breland Bach",
                  badge: null,
                },
                {
                  name: "Celeste Taylor",
                  badge: null,
                },
                {
                  name: "JJ Robeck",
                  badge: null,
                },
                {
                  name: "Weston Fox",
                  badge: null,
                },
                {
                  name: "Gwendolyn May Sheley",
                  badge: null,
                },
                {
                  name: "Celina Cortes",
                  badge: null,
                },
                {
                  name: "Legrand Davis",
                  badge: null,
                },
                {
                  name: "Marissa Todd",
                  badge: null,
                },
                {
                  name: "Leena",
                  badge: null,
                },
                {
                  name: "Alex Hasapis",
                  badge: null,
                },
                {
                  name: "Kailas Devulapally",
                  badge: null,
                },
                {
                  name: "Egheosase Odiase",
                  badge: null,
                },
                {
                  name: "Emily Siwing Xia",
                  badge: null,
                },
                {
                  name: "Rachel W",
                  title: "University of Chicago, BA, 2024",
                  badge: "UChicago Graduate",
                  badgeType: "normal",
                },
                {
                  name: "Kayla",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Mido Sang",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Cooper Komatsu",
                  title: "University of Chicago AB/AM 2024",
                  badge: "UChicago Graduate",
                  badgeType: "normal",
                },
                {
                  name: "Catherine Stuebbe",
                  badge: null,
                },
                {
                  name: "Abigail Poag",
                  title:
                    "University of Chicago, BA in Comparative Literature and Russian and East European Studies, 2025",
                  badge: "UChicago Graduate",
                  badgeType: "normal",
                },
                {
                  name: "Ethan Moore",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Leon Gold",
                  title: "University of Chicago, Physics and Geophysical Sciences, 2025",
                  badge: "UChicago Graduate",
                  badgeType: "normal",
                },
                {
                  name: "Felix Farb",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Ashley Campos",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Nicole Faigen",
                  badge: null,
                },
                {
                  name: "Amy D",
                  title: "Undergraduate Student",
                },
                {
                  name: "Jo",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Sophie",
                  title: "Kings College London Alumni",
                  badge: null,
                },
                {
                  name: "Mia",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
                {
                  name: "Anna",
                  title: "Undergraduate Student at the University of Chicago",
                  badge: "UChicago Student",
                  badgeType: "normal",
                },
              ].map((p, idx) => (
                <li
                  key={idx}
                  className="flex items-center justify-between p-4 md:p-5 gap-3 md:gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="text-base md:text-lg">{p.name}</div>
                    <div className="text-sm md:text-base text-black/70">{p.title}</div>
                  </div>
                  {p.badge && (
                    <span
                      className={`inline-flex items-center justify-center text-center rounded-full px-2.5 py-1 text-xs md:text-sm flex-shrink-0 ${
                        p.badgeType === "emphasized"
                          ? "bg-[var(--maroon)] text-white"
                          : "border border-[var(--maroon)]/50 text-[var(--maroon)]"
                      }`}>
                      {p.badge}
                    </span>
                  )}
                </li>
              ))}
            </ul>
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
