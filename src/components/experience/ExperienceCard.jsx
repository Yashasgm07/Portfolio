import { Sparkles } from "lucide-react";

function ExperienceCard({
  company,
  role,
  duration,
  description,
  highlights,
  tech,
  current,
}) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-slate-800
        bg-slate-900/60
        backdrop-blur-md
        p-8
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-blue-500/40
        hover:shadow-[0_20px_50px_rgba(37,99,235,.18)]
      "
    >
      {/* Header */}

      <div className="flex flex-wrap items-start justify-between gap-6">

        <div>

          <h3 className="text-3xl font-bold text-white">
            {company}
          </h3>

          <p className="mt-2 text-lg font-semibold text-blue-400">
            {role}
          </p>

        </div>

        <div className="text-right">

          <p className="text-slate-400">
            {duration}
          </p>

          {current && (
            <span
              className="
                mt-3
                inline-flex
                rounded-full
                bg-blue-500/10
                px-4
                py-1
                text-sm
                font-medium
                text-blue-400
              "
            >
              Current
            </span>
          )}

        </div>

      </div>

      {/* Description */}

      <p className="mt-8 leading-8 text-slate-400">
        {description}
      </p>

      {/* Highlights */}

      <div className="mt-8 space-y-4">

        {highlights.map((item) => (

          <div
            key={item}
            className="flex items-start gap-3"
          >
            <Sparkles
              size={18}
              className="mt-1 shrink-0 text-blue-400"
            />

            <p className="leading-7 text-slate-300">
              {item}
            </p>

          </div>

        ))}

      </div>

      {/* Tech Stack */}

      <div className="mt-8 flex flex-wrap gap-3">

        {tech.map((item) => (

          <span
            key={item}
            className="
              rounded-full
              border
              border-blue-500/20
              bg-blue-500/10
              px-4
              py-2
              text-sm
              font-medium
              text-blue-300
              transition-all
              duration-300
              hover:bg-blue-500/20
            "
          >
            {item}
          </span>

        ))}

      </div>

    </div>
  );
}

export default ExperienceCard;