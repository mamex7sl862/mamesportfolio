import { Routes, Route, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ArrowUpIcon } from "@heroicons/react/24/solid";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    [
      "relative px-1 py-1 transition-colors duration-200",
      isActive ? "text-white" : "text-slate-400 hover:text-white",
    ].join(" ");

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/[0.08] bg-[var(--bg)]/75 backdrop-blur-xl supports-[backdrop-filter]:bg-[var(--bg)]/60">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink
          to="/"
          className="text-lg font-bold tracking-tight bg-gradient-to-r from-cyan-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent"
        >
          Mohammed Shifa
        </NavLink>

        <div className="hidden md:flex items-center gap-10 text-sm font-medium">
          {nav.map(({ to, label }) => (
            <NavLink key={to} to={to} className={linkClass}>
              {({ isActive }) => (
                <>
                  {label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/5 transition"
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          {isOpen ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-white/[0.08] bg-[var(--surface)]/95 backdrop-blur-lg px-6 py-6 space-y-1"
        >
          {nav.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block py-3 px-3 rounded-xl text-base font-medium ${
                  isActive
                    ? "text-white bg-white/[0.08]"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </motion.div>
      )}
    </nav>
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[var(--surface)]/90 text-cyan-300 shadow-lg shadow-black/40 backdrop-blur-md transition hover:border-cyan-400/40 hover:bg-[var(--surface-hover)] hover:text-cyan-200"
      aria-label="Back to top"
    >
      <ArrowUpIcon className="h-5 w-5" />
    </button>
  );
}

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-[4.25rem] min-h-screen bg-[var(--bg)]">{children}</main>
      <Footer />
      <BackToTop />
    </>
  );
}

function HeroBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute -top-40 -right-32 h-[420px] w-[420px] rounded-full bg-violet-600/25 blur-[100px]" />
      <div className="absolute top-1/3 -left-40 h-[380px] w-[380px] rounded-full bg-cyan-500/20 blur-[100px]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[300px] w-[80%] rounded-full bg-fuchsia-600/10 blur-[90px]" />
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}

function Home() {
  const stats = [
    { value: "6+", label: "Shipped projects" },
    { value: "MERN+", label: "Django · Flutter" },
    { value: "100%", label: "Focus on UX" },
  ];

  return (
    <section className="relative min-h-[calc(100vh-6rem)] flex flex-col justify-center overflow-hidden">
      <HeroBackground />
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-6 md:py-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/90 mb-6">
              Full-stack developer
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight text-white mb-6">
              I build{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                fast, scalable
              </span>
              <br />
              web experiences
            </h1>

            <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-xl">
              I build with the MERN stack every day, and I also ship backends with{" "}
              <span className="text-slate-300">Django</span> and cross-platform UIs
              with <span className="text-slate-300">Flutter</span> — clean
              architecture, sharp UI, and measurable results.
            </p>

            <div className="flex flex-wrap gap-4 mb-14">
              <NavLink
                to="/projects"
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-500 px-8 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:brightness-110 hover:shadow-cyan-500/30"
              >
                View projects
              </NavLink>
              <NavLink
                to="/contact"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/[0.04] px-8 py-3.5 text-sm font-semibold text-white transition hover:border-cyan-400/40 hover:bg-white/[0.07]"
              >
                Let&apos;s talk
              </NavLink>
            </div>

            <div className="grid grid-cols-3 gap-4 max-w-lg">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-white/[0.08] bg-[var(--surface)]/60 px-4 py-4 backdrop-blur-sm"
                >
                  <p className="text-lg md:text-xl font-bold text-white tabular-nums">
                    {s.value}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cyan-500/30 via-violet-500/20 to-fuchsia-500/30 blur-2xl" />
              <div className="relative rounded-[2rem] border border-white/10 bg-[var(--surface)]/40 p-2 shadow-2xl shadow-black/50 backdrop-blur-sm">
                <img
                  src="/pic1.jpg"
                  alt="Mohammed Shifa"
                  className="w-72 sm:w-80 md:w-96 h-auto rounded-[1.35rem] object-cover aspect-[4/5]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
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
