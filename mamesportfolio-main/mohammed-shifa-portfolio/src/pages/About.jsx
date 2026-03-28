import { motion } from "framer-motion";

const skills = [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "Django",
  "Python",
  "Flutter",
  "JavaScript",
  "Tailwind",
  "Git",
  "REST APIs",
];

export default function About() {
  return (
    <section className="relative pt-4 pb-14 md:pt-6 md:pb-20 px-6 overflow-hidden">
      <div
        className="pointer-events-none absolute top-20 right-0 h-72 w-72 rounded-full bg-violet-600/15 blur-[80px]"
        aria-hidden
      />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14 md:mb-20"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400/90 mb-3">
            Background
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            About{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">
              me
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="grid md:grid-cols-2 gap-14 lg:gap-20 items-start"
        >
          <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
            <p>
              I&apos;m{" "}
              <span className="text-white font-semibold">Mohammed Shifa</span>, a
              full-stack developer focused on fast, scalable, and user-centered web
              applications.
            </p>
            <p>
              I&apos;m strongest in the MERN stack, and I also build with{" "}
              <span className="text-slate-300">Django</span> and{" "}
              <span className="text-slate-300">Flutter</span> when the project calls
              for Python backends or mobile and desktop experiences.
            </p>
            <p className="text-slate-500">
              My approach: clean code, measurable performance, and interfaces that
              convert. I ship value, not noise.
            </p>

            <a
              href="https://github.com/mamex7sl862"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex mt-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-500 px-8 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/15 transition hover:brightness-110"
            >
              View GitHub
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.35 }}
                className="group relative rounded-2xl border border-white/[0.08] bg-[var(--surface)]/80 p-6 text-center font-medium text-slate-300 transition hover:border-cyan-400/35 hover:text-white hover:shadow-lg hover:shadow-cyan-500/5"
              >
                <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-0 transition group-hover:opacity-100" />
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
