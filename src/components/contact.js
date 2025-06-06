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
    <div className="bg-white/80 dark:bg-white/5 backdrop-blur-md px-8 py-10 max-w-6xl mx-auto rounded-3xl border border-gray-300 dark:border-white/20 shadow-lg text-gray-900 dark:text-white">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 rounded-3xl border border-gray-300 dark:border-white/20 shadow-sm focus:ring-blue-400 focus:border-blue-500 bg-white dark:bg-transparent text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
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
            className="mt-1 px-4 py-3 block w-full rounded-3xl border border-gray-300 dark:border-white/20 shadow-sm focus:ring-blue-400 focus:border-blue-500 bg-white dark:bg-transparent text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-3xl transition duration-200"
        >
          Send
        </button>
        {status && (
          <p className="text-center text-sm text-gray-700 dark:text-gray-300 mt-2">
            {status}
          </p>
        )}
      </form>
    </div>
  );
}
