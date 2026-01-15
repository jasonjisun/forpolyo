import React from "react";
import ScrollReveal from "./ScrollReveal";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiReact,
  SiPhp,
  SiPython,
  SiCplusplus,
  SiTailwindcss,
  SiBootstrap,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiSupabase,
  SiGit,
  SiGithub,
  SiPostman,
  SiInsomnia,
  SiAndroidstudio,
  SiFigma,
  SiCanva,
  SiVercel,
  SiNetlify,
  SiRender,
  SiDocker,
  SiGithubactions,
  SiGitlab,
  SiWordpress,
  SiWix,
  SiOdoo,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

type TechGroupProps = {
  title: string;
  children: React.ReactNode;
};

const TechGroup = ({ title, children }: TechGroupProps) => {
  return (
    <div className="text-center">
      {/* Title */}
      <h3 className="mb-8 text-sm uppercase tracking-widest text-[#a855f7]">
        {title}
      </h3>

      {/* Icons */}
      <div className="flex flex-wrap justify-center gap-8">
        {React.Children.map(children, (child) => (
          <div
            className="
              text-3xl text-white/60
              transition-all duration-300
              hover:text-[#a855f7]
              hover:scale-110
            "
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

const TechStack = () => {
  return (
    <section id="lab" className="relative py-28">
      <ScrollReveal stagger={0.08}>
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-white/70 mb-6">
            I’m continuously learning and growing as a{" "}
            <span className="text-[#a855f7]">full-stack developer</span>
          </p>
          <p className="text-white/50 text-sm">
            Exploring new technologies, improving my skill set, and building
            practical projects that turn ideas into real-world solutions.
          </p>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <TechGroup title="Languages & Frameworks">
            <SiJavascript />
            <SiTypescript />
            <SiNextdotjs />
            <SiReact />
            <SiNodedotjs />
            <SiExpress />
            <SiPhp />
            <SiPython />
            <FaJava />
            <SiCplusplus />
          </TechGroup>

          <TechGroup title="Frontend Development">
            <SiTailwindcss />
            <SiBootstrap />
            <SiHtml5 />
            <SiCss3 />
          </TechGroup>

          <TechGroup title="Databases">
            <SiMysql />
            <SiMongodb />
            <SiPostgresql />
            <SiFirebase />
            <SiSupabase />
          </TechGroup>

          <TechGroup title="Tools">
            <SiGit />
            <SiGithub />
            <SiPostman />
            <SiInsomnia />
            <SiAndroidstudio />
            <SiFigma />
            <SiCanva />
          </TechGroup>

          <TechGroup title="Deployment">
            <SiVercel />
            <SiNetlify />
            <SiRender />
            <SiGithub />
          </TechGroup>

          <TechGroup title="CMS & ERP">
            <SiWordpress />
            <SiWix />
            <SiOdoo />
          </TechGroup>

          <div className="md:col-start-2">
            <TechGroup title="DevOps">
              <SiDocker />
              <SiGithubactions />
              <SiGitlab />
            </TechGroup>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default TechStack;
