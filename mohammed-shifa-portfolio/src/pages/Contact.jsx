import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
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

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      await axios.post(
        "https://mamesportfolio.onrender.com/api/contact",
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      setStatus("Message sent successfully! I’ll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Contact API Error:", error);
      setStatus("Oops! Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl p-10 md:p-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            Get In Touch
          </h2>

          <p className="text-center text-gray-600 mb-12 text-lg">
            Have a project in mind or just want to say hi? Feel free to reach
            out!
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-300"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-300"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-300"
                placeholder="Your message here..."
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={loading}
                className="bg-gradient-to-r from-teal-500 to-purple-600 text-white px-12 py-5 rounded-full text-xl font-semibold hover:shadow-xl transition transform hover:-translate-y-1 disabled:opacity-70"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>

            {status && (
              <p
                className={`text-center text-lg font-medium ${
                  status.includes("success") ? "text-green-600" : "text-red-600"
                }`}
              >
                {status}
              </p>
            )}
          </form>

          <div className="mt-14 text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Connect With Me
            </h3>
            <div className="flex justify-center gap-6">
              {[
                { icon: <FaGithub />, link: "https://github.com/mamex7sl862" },
                {
                  icon: <FaLinkedin />,
                  link: "https://www.linkedin.com/in/mohammed-shifa-3019ba357",
                },
                {
                  icon: <FaTwitter />,
                  link: "https://twitter.com/your-username",
                },
                {
                  icon: <FaInstagram />,
                  link: "https://instagram.com/mamex7sl",
                },
                {
                  icon: <FaEnvelope />,
                  link: "mailto:mohammedshifa800@gmail.com",
                },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-3xl text-gray-700 hover:text-purple-600 transition"
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
