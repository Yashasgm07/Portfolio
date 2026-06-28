import HeroButtons from "./HeroButtons";
import SocialLinks from "./SocialLinks";
import ScrollIndicator from "./ScrollIndicator";
import Reveal from "../common/Reveal";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-28"
    >
      <Reveal>

        <div className="max-w-5xl text-center">

          {/* Status Badge */}

          <div
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-blue-500/30
              bg-blue-500/10
              px-6
              py-2.5
              text-sm
              font-medium
              text-blue-300
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-blue-400
              hover:bg-blue-500/20
            "
          >
            🎓 M.E. Computer Science Student • Incoming Samsung Semiconductor Intern
          </div>

          {/* Heading */}

          <h1 className="mt-10 text-5xl font-black leading-tight tracking-tight text-white md:text-7xl lg:text-8xl">

            Hello, I'm

            <br />

            <span
              className="
                inline-block
                bg-gradient-to-r
                from-blue-400
                via-cyan-400
                to-blue-600
                bg-clip-text
                text-transparent
                transition-all
                duration-500
                hover:scale-105
                hover:drop-shadow-[0_0_35px_rgba(59,130,246,0.5)]
              "
            >
              G M Yashas
            </span>

          </h1>

          {/* Subtitle */}

          <p className="mt-8 text-xl font-semibold text-slate-200 md:text-3xl">

            Software Engineer

            <span className="mx-3 text-blue-500">•</span>

            AI Engineer

            <span className="mx-3 text-blue-500">•</span>

            Full-Stack Developer

          </p>

          {/* Description */}

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-400 md:text-xl">

            Building intelligent AI applications, scalable full-stack software,
            and modern digital experiences with a focus on clean architecture,
            performance, and real-world impact.

          </p>

          {/* Resume */}

          <HeroButtons />

          {/* Social */}

          <SocialLinks />

          {/* Scroll */}

          <ScrollIndicator />

        </div>

      </Reveal>
    </section>
  );
}

export default Hero;