import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import TimelineProjects from "@/components/timeline-projects";
import Resume from "@/components/resume";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div className="min-h-screen text-white">
      <Navbar />
      <Hero />
      <TimelineProjects />
      <Resume />
      <Contact />
    </div>
  );
}
