"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import ScrollReveal from "./ScrollReveal";

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="home" className="relative pt-36 pb-28">
      <div className="mt-12 md:mt-24 max-w-6xl mx-auto px-6">
        {/* Avatar + headline */}
        <ScrollReveal
          stagger={0.12}
          className="flex flex-col md:flex-row gap-10 items-center md:items-start"
        >
          {/* Avatar */}
          <div className="relative flex justify-center md:justify-end">
            <div className="pointer-events-none absolute -inset-16 md:-inset-24 rounded-full bg-gradient-to-b from-[#7c3aed] via-[#6d28d9]/30 to-transparent blur-3xl opacity-80" />

            <div className="relative">
              <Image
                src="/images/avatar1.png"
                alt="Jason Castillon avatar"
                width={220}
                height={220}
                priority
              />

              {/* Greeting bubble */}
              <div className="pointer-events-none absolute -top-10 -right-6 md:-top-16 md:-right-36 text-xs text-white/70">
                <div className="flex items-center gap-2">
                  <div className="relative w-16 h-8 md:w-24 md:h-14">
                    <Image
                      src="/images/hero-arrow.png"
                      alt="decorative arrow"
                      fill
                      className="object-contain -rotate-6"
                    />
                  </div>
                  <span>
                    Hi, I’m{" "}
                    <span className="text-[#a78bfa] font-medium">
                      Jason Castillon
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left md:pl-4">
            <p className="text-sm md:text-base text-white/60 mb-3">
              Full Stack Developer & DevOps Enthusiast
            </p>

            <h1 className="text-4xl sm:text-5xl font-normal tracking-tight leading-tight">
              <span className="block">Always learning and improving,</span>
              <span className="block">
                great software is never{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-[#7127BA]">finished</span>
                  <span className="pointer-events-none absolute -inset-2 translate-y-1 -z-10 rotate-6">
                    <Image
                      src="/images/ellipse.png"
                      alt="highlight"
                      fill
                      className="object-contain"
                    />
                  </span>
                </span>
              </span>
            </h1>

            <p className="mt-3 text-xs md:text-sm text-white/50 max-w-lg mx-auto md:mx-0">
              I focus on building reliable software, blending full-stack
              development with a strong appreciation for DevOps workflows.
            </p>
          </div>
        </ScrollReveal>

        {/* Typewriter + description */}
        <ScrollReveal
          delay={0.15}
          className="mt-16 max-w-3xl text-center md:text-left"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight mb-4">
            {mounted && (
              <Typewriter
                words={[
                  "I'm a Full-Stack Developer",
                  "Aspiring Devops Cloud Engineer",
                  "I never stop learning new things",
                ]}
                typeSpeed={65}
                deleteSpeed={0}
                delaySpeed={600}
                cursor
                cursorStyle="|"
                loop={0}
              />
            )}
          </h2>

          <p className="text-white/70 text-sm md:text-base mb-4">
            Currently, I work as a full-stack freelancer, building innovative
            web applications and crafting digital products that users can fully
            utilize and feel satisfied with.
          </p>

          <p className="text-white/70 text-sm md:text-base leading-7">
            As a computer science enthusiast, I’m deeply passionate about the
            tech industry—constantly learning, exploring new innovations, and
            connecting with inspiring communities. I thrive on mentorship,
            attending tech events, and collaborating with like-minded people who
            push the boundaries of technology. I’m dedicated, motivated, and
            endlessly excited about creating solutions that truly make an
            impact.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroSection;
