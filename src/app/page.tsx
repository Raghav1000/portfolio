import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/Contact";
import GenAI from "./components/GenAI/GenAI";
import Hero from "./components/Hero/Hero";
import PersonalStats from "./components/PersonalStats/PersonalStats";
import ProfessionalCareer from "./components/ProfessionalCareer/ProfessionalCareer";
import Skills from "./components/Skills/Skills";

const Home = () => {
  return (
    <>
      <Hero />
      <PersonalStats />
      <AboutMe />
      <Skills />
      <GenAI />
      <ProfessionalCareer />
      <Contact />
    </>
  );
};

export default Home;
