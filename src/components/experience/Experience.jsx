import ExperienceCard from "./ExperienceCard";

function Experience() {
  const experiences = [
    {
      company: "Samsung Semiconductor India Research",
      role: "AI Intern",
      duration: "Jul 2026 – Present",
      current: true,

      description:
        "Working as an AI Intern, contributing to intelligent software solutions and AI-driven engineering projects within Samsung Semiconductor's research environment.",

      highlights: [
        "Developing AI-powered software solutions for enterprise applications.",
        "Collaborating with engineering teams on real-world AI projects.",
        "Applying modern AI technologies and software engineering best practices.",
      ],

      tech: [
        "Python",
        "Artificial Intelligence",
        "Linux",
        "Git",
      ],
    },

    {
      company: "Damaka Communication & Collaboration Pvt. Ltd.",
      role: "Software Engineer I",
      duration: "Jun 2024 – Aug 2025",

      description:
        "Worked as a Full-Stack Software Engineer developing scalable web applications and production-ready software solutions.",

      highlights: [
        "Developed responsive web applications using React and JavaScript.",
        "Integrated REST APIs and optimized application performance.",
        "Resolved production issues and improved software reliability.",
        "Collaborated with Agile cross-functional development teams.",
      ],

      tech: [
        "React",
        "JavaScript",
        "REST APIs",
        "MySQL",
        "Git",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl px-6 py-32"
    >
      <div className="text-center">

        <p className="uppercase tracking-[0.3em] text-blue-400 font-semibold">
          Experience
        </p>

        <h2 className="mt-3 text-5xl font-bold text-white">
          Professional
          <span className="text-blue-500"> Journey</span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          My professional experience in software engineering,
          artificial intelligence, and full-stack application development.
        </p>

      </div>

      <div className="mt-20 space-y-10">

        {experiences.map((exp) => (
          <ExperienceCard
            key={exp.company}
            {...exp}
          />
        ))}

      </div>

    </section>
  );
}

export default Experience;