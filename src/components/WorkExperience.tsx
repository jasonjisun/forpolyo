"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import ScrollReveal from "./ScrollReveal";

type ExperienceItem = {
  title: string;
  role: string;
  period: string;
  description: string;
  image: string;
};

const experienceItems: ExperienceItem[] = [
  {
    title: "Freelancing – Full Stack Developer | Virtual Assistant",
    role: "Remote",
    period: "Aug 2024 – Present",
    description:
      "I work on various online projects providing both technical and administrative support. I develop and maintain web applications using the MERN stack and TypeScript, assist clients with data management, scheduling, and documentation, and deliver reliable virtual assistance and technical solutions to meet client needs.",
    image: "/images/work-expriences-1.png",
  },
  {
    title: "Internship – Odoo Developer | Data Analyst | System Administrator",
    role: "Meatworld International, Inc.",
    period: "June – August 2024",
    description:
      "During my internship, I managed backend database operations and performed testing on Odoo.sh. I built interactive, user-focused frontend UIs, configured Meta campaigns and Events Manager for optimized ad tracking, set up Google Analytics and Google Tag Manager for user monitoring, provided prompt technical support, and created onboarding documentation for intern training.",
    image: "/images/work-expriences-2.png",
  },
];

const WorkExperience = () => {
  return (
    <section id="experience" className="relative py-24">
      {/* glow effect */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[90vw] sm:w-[760px] md:w-[1000px] h-[280px] sm:h-[380px] md:h-[520px] opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, rgba(168,85,247,0.6) 0%, rgba(126,34,206,0) 70%)",
        }}
      />
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl md:text-3xl font-semibold text-white/90 mb-8">
          Work Experience
        </h3>

        <ScrollReveal
          stagger={0.15}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 md:gap-8"
        >
          {experienceItems.map((item, index) => (
            <article
              key={index}
              className="group relative overflow-hidden rounded-2xl p-5 sm:p-6 md:p-7 bg-[#140a26] border border-[#2f1c55] shadow-[0_10px_40px_rgba(113,39,186,0.25)] transition-all duration-300 hover:-translate-y-1 md:-translate-y-2 hover:border-[#7c3aed]/60 hover:shadow-[0_20px_60px_rgba(113,39,186,0.40)]"
            >
              {/* card gradient */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-70 transition-opacity duration-300 group-hover:opacity-90"
                style={{
                  background:
                    "radial-gradient(120% 80% at 80% 10%, rgba(125,58,242,0.35) 0%, rgba(126,58,242,0.15) 25%), rgba(18,8,36,0) 60%",
                }}
              ></div>

              <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 md:gap-8">
                {/* icon */}
                <div className="relative shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 transition-transform duration-300 group-hover:-translate-y-1">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain drop-shadow-[0_8px_24px_rgba(113,39,186,0.35)]"
                    priority
                  />
                </div>

                {/* text content */}
                <div>
                  <h4 className="text-base sm:text-lg md:text-xl font-semibold text-white mt-4 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs md:text-sm text-white/50 mb-2">
                    {item.role} | {item.period}
                  </p>
                  <p className="mt-2 text-xs md:text-sm text-white/60 max-w-sm mx-auto sm:mx-0">
                    {item.description}
                  </p>
                  <div className="mt-4 flex justify-center sm:justify-start">
                    <Link
                      href="#"
                      className="inline-flex items-center text-[11px] md:text-xs px-4 py-1.5 rounded-full bg-[#1a0c2e] border border-[#3e1d6d] text-white/80 hover:text-white hover:border-[#a855f7] hover:bg-[#220e3d] transition-colors"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WorkExperience;
