"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("https://formsubmit.co/ajax/dilipkumarreddym2005@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: formData.email,
        message: formData.message,
        _captcha: "false",
        _template: "table",
        _autoresponse: "Thanks for contacting! I'll get back to you soon.",
      }),
    });

    if (res.ok) {
      setStatus("Message sent successfully!");
      setFormData({ email: "", message: "" });
    } else {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="bg-white/3 backdrop-blur-md px-8 py-10 max-w-6xl mx-auto rounded-3xl border border-white/20 shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-white">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 rounded-3xl border border-white/20 shadow-sm focus:ring-blue-400 focus:border-blue-500"
          />
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Your message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="mt-1 px-4 py-3 block w-full rounded-3xl border border-white/20 shadow-sm hover:ring-blue-400 focus:ring-blue-400 focus:border-blue-400"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-400 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-3xl"
        >
          Send
        </button>
        <div className="justify-items-center">{status && <p className="text-white text-md  mt-2">{status}  Thanks for contacting! I&apos;ll get back to you soon.</p>}</div>
      </form>
    </div>
  );
}
