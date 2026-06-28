import Reveal from "../common/Reveal";
import StaggerContainer from "../common/StaggerContainer";
import StaggerItem from "../common/StaggerItem";
import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      featured: true,
      image: "/images/projects/rag-chatbot.png",
      title: "PDF-RAG Chatbot",
      description:
        "An AI-powered Retrieval-Augmented Generation chatbot that enables users to upload PDF documents and ask context-aware questions using semantic search, vector databases, LangChain, and Large Language Models.",
      tech: ["Python", "LangChain", "RAG", "Vector DB", "LLM"],
      github: "https://github.com/Yashasgm07/PDF-RAG-Chatbot",
      demo: "https://pdf-rag--chatbot.streamlit.app/",
    },

    {
      featured: true,
      image: "/images/projects/agentic-ai.png",
      title: "Agentic AI Leave Management System",
      description:
        "An intelligent leave management platform that automates leave requests, policy validation, approvals, and notifications using Natural Language Processing, React, REST APIs, and AI-driven workflows.",
      tech: ["Python", "React", "NLP", "REST API", "JSON"],
      github: "https://github.com/Yashasgm07/Agentic-AI-Leave-System",
    },

    {
      image: "/images/projects/food-calorie.png",
      title: "Food Calorie Estimation",
      description:
        "Computer vision application that estimates food calories using YOLOv8 for food detection and ResNet for food classification, providing nutritional insights from uploaded food images.",
      tech: ["YOLOv8", "ResNet", "Flask", "Python"],
      github:
        "https://github.com/Yashasgm07/Food-Calorie-Estimation-System",
    },

    {
      image: "/images/projects/ecommerce.png",
      title: "Ecommerce Data Engineering Pipeline",
      description:
        "End-to-end ETL pipeline that extracts, cleans, transforms, and visualizes ecommerce sales data using Python, PostgreSQL, Pandas, and Streamlit dashboards.",
      tech: ["Python", "PostgreSQL", "Pandas", "Streamlit"],
      github:
        "https://github.com/Yashasgm07/Ecommerce-Data-Engineering-Pipeline",
    },
  ];

  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      <Reveal>
        <div className="text-center">

          <p className="uppercase tracking-[0.3em] text-blue-400 font-semibold">
            Portfolio
          </p>

          <h2 className="mt-3 text-5xl md:text-6xl font-bold text-white">
            Featured
            <span className="text-blue-500"> Projects</span>
          </h2>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"></div>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            A collection of AI, Full-Stack and Data Engineering projects that
            demonstrate my ability to build scalable, production-ready software
            solutions.
          </p>

        </div>
      </Reveal>

      <StaggerContainer>
        <div className="mt-20 grid gap-12">

          {projects.map((project) => (
            <StaggerItem key={project.title}>
              <ProjectCard {...project} />
            </StaggerItem>
          ))}

        </div>
      </StaggerContainer>
    </section>
  );
}

export default Projects;