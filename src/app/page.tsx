import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import PersonalStats from "./components/PersonalStats/PersonalStats";
import ProfessionalCareer from "./components/ProfessionalCareer/ProfessionalCareer";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

const Home = () => {
  return (
    <>
      <Hero />
      <PersonalStats />
      <AboutMe />
      <Skills />
      <ProfessionalCareer />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
