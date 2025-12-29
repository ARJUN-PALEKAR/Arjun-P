"use client";

import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("https://arjun-p.onrender.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("API response:", data);

      if (data.success) {
        alert("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert(`❌ ${data.error || "Something went wrong. Please try again."}`);
      }
    } catch (error) {
      console.error("Error sending form:", error);
      alert("❌ Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white drop-shadow-2xl gpu-accelerated [text-shadow:_2px_2px_4px_#000,_-2px_-2px_4px_#000]">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side: Text Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 [text-shadow:_2px_2px_4px_#000,_-2px_-2px_4px_#000]">
              Let's work together
            </h3>

            <p className="text-neutral-300 mb-8 leading-relaxed [text-shadow:_2px_2px_4px_#000,_-2px_-2px_4px_#000]">
              I'm always interested in new opportunities and exciting projects.
              Whether you have a question or just want to say hi, feel free to
              reach out!
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Mail className="text-white" size={20} />
                <span className="text-neutral-300 [text-shadow:_2px_2px_4px_#000,_-2px_-2px_4px_#000]">
                  arjunppalekar15@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-white" size={20} />
                <span className="text-neutral-300 [text-shadow:_2px_2px_4px_#000,_-2px_-2px_4px_#000]">
                  +91 8610078346
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-white" size={20} />
                <span className="text-neutral-300 [text-shadow:_2px_2px_4px_#000,_-2px_-2px_4px_#000]">
                  Pune, Maharashtra
                </span>
              </div>
            </div>

            {/* Social Icons - Updated bg to neutral-800/50 for cleaner look */}
            <div className="flex gap-4">
              <a
                href="https://github.com/ARJUN-PALEKAR"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-neutral-800/50 border border-neutral-700 rounded-full hover:bg-neutral-700 transition-colors"
              >
                <Github className="text-white" size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/arjunpalekar/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-neutral-800/50 border border-neutral-700 rounded-full hover:bg-neutral-700 transition-colors"
              >
                <Linkedin className="text-white" size={20} />
              </a>
              <a
                href="https://x.com/PalekarArjun"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-neutral-800/50 border border-neutral-700 rounded-full hover:bg-neutral-700 transition-colors"
              >
                <Twitter className="text-white" size={20} />
              </a>
            </div>
          </div>

          {/* Right Side: Form */}
          {/* Changed container to neutral-900/50 to remove blue tint */}
          <div className="bg-neutral-900/50 backdrop-blur-sm rounded-xl p-8 border border-neutral-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-white font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  // UPDATED: bg-neutral-950 removes the blue tint. 
                  // Added focus:ring to give it a nice interaction.
                  className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600 focus:ring-1 focus:ring-neutral-600 transition-all"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-white font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  // UPDATED
                  className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600 focus:ring-1 focus:ring-neutral-600 transition-all"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-white font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  // UPDATED
                  className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600 focus:ring-1 focus:ring-neutral-600 transition-all resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-white text-black rounded-lg font-bold hover:bg-neutral-200 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}