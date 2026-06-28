function ProjectCard({
  image,
  title,
  description,
  tech,
  github,
  demo,
  featured,
}) {
  return (
    <div
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-slate-800
        bg-slate-900/60
        backdrop-blur-md
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-blue-500/40
        hover:shadow-[0_20px_60px_rgba(37,99,235,.18)]
      "
    >
      {/* Image */}

      <div className="relative h-64 overflow-hidden">

        <img
          src={image}
          alt={title}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>

        {featured && (
          <div
            className="
              absolute
              left-5
              top-5
              rounded-full
              bg-gradient-to-r
              from-blue-500
              to-cyan-500
              px-4
              py-2
              text-xs
              font-semibold
              text-white
            "
          >
            ⭐ Featured
          </div>
        )}

      </div>

      {/* Content */}

      <div className="p-8">

        <h3 className="text-3xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-5 leading-8 text-slate-400">
          {description}
        </p>

        {/* Tech */}

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
              "
            >
              {item}
            </span>
          ))}

        </div>

        {/* Buttons */}

        <div className="mt-10 flex flex-wrap gap-4">

          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="
              rounded-xl
              bg-blue-600
              px-6
              py-3
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-blue-500
              hover:-translate-y-1
            "
          >
            View Code →
          </a>

          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="
                rounded-xl
                border
                border-slate-700
                px-6
                py-3
                font-semibold
                text-white
                transition-all
                duration-300
                hover:border-blue-500
                hover:bg-blue-500/10
              "
            >
              Live Demo ↗
            </a>
          )}

        </div>

      </div>
    </div>
  );
}

export default ProjectCard;