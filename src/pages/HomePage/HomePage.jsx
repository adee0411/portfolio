import Hero from "../../components/sections/Hero";
import Skills from "../../components/sections/Skills";
import ProjectOverview from "../../components/sections/ProjectOverview";
import Values from "../../components/sections/Values";
import About from "../../components/sections/About";
import Contact from "../../components/sections/Contact";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Skills />
      <ProjectOverview />
      <Values />
      <About />
      <Contact />
    </>
  );
};

export default HomePage;
