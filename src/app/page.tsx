import HereSection from "@/components/HeroSection";
import WorkExperience from "@/components/WorkExperience";
import TechStack from "@/components/TechStack";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const Home = () => {
  return (
    <>
      <main className="max-w-7xl mx-auto px-6 lg:px-8">
        <HereSection />
        <WorkExperience />
        <TechStack />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
};

export default Home;
