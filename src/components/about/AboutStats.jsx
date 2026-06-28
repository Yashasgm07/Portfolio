import {
  Briefcase,
  FolderGit2,
  Code2,
} from "lucide-react";

function AboutStats() {
  const stats = [
    {
      icon: Briefcase,
      number: "1+",
      title: "Years Experience",
      subtitle: "Software Engineering",
    },
    {
      icon: FolderGit2,
      number: "10+",
      title: "Projects Built",
      subtitle: "Academic & Professional",
    },
    {
      icon: Code2,
      number: "15+",
      title: "Technologies",
      subtitle: "Hands-on Experience",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 pb-28">

      <div className="grid gap-8 md:grid-cols-3">

        {stats.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="
                group
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
                hover:shadow-[0_20px_50px_rgba(37,99,235,.18)]
              "
            >

              <Icon
                size={34}
                className="
                  mb-6
                  text-blue-400
                  transition-all
                  duration-300
                  group-hover:scale-110
                "
              />

              <h2 className="text-5xl font-black text-blue-500">
                {item.number}
              </h2>

              <h3 className="mt-5 text-xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-2 text-slate-400">
                {item.subtitle}
              </p>

            </div>

          );
        })}

      </div>

    </section>
  );
}

export default AboutStats;