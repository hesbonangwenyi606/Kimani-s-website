import React from "react";
import Hero from "@/components/Hero"; // your hero section
import About from "@/components/About"; // your about section
import Skills from "@/components/Skills"; // your skills section
import Projects from "@/components/Projects"; // your projects section
import Contact from "@/components/Contact"; // your contact section
import Experience from "@/components/Experience";

const Index: React.FC = () => {
  return (
    <div>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
