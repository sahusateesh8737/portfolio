import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Tools from "@/components/Tools";
import CodingProfiles from "@/components/CodingProfiles";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col pb-20">
      <Hero />
      <div className="flex flex-col gap-20">
        <About />
        <Skills />
        <Projects />
        <Tools />
         <Certifications />
        <CodingProfiles />
        <Contact />
      </div>
    </div>
  );
}
