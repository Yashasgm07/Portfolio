function EducationCard({
  degree,
  institute,
  university,
  duration,
  cgpa,
  current,
}) {
  return (
    <div className="relative pl-12">

      {/* Timeline */}

      <div className="absolute left-4 top-0 h-full w-[2px] bg-slate-700"></div>

      {/* Timeline Dot */}

      <div className="absolute left-1 top-5 flex h-6 w-6 items-center justify-center rounded-full border-4 border-slate-950 bg-blue-500">
      </div>

      {/* Card */}

      <div
        className="
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
        hover:shadow-[0_0_35px_rgba(37,99,235,0.2)]
        "
      >

        {/* Top */}

        <div className="flex flex-wrap items-start justify-between gap-6">

          <div>

            <h3 className="text-3xl font-bold text-white">
              {degree}
            </h3>

            <p className="mt-3 text-lg font-medium text-blue-400">
              {institute}
            </p>

            <p className="mt-1 text-slate-400">
              {university}
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
                py-1.5
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

        {/* Bottom */}

        <div className="mt-8 flex flex-wrap gap-4">

          <div
            className="
            rounded-xl
            border
            border-slate-700
            bg-slate-800/40
            px-5
            py-3
            "
          >
            <p className="text-xs uppercase tracking-widest text-slate-400">
              CGPA
            </p>

            <p className="mt-1 text-lg font-bold text-white">
               {cgpa}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default EducationCard;