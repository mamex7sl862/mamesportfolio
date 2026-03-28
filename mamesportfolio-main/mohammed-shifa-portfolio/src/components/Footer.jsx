import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: FaGithub, href: "https://github.com/mamex7sl862", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/mohammed-shifa-3019ba357",
    label: "LinkedIn",
  },
  { icon: FaTwitter, href: "https://twitter.com/your-username", label: "Twitter" },
  { icon: FaInstagram, href: "https://instagram.com/mamex7sl", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[var(--surface)]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div>
          <p className="font-semibold text-white tracking-tight">Mohammed Shifa</p>
          <p className="text-sm text-[var(--muted)] mt-1">
            Full-stack developer · MERN · Django · Flutter
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--muted)]">
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <Link to="/about" className="hover:text-white transition-colors">
            About
          </Link>
          <Link to="/projects" className="hover:text-white transition-colors">
            Projects
          </Link>
          <Link to="/contact" className="hover:text-white transition-colors">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors text-xl"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-white/[0.06] py-4 text-center text-xs text-[var(--muted)]">
        © {new Date().getFullYear()} Mohammed Shifa. Crafted with React & Tailwind.
      </div>
    </footer>
  );
}
