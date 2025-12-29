import { motion } from "framer-motion";

// 🔹 Project Images
import etdelalaImg from "../assets/projects/etdelala.png";
import movieImg from "../assets/projects/movie.png";
import mtechhubImg from "../assets/projects/mtechhub.png";
import livescoreImg from "../assets/projects/livescore.png";
import admasImg from "../assets/projects/admas.png";

export default function Projects() {
  const projects = [
    {
      title: "ET-DELALA Job Portal",
      description:
        "Full-stack MERN job portal inspired by Indeed — job search, posting, applications, filters, AI recommendations, and admin dashboard.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
      live: "https://etdelala.vercel.app",
      github: "https://github.com/mamex7sl862/ET-DELALA",
      image: etdelalaImg,
      featured: true,
    },
    {
      title: "Movie Recommendation Site",
      description:
        "Full-stack movie recommendation engine with personalized suggestions for film lovers.",
      tech: ["React", "Node.js", "JavaScript", "Flask", "Python"],
      github: "https://github.com/mamex7sl862/Movie-Recommendation-site",
      image: movieImg,
    },
    {
      title: "MTechHub E-Learning Platform",
      description:
        "E-learning platform with course management, student/teacher roles, quizzes, and PDF certificates.",
      tech: ["Node.js", "Express", "MongoDB", "PDFKit"],
      github: "https://github.com/mamex7sl862/E-learning-platform",
      image: mtechhubImg,
    },
    {
      title: "Live Scoreboard App",
      description:
        "Real-time sports scoreboard with live match results and upcoming games.",
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/mamex7sl862/mern-livescoreboard-app",
      image: livescoreImg,
    },
    {
      title: "Admas Delivery",
      description:
        "Food delivery app with customer orders and admin management dashboard.",
      tech: ["Node.js", "Express", "MongoDB"],
      github: "https://github.com/mamex7sl862/Admas-Delivery",
      image: admasImg,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
        >
          My Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {project.featured && (
                  <span className="absolute top-3 left-3 bg-gradient-to-r from-emerald-500 to-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    LIVE
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gradient-to-r from-purple-50 to-indigo-50 text-purple-700 px-3 py-1 rounded-full text-xs font-medium border border-purple-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-emerald-500 to-blue-600 text-white py-3 px-6 rounded-xl font-semibold text-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
                    >
                      🚀 Live Demo
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border-2 border-gray-200 text-gray-800 py-3 px-6 rounded-xl font-semibold text-sm hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 text-center"
                  >
                    📁 GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-20">
          <a
            href="https://github.com/mamex7sl862"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm text-purple-700 px-10 py-5 rounded-2xl text-xl font-bold shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-300 border border-white/50"
          >
            👨‍💻 View All Projects on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
