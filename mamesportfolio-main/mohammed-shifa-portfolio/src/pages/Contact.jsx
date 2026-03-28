import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const serviceID = "service_nk35chh";
    const templateID = "template_ulgjxf7";
    const userID = "BZnkIkuBHLGXLc7o9";

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then(() => {
        setStatus("Message sent successfully! I’ll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus("Something went wrong. Please try again.");
      })
      .finally(() => setLoading(false));
  };

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-[var(--bg)]/80 px-5 py-4 text-white placeholder:text-slate-500 transition focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-[var(--ring)]";

  const socials = [
    { icon: FaGithub, link: "https://github.com/mamex7sl862" },
    { icon: FaLinkedin, link: "https://www.linkedin.com/in/mohammed-shifa-3019ba357" },
    { icon: FaTwitter, link: "https://twitter.com/your-username" },
    { icon: FaInstagram, link: "https://instagram.com/mamex7sl" },
  ];

  return (
    <section className="relative pt-4 pb-14 md:pt-6 md:pb-20 px-6 overflow-hidden">
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-fuchsia-600/10 blur-[100px]"
        aria-hidden
      />

      <div className="max-w-6xl mx-auto relative z-10 grid md:grid-cols-2 gap-14 lg:gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400/90 mb-3">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Let&apos;s build{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">
              something great
            </span>
          </h2>

          <p className="text-slate-400 mb-10 leading-relaxed text-lg">
            Have a product idea or need a developer who cares about performance, UI
            polish, and outcomes? Drop a message — I typically reply within 24–48 hours.
          </p>

          <a
            href="mailto:mohammedshifa800@gmail.com"
            className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-[var(--surface)]/80 px-5 py-4 text-slate-200 transition hover:border-cyan-400/35"
          >
            <FaEnvelope className="text-cyan-400 text-xl shrink-0" />
            <span className="font-medium break-all">mohammedshifa800@gmail.com</span>
          </a>

          <div className="flex gap-4 mt-10">
            {socials.map(({ icon: Icon, link }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 text-slate-400 text-xl transition hover:border-cyan-400/40 hover:text-cyan-300 hover:scale-105"
              >
                <Icon />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-white/[0.08] bg-[var(--surface)]/80 p-8 md:p-10 shadow-2xl shadow-black/40 backdrop-blur-md"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email address"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell me about your project, timeline, and goals…"
                className={`${inputClass} resize-none min-h-[140px]`}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 py-4 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:brightness-110 disabled:opacity-60 disabled:hover:brightness-100"
            >
              {loading ? "Sending…" : "Send message"}
            </button>

            {status && (
              <p
                className={`text-center text-sm ${
                  status.includes("success") ? "text-emerald-400" : "text-red-400"
                }`}
              >
                {status}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
