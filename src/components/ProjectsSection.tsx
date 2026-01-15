"use client";

import Image from "next/image";
import React from "react";
import ScrollReveal from "./ScrollReveal";

type Project = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  align: "left" | "right";
};

const projects: Project[] = [
  {
    title: "LWF Hospital Appointment and Queuing System",
    subtitle: "Featured Project",
    description:
      "A full-stack web application designed to streamline hospital appointment scheduling, EMR management, and real-time queueing. The system features secure authentication using JWT and Google OAuth, role-based dashboards for Admin, Doctor, and Patient, automated email notifications, and session-based queue management. Built with scalable RESTful APIs, cron-based background tasks, and contextual state management to support real-time updates.",
    image: "/images/LWF-pic.png",
    align: "left",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-28 space-y-24">
      {projects.map((project, index) => {
        const isLeft = project.align === "left";

        return (
          <div key={index} className="relative">
            {/* glow */}
            <div
              className="pointer-events-none absolute right-0 left-1/3 top-8 -z-10 h-[420px] opacity-40 blur-3xl"
              style={{
                background:
                  "radial-gradient(60% 60% at 60% 40%, rgba(125, 58, 242, 0.65) 0%, rgba(18, 8, 36, 0) 70%)",
              }}
            />

            <ScrollReveal
              stagger={0.12}
              delay={index * 0.3}
              className="grid grid-cols-1 md:grid-cols-2 items-center gap-10"
            >
              {/* Text */}
              <div
                className={`relative z-10 ${
                  !isLeft ? "md:order-2 text-right" : ""
                }`}
              >
                {/* heading */}
                <div className="mb-12">
                  <p className="text-xs text-[#a48cc9]">{project.subtitle}</p>
                  <h3 className="text-2xl md:text-3xl font-semibold text-white/90">
                    {project.title}
                  </h3>
                </div>

                {/* description */}
                <div
                  className={`relative z-20 max-w-5xl rounded-2xl p-5 bg-white/6 backdrop-blur-sm border border-white/10 shadow-[0_6px_50px_rgba(126,34,206,0.25)]
                  ${isLeft ? "md:-mr-24 md:-mt-6" : "md:-ml-24 md:-mt-6"}`}
                >
                  <p className="text-sm p-4 text-white/75">
                    {project.description}
                  </p>

                  <div
                    className="pointer-events-none absolute -inset-px rounded-[14px] opacity-60"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(168, 85, 247, 0.35), rgba(168, 85, 247, 0.05))",
                    }}
                  />
                </div>
              </div>

              {/* Image */}
              <div className={`${!isLeft ? "md:order-1" : ""}`}>
                <div
                  tabIndex={0}
                  className="group cursor-pointer rounded-2xl overflow-hidden bg-[#0f061c] border border-[#2f1c55]
                  shadow-[0_0_90px_rgba(168,85,247,0.28)]
                  transition-transform duration-300 hover:-translate-y-1 focus:-translate-y-1"
                >
                  <div className="overflow-hidden h-[360px]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={582}
                      height={640}
                      className="w-full h-auto transition-transform duration-[3500ms] ease-linear
                      group-hover:-translate-y-[55%]"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        );
      })}
    </section>
  );
};

export default ProjectsSection;
