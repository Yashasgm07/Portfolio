import Reveal from "../common/Reveal";

function About() {
  return (
    <Reveal delay={0.1}>
      <section
        id="about"
        className="relative mx-auto max-w-7xl px-6 py-32"
      >
        {/* Heading */}
        <div className="text-center">

          <p className="text-blue-400 font-semibold tracking-[0.35em] uppercase">
            About Me
          </p>

          <h2 className="mt-4 text-5xl font-black leading-tight text-white md:text-6xl">
            Passion for
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}AI & Software Engineering
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Passionate about building intelligent software solutions that combine
            artificial intelligence, modern web technologies, and clean engineering
            principles to solve real-world problems.
          </p>

        </div>

        {/* Content */}

        <div className="mt-24 grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <div className="flex justify-center">

            <div className="relative">

              {/* Outer Glow */}

              <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-[120px]"></div>

              {/* Animated Ring */}

              <div className="absolute -inset-3 rounded-full border border-blue-500/20"></div>

              {/* Image */}

              <div
                className="
                relative
                h-80
                w-80
                overflow-hidden
                rounded-full
                border
                border-blue-500/30
                bg-slate-900
                transition-all
                duration-500
                hover:scale-105
                hover:border-blue-400
                hover:shadow-[0_0_60px_rgba(59,130,246,.35)]
                "
              >
                <img
                  src="/profile.png"
                  alt="Yashas"
                  className="h-full w-full object-cover"
                />
              </div>

            </div>

          </div>

          {/* RIGHT */}

          {/* RIGHT */}

          <div>

            <h3 className="text-4xl md:text-5xl font-bold text-white">
              Hi, I'm
              <span className="text-blue-500"> G M Yashas</span>
            </h3>

            <p className="mt-8 text-lg leading-9 text-slate-400">
              I'm currently pursuing my <strong className="text-slate-200">Master's in Computer Science</strong>,
              where I'm strengthening my expertise in Artificial Intelligence,
              Full-Stack Development, and modern software engineering while
              building practical solutions to real-world problems.
            </p>

            <p className="mt-6 text-lg leading-9 text-slate-400">
              With professional experience in developing production-ready web
              applications and AI-powered systems, I enjoy transforming ideas
              into scalable, reliable, and user-focused software. I believe in
              writing clean, maintainable code and continuously learning new
              technologies to build impactful digital experiences.
            </p>

            {/* Info Cards */}

            <div className="mt-12 grid grid-cols-2 gap-5">

              {[
                {
                  title: "Education",
                  value: "M.E. Computer Science",
                },
                {
                  title: "Current Role",
                  value: "Samsung Semiconductor",
                },
                {
                  title: "Specialization",
                  value: "AI & Full-Stack",
                },
                {
                  title: "Location",
                  value: "Karnataka, India",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="
          rounded-2xl
          border
          border-slate-800
          bg-slate-900/60
          p-5
          backdrop-blur
          transition-all
          duration-300
          hover:-translate-y-2
          hover:border-blue-500/40
          hover:shadow-[0_10px_40px_rgba(37,99,235,.15)]
        "
                >
                  <p className="text-sm uppercase tracking-wider text-blue-400">
                    {item.title}
                  </p>

                  <p className="mt-3 text-lg font-semibold text-white">
                    {item.value}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>
      </section>
    </Reveal>
  );
}

export default About;