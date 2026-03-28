import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Project cards show a screenshot on top.
 * - If `screenshot` is set (e.g. "/projects/movie.png"), that file is used (place it in public/projects/).
 * - Else if `live` exists, we use a live preview image from the deployed URL.
 * - Else `fallbackImage` (SVG) is shown.
 */
function previewSrc(project) {
  if (project.screenshot) return project.screenshot;
  if (project.live) {
    const encoded = encodeURIComponent(project.live);
    return `https://image.thum.io/get/width/1200/crop/630/noanimate/${encoded}`;
  }
  return project.fallbackImage;
}

const projects = [
  {
    title: "Import-Export Management System",
    description:
      "Business-focused platform for managing import/export operations, including product handling, order tracking, and admin workflows.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    live: "https://import-export-rust.vercel.app",
    github: "https://github.com/mamex7sl862/mames-import-export",
    fallbackImage: "/projects/importexport.svg",
    featured: true,
  },
  {
    title: "ET-DELALA Job Portal",
    description:
      "Job platform with advanced search, filtering, applications, and admin dashboard for real hiring workflows.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    live: "https://etdelala.vercel.app",
    github: "https://github.com/mamex7sl862/ET-DELALA",
    fallbackImage: "/projects/etdelala.svg",
    featured: true,
  },
  {
    title: "Movie Recommendation Site",
    description:
      "Personalized movie recommendation platform using backend logic and user preferences.",
    tech: ["React", "Node.js", "Flask", "Python"],
    github: "https://github.com/mamex7sl862/Movie-Recommendation-site",
    fallbackImage: "/projects/movie.svg",
  },
  {
    title: "MTechHub E-Learning Platform",
    description:
      "E-learning system with role-based access, quizzes, and certificate generation.",
    tech: ["Node.js", "Express", "MongoDB", "PDFKit"],
    github: "https://github.com/mamex7sl862/E-learning-platform",
    fallbackImage: "/projects/mtechhub.svg",
  },
  {
    title: "Live Scoreboard App",
    description:
      "Real-time sports scoreboard displaying live matches and upcoming fixtures.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/mamex7sl862/mern-livescoreboard-app",
    fallbackImage: "/projects/livescore.svg",
  },
  {
    title: "Admas Delivery",
    description:
      "Food delivery platform with ordering system and admin dashboard.",
    tech: ["Node.js", "Express", "MongoDB"],
    github: "https://github.com/mamex7sl862/Admas-Delivery",
    fallbackImage: "/projects/admas.svg",
  },
];

function ProjectCardImage({ project }) {
  const primary = previewSrc(project);
  const [src, setSrc] = useState(primary);

  return (
    <img
      src={src}
      alt={`${project.title} preview`}
      loading="lazy"
      decoding="async"
      onError={() => {
        if (src !== project.fallbackImage) setSrc(project.fallbackImage);
      }}
      className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
    />
  );
}

const filters = [
  { id: "all", label: "All" },
  { id: "featured", label: "Featured" },
];

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const visible = useMemo(() => {
    if (filter === "featured") return projects.filter((p) => p.featured);
    return projects;
  }, [filter]);

  return (
    <section className="relative pt-4 pb-14 md:pt-6 md:pb-20 px-6 overflow-hidden">
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-64 w-[120%] bg-gradient-to-b from-violet-600/10 to-transparent blur-3xl"
        aria-hidden
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400/90 mb-3">
            Selected work
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">
              projects
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Production apps spanning job portals, logistics, e-learning, and more — built
            with performance and maintainability in mind.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-12 md:mb-14">
          {filters.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => setFilter(id)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                filter === id
                  ? "bg-gradient-to-r from-cyan-500 to-violet-500 text-slate-950 shadow-lg shadow-cyan-500/20"
                  : "border border-white/10 bg-white/[0.04] text-slate-400 hover:border-white/20 hover:text-white"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.article
                layout
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35 }}
                className="group flex flex-col rounded-3xl border border-white/[0.08] bg-[var(--surface)]/70 overflow-hidden shadow-xl shadow-black/30 backdrop-blur-sm transition hover:border-cyan-400/25 hover:shadow-2xl hover:shadow-cyan-500/5"
              >
                <div className="relative h-56 sm:h-60 overflow-hidden bg-[var(--bg)]">
                  <ProjectCardImage project={project} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/80 to-transparent opacity-60" />
                  {project.featured && (
                    <span className="absolute top-4 left-4 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 px-3 py-1 text-xs font-bold text-slate-950 shadow-lg">
                      Featured
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5 line-clamp-3 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-medium uppercase tracking-wide rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-auto">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 py-2.5 text-sm font-semibold text-slate-950 transition hover:brightness-110"
                      >
                        Live
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-center rounded-xl border border-white/15 py-2.5 text-sm font-semibold text-slate-300 transition hover:border-white/25 hover:bg-white/[0.04] hover:text-white ${
                        project.live ? "flex-1" : "w-full"
                      }`}
                    >
                      Code
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="text-center mt-16 md:mt-20">
          <a
            href="https://github.com/mamex7sl862"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full border border-white/15 bg-white/[0.05] px-10 py-4 text-base font-bold text-white transition hover:border-cyan-400/40 hover:bg-white/[0.08]"
          >
            More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
