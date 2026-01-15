import Link from "next/link";
import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";

const ContactSection = () => {
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
      </ScrollReveal>
    </section>
  );
};

export default ContactSection;
