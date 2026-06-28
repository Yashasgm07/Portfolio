import EducationCard from "./EducationCard";

function Education() {
  const education = [
    {
      degree: "Master of Engineering (Computer Science)",
      institute: "Manipal School of Information Sciences",
      university: "Manipal Academy of Higher Education",
      duration: "2025 – Present",
      cgpa: "8.12 / 10",
      current: true,
    },

    {
      degree: "Bachelor of Engineering (Computer Science)",
      institute: "G M Institute of Technology",
      university: "Visvesvaraya Technological University",
      duration: "2020 – 2024",
      cgpa: "8.20 / 10",
    },
  ];

  return (
    <section
      id="education"
      className="mx-auto max-w-6xl px-6 py-32"
    >
      <div className="text-center">

        <p className="uppercase tracking-[0.3em] text-blue-400 font-semibold">
          Education
        </p>

        <h2 className="mt-3 text-5xl font-bold text-white">
          Academic
          <span className="text-blue-500"> Journey</span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          My academic journey has built a strong foundation in software
          engineering, artificial intelligence, and modern application
          development.
        </p>

      </div>

      <div className="mt-20 space-y-12">

        {education.map((item) => (
          <EducationCard
            key={item.degree}
            {...item}
          />
        ))}

      </div>

    </section>
  );
}

export default Education;