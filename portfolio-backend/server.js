const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// Parse JSON bodies
app.use(express.json());

// CORS configuration - allows your frontend domains
app.use(
  cors({
    origin: [
      "http://localhost:5173", // For local development
      "https://mamesportfolio.vercel.app", // Your deployed frontend URL
    ],
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: false,
  })
);

// Simple root route to confirm server is running and to help keep Render awake
app.get("/", (req, res) => {
  res.json({ message: "Portfolio backend is running! 🚀" });
});

// Contact form route
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Send email using Nodemailer
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      replyTo: email, // So you can directly reply to the visitor
      to: process.env.EMAIL_USER, // Your receiving email
      subject: `Portfolio Contact from ${name}`,
      html: `
        <h2>New Message from Portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
        <hr />
        <small>Sent from mamesportfolio.vercel.app</small>
      `,
    });

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("EMAIL ERROR:", error);
    res
      .status(500)
      .json({ message: "Failed to send email", error: error.message });
  }
});

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // Must be a Gmail App Password
  },
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
