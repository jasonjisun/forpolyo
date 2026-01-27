"use client";

import Link from "next/link";
import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";

const ContactSection = () => {
  const [status, setStatus] = React.useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;

    const payload = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error();

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };
  return (
    <section id="contact" className="py-24 relative">
      <ScrollReveal stagger={0.08}>
        <h3 className="text-2xl md:text-3xl font-semibold text-white/90 mb-7">
          Contact
        </h3>

        <p className="text-sm text-white/60 max-w-xl">
          I’m driven by learning, collaboration, and creating software that
          makes a real impact. If you have an opportunity or a project in mind,
          let’s start a conversation.
        </p>

        <div className="mt-6 text-white/80">
          <Link
            href="mailto:jasoncastillon2015@gmail.com"
            className="hover:text-[#a855f7]"
          >
            jasoncastillon2015@gmail.com
          </Link>
        </div>

        <div className="mt-6 flex items-center gap-4 text-white/80">
          <Link
            href="https://www.linkedin.com/in/md-rafiuddin/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#a855f7]"
          >
            <FaInstagram className="size-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/jason-castillon/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#a855f7]"
          >
            <FaLinkedin className="size-5" />
          </Link>
          <Link
            href="https://github.com/jasonjisun"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#a855f7]"
          >
            <FaGithub className="size-5" />
          </Link>
        </div>

        {/* Contact Form */}
        <p className="mt-12 mb-6 text-sm font-medium text-white/80">
          <span className="text-[#a855f7]">Drop your message here</span> — I’d
          love to hear from you.
        </p>

        <form onSubmit={handleSubmit} className="mt-14 max-w-xl space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#a855f7]"
            />

            <input
              name="phone"
              type="tel"
              placeholder="Phone"
              className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#a855f7]"
            />
          </div>

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#a855f7]"
          />

          <input
            name="subject"
            type="text"
            placeholder="Subject"
            className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#a855f7]"
          />

          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#a855f7]"
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className="
    inline-flex items-center justify-center
    rounded-full px-6 py-3 text-sm font-medium
    bg-[#7c3aed] text-white/90
    hover:bg-[#6d28d9]
    disabled:opacity-50
    transition-colors
  "
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
          {status === "success" && (
            <p className="text-sm text-green-400 mt-4">
              Message sent! Thank you for reaching out 🙌
            </p>
          )}

          {status === "error" && (
            <p className="text-sm text-red-400 mt-4">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </ScrollReveal>
    </section>
  );
};

export default ContactSection;
