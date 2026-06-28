import Reveal from "../common/Reveal";
import StaggerContainer from "../common/StaggerContainer";
import StaggerItem from "../common/StaggerItem";
import CertificationCard from "./CertificationCard";

function Certifications() {

  const certifications = [

    {
      title: "Generative AI with Large Language Models",
      issuer: "DeepLearning.AI / Coursera",
      duration: "2026",
      status: "Completed",
      link: "https://www.coursera.org/account/accomplishments/certificate/U7BSB2M6LI78",
    },

    {
      title: "Agentic AI with LangChain & LangGraph",
      issuer: "Coursera",
      duration: "2026",
      status: "Completed",
      link: "#",
    },

    {
      title: "Advanced RAG with Vector Databases",
      issuer: "Coursera",
      duration: "2026",
      status: "Completed",
      link: "#",
    },

    {
      title: "Fundamentals of Building AI Agents",
      issuer: "IBM / Coursera",
      duration: "2026",
      status: "Completed",
      link: "#",
    },

    {
      title: "PyTorch: Fundamentals",
      issuer: "DeepLearning.AI / Coursera",
      duration: "2026",
      status: "Completed",
      link: "https://www.coursera.org/account/accomplishments/certificate/SIYIWQUB42CB",
    },

  ];

  return (
    <section
      id="certifications"
      className="mx-auto max-w-7xl px-6 py-36"
    >

      <Reveal>

        <div className="text-center">

          <p className="uppercase tracking-[0.3em] text-blue-400 font-semibold">
            Certifications
          </p>

          <h2 className="mt-3 text-5xl md:text-6xl font-bold text-white">
            Professional
            <span className="text-blue-500"> Certifications</span>
          </h2>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"></div>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Industry-recognized certifications that strengthen my expertise
            in Artificial Intelligence, Software Engineering and Modern Web Development.
          </p>

        </div>

      </Reveal>

      <StaggerContainer>

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {certifications.map((cert) => (

            <StaggerItem key={cert.title}>

              <CertificationCard {...cert} />

            </StaggerItem>

          ))}

        </div>

      </StaggerContainer>

    </section>
  );
}

export default Certifications;