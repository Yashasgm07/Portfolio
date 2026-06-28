import MainLayout from "../layouts/MainLayout";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import AboutStats from "../components/about/AboutStats";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import Experience from "../components/experience/Experience";
import Education from "../components/education/Education";
import Contact from "../components/contact/Contact";
import Certifications from "../components/certifications/Certifications";

function Home() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <AboutStats />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <Contact />
      
    </MainLayout>
  );
}

export default Home;