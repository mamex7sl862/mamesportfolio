import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-2xl p-10 md:p-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            About Me
          </h2>

          <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
            <p>
              Hi, I'm{" "}
              <span className="font-bold text-purple-600">Mohammed Shifa</span>,
              a passionate Full-Stack Software Engineer specializing in the MERN
              stack (MongoDB, Express, React, Node.js).
            </p>
            <p>
              I love building practical, real-world web applications — from
              e-learning platforms with course management and automated
              certificate generation to live sports scoreboards and food
              delivery systems with admin dashboards.
            </p>
            <p>
              My projects focus on clean code, responsive design, and great user
              experiences. I'm constantly learning and improving my skills in
              modern JavaScript tools and full-stack development.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Tech Stack
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "React",
                "Node.js",
                "Express",
                "MongoDB",
                "JavaScript",
                "Tailwind CSS",
                "PDFKit",
                "Git",
              ].map((skill) => (
                <div
                  key={skill}
                  className="bg-gradient-to-r from-teal-100 to-purple-100 text-gray-800 text-center py-4 px-6 rounded-xl font-medium shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://github.com/mamex7sl862"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition"
            >
              View My GitHub →
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
