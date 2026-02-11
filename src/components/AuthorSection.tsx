"use client";

import { BookOpen, Layers, Eye, Map } from "lucide-react";

export default function AuthorSection() {
  const stats = [
    { icon: BookOpen, label: "Books", value: "5" },
    { icon: Layers, label: "Chapters", value: "50" },
    { icon: Eye, label: "Practices", value: "6" },
    { icon: Map, label: "Journey", value: "1" },
  ];

  return (
    <section id="author" className="relative py-24 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-navy-light to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,206,209,0.06),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Author info */}
          <div className="animate-fadeInUp">
            <div className="inline-block px-4 py-1.5 rounded-full border border-turquoise/20 bg-turquoise/5 mb-6">
              <span className="text-turquoise text-xs uppercase tracking-widest font-medium">
                About the Author
              </span>
            </div>

            {/* Author photo */}
            <div className="mb-6">
              <img
                src="/images/ketan-shukla.jpeg"
                alt="Ketan Shukla"
                className="w-40 h-40 rounded-full object-cover border-2 border-turquoise/30 shadow-turquoise"
              />
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-6">
              <span className="heading-gradient">Ketan Shukla</span>
            </h2>

            <div className="space-y-4 text-cream/60 leading-relaxed text-base">
              <p>
                Ketan Shukla is a writer and lifelong learner with a deep
                passion for critical thinking, rational analysis, and
                evidence-based understanding. His curiosity spans philosophy,
                the experience of life, and the quiet discipline of seeing
                reality as it actually is.
              </p>
              <p>
                The <em>Reality Without Belief</em> series is a groundbreaking
                five-book journey that dismantles the unexamined reverence for
                belief, faces reality directly, exposes cultural conviction,
                develops the practice of clear seeing, and arrives at the quiet
                freedom of having nothing left to defend.
              </p>
              <p>
                When he&rsquo;s not writing non-fiction, Ketan writes fiction
                and explores the ideas that fascinate him. You can find his
                other work at{" "}
                <a
                  href="https://aztec.ketanshukla.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-turquoise hover:text-turquoise-light underline underline-offset-2 transition-colors"
                >
                  Aztec Samurai Adventures
                </a>{" "}
                and{" "}
                <a
                  href="https://repetition.ketanshukla.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-turquoise hover:text-turquoise-light underline underline-offset-2 transition-colors"
                >
                  The Repetition Series
                </a>
                . He believes the best writing — fiction or non-fiction — comes
                from genuine curiosity and the willingness to sit with a problem
                until it teaches you something.
              </p>
            </div>

            {/* Dedication */}
            <div className="mt-8 p-6 glass rounded-xl">
              <p className="text-cream/50 italic font-serif text-center text-base">
                &ldquo;For every reader who ever dared to set belief aside and
                face what is actually so.&rdquo;
              </p>
            </div>
          </div>

          {/* Right: Stats & Series info */}
          <div>
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass rounded-xl p-6 text-center hover-lift"
                >
                  <stat.icon className="w-8 h-8 text-turquoise mx-auto mb-3" />
                  <div className="text-3xl font-bold text-cream font-serif">
                    {stat.value}
                  </div>
                  <div className="text-cream/40 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Series structure */}
            <div className="glass rounded-xl p-6">
              <h3 className="text-lg font-bold text-cream mb-4">
                Series Structure
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full bg-cyan-500/60 mt-1.5 flex-shrink-0" />
                  <div>
                    <p className="text-cream font-medium text-sm">
                      Book I — The Anatomy of Belief
                    </p>
                    <p className="text-cream/40 text-xs">
                      Why we believe, why it fails, and what it costs us.
                      Dismantling the reverence for belief.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full bg-teal-500/60 mt-1.5 flex-shrink-0" />
                  <div>
                    <p className="text-cream font-medium text-sm">
                      Book II — The Nature of What Is So
                    </p>
                    <p className="text-cream/40 text-xs">
                      Facing reality without interpretation, meaning, or
                      comfort. Evidence over preference.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-500/60 mt-1.5 flex-shrink-0" />
                  <div>
                    <p className="text-cream font-medium text-sm">
                      Book III — The Theater of Conviction
                    </p>
                    <p className="text-cream/40 text-xs">
                      How culture, identity, and outrage replace thinking.
                      Choice without justification.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full bg-sky-500/60 mt-1.5 flex-shrink-0" />
                  <div>
                    <p className="text-cream font-medium text-sm">
                      Book IV — The Practice of Clear Seeing
                    </p>
                    <p className="text-cream/40 text-xs">
                      How to see, listen, decide, and respond without belief.
                      The daily practice of clarity.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full bg-indigo-400/60 mt-1.5 flex-shrink-0" />
                  <div>
                    <p className="text-cream font-medium text-sm">
                      Book V — The Quiet Exit
                    </p>
                    <p className="text-cream/40 text-xs">
                      Freedom, loneliness, death, and what remains when there is
                      nothing left to defend.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
