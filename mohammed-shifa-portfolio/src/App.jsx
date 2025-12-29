import { Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

// Navbar – Visible on ALL pages with semi-transparent background
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-gray-900">
            Mohammed Shifa
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-10">
            <Link
              to="/"
              className="text-gray-800 hover:text-purple-600 font-medium transition"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-800 hover:text-purple-600 font-medium transition"
            >
              About
            </Link>
            <Link
              to="/projects"
              className="text-gray-800 hover:text-purple-600 font-medium transition"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="text-gray-800 hover:text-purple-600 font-medium transition"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-800"
          >
            {isOpen ? (
              <XMarkIcon className="h-8 w-8" />
            ) : (
              <Bars3Icon className="h-8 w-8" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-6 space-y-4 text-center bg-white rounded-xl shadow-lg py-6"
          >
            <Link
              to="/"
              className="block text-xl text-gray-800 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-xl text-gray-800 font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/projects"
              className="block text-xl text-gray-800 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="block text-xl text-gray-800 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

// Layout for other pages (adds navbar + padding)
function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="pt-32 min-h-screen bg-gray-50">{children}</main>
    </>
  );
}

// Home Page
function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600">
      <div className="absolute inset-0">
        <svg viewBox="0 0 1440 960" className="w-full h-full">
          <path
            fill="#ffffff"
            d="M0,480L48,505.3C96,531,192,581,288,586.7C384,592,480,552,576,522.7C672,493,768,475,864,480C960,485,1056,513,1152,512C1248,511,1344,481,1392,466.7L1440,452L1440,960L1392,960C1344,960,1248,960,1152,960C1056,960,960,960,864,960C768,960,672,960,576,960C480,960,384,960,288,960C192,960,96,960,48,960L0,960Z"
          />
        </svg>
      </div>
      <Navbar /> {/* Navbar on Home too */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-2xl p-10 max-w-4xl w-full"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-purple-600 font-semibold text-lg">
                SOFTWARE ENGINEER
              </p>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mt-4 leading-tight">
                Hello, my name
                <br />
                is Mohammed Shifa
              </h1>
              <p className="text-gray-600 mt-6 text-lg leading-relaxed">
                Full-stack developer specializing in the MERN stack. I build
                modern, responsive web applications with clean code and great
                user experiences. Passionate about solving real-world problems
                through technology.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/projects"
                  className="bg-gradient-to-r from-teal-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition transform hover:-translate-y-1"
                >
                  View Projects
                </Link>
                <a
                  href="https://www.linkedin.com/in/mohammed-shifa-3019ba357?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-gray-800 text-gray-800 px-8 py-4 rounded-full font-semibold hover:bg-gray-800 hover:text-white transition"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                <img
                  src="pic1.jpg"
                  alt="Mohammed Shifa"
                  className="rounded-2xl shadow-xl w-80 lg:w-96 object-cover"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-teal-400 to-purple-600 rounded-full opacity-70 blur-3xl" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Routes
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/about"
        element={
          <Layout>
            <About />
          </Layout>
        }
      />
      <Route
        path="/projects"
        element={
          <Layout>
            <Projects />
          </Layout>
        }
      />
      <Route
        path="/contact"
        element={
          <Layout>
            <Contact />
          </Layout>
        }
      />
    </Routes>
  );
}
