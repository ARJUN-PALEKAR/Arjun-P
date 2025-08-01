import dynamic from "next/dynamic";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import AnimatedProjects from "@/components/animated-projects";
import Resume from "@/components/resume";
import Contact from "@/components/contact";

const SilkBackground = dynamic(() => import("@/components/SilkBackground"), {
  ssr: false,
});

export default function Home() {
  return (
<div className="min-h-screen text-white relative overflow-hidden">
      {/* Silk Background */}
      <SilkBackground />

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Projects />
        {/* <AnimatedProjects /> */}
        <Resume />
        <Contact />
      </div>
    </div>
  );
}
