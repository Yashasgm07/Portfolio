import {
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaLinux,
  FaDatabase,
} from "react-icons/fa";

import {
  SiJavascript,
  SiMysql,
  SiPostgresql,
  SiPandas,
  SiFlask,
  SiExpress,
  SiPostman,
  SiJson,
  SiLangchain,
} from "react-icons/si";

import { TbApi } from "react-icons/tb";
import { BsRobot } from "react-icons/bs";
import { MdOutlinePsychology } from "react-icons/md";
import { BiCodeAlt } from "react-icons/bi";


import Reveal from "../common/Reveal";
import StaggerContainer from "../common/StaggerContainer";
import StaggerItem from "../common/StaggerItem";
import SkillCard from "./SkillCard";

function Skills() {
  const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { icon: FaPython, name: "Python" },
      { icon: SiJavascript, name: "JavaScript" },
      { icon: FaDatabase, name: "SQL" },
    ],
  },

  {
    title: "Artificial Intelligence",
    skills: [
      { icon: BsRobot, name: "Machine Learning" },
      { icon: MdOutlinePsychology, name: "Natural Language Processing" },
      { icon: BiCodeAlt, name: "Large Language Models" },
      { icon: FaDatabase, name: "Retrieval-Augmented Generation" },
      { icon: SiLangchain, name: "LangChain" },
    ],
  },

  {
    title: "Frontend Development",
    skills: [
      { icon: FaReact, name: "React" },
      { icon: FaHtml5, name: "HTML5" },
      { icon: FaCss3Alt, name: "CSS3" },
      { icon: BiCodeAlt, name: "Responsive Design" },
    ],
  },

  {
    title: "Backend Development",
    skills: [
      { icon: SiFlask, name: "Flask" },
      { icon: SiExpress, name: "Express.js" },
      { icon: TbApi, name: "REST APIs" },
      { icon: TbApi, name: "API Integration" },
      { icon: SiJson, name: "JSON" },
    ],
  },

  {
    title: "Database & Analytics",
    skills: [
      { icon: SiPostgresql, name: "PostgreSQL" },
      { icon: SiMysql, name: "MySQL" },
      { icon: SiPandas, name: "Pandas" },
      { icon: FaDatabase, name: "Power BI" },
      { icon: FaDatabase, name: "ETL Pipelines" },
    ],
  },

  {
    title: "Tools & Platforms",
    skills: [
      { icon: FaGitAlt, name: "Git" },
      { icon: FaGithub, name: "GitHub" },
      { icon: FaDocker, name: "Docker" },
      { icon: FaLinux, name: "Linux" },
    ],
  },
];

  return (
    <section
      id="skills"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      <Reveal>
        <div className="text-center">

          <p className="uppercase tracking-[0.3em] text-blue-400 font-semibold">
            Skills
          </p>

          <h2 className="mt-3 text-5xl md:text-6xl font-bold text-white">
            Technical
            <span className="text-blue-500"> Expertise</span>
          </h2>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"></div>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Technologies, frameworks and tools that I use to design,
            develop and deploy modern AI-powered software solutions.
          </p>

        </div>
      </Reveal>

      <StaggerContainer>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">

          {skillCategories.map((category) => (

            <StaggerItem key={category.title}>

              <div
                className="
                h-full
                rounded-3xl
                border
                border-slate-800
                bg-slate-900/60
                p-8
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-blue-500/40
                hover:shadow-[0_15px_40px_rgba(37,99,235,.18)]
                "
              >

                <h3 className="mb-8 text-2xl font-bold text-white">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-4">

                  {category.skills.map((skill) => (

                    <SkillCard
                      key={skill.name}
                      icon={skill.icon}
                      name={skill.name}
                    />

                  ))}

                </div>

              </div>

            </StaggerItem>

          ))}

        </div>

      </StaggerContainer>

    </section>
  );
}

export default Skills;