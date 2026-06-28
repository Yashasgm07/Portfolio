import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      <div className="rounded-[32px] border border-slate-800 bg-slate-900/60 p-12 backdrop-blur-md">

        {/* Heading */}

        <div className="text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-blue-400">
            Contact
          </p>

          <h2 className="mt-3 text-5xl md:text-6xl font-bold text-white">
            Let's Build Something
            <span className="text-blue-500"> Amazing</span>
          </h2>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"></div>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            I'm always interested in discussing software engineering,
            AI, full-stack development, internships and exciting
            opportunities. Feel free to reach out!
          </p>

        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {/* Email */}

          <a
            href="mailto:yashasgm07@gmail.com"
            className="
              group
              rounded-2xl
              border
              border-slate-800
              bg-slate-950/60
              p-8
              text-center
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-blue-500
              hover:bg-slate-900
              hover:shadow-[0_20px_50px_rgba(37,99,235,.18)]
            "
          >
            <FaEnvelope className="mx-auto text-4xl text-blue-400 transition duration-300 group-hover:scale-110" />

            <h3 className="mt-5 text-2xl font-bold text-white">
              Email
            </h3>

            <p className="mt-3 break-all text-slate-400">
              yashasgm07@gmail.com
            </p>

            <p className="mt-6 font-medium text-blue-400 transition group-hover:translate-x-1">
              Send Email →
            </p>

          </a>

          {/* GitHub */}

          <a
            href="https://github.com/Yashasgm07"
            target="_blank"
            rel="noreferrer"
            className="
              group
              rounded-2xl
              border
              border-slate-800
              bg-slate-950/60
              p-8
              text-center
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-blue-500
              hover:bg-slate-900
              hover:shadow-[0_20px_50px_rgba(37,99,235,.18)]
            "
          >
            <FaGithub className="mx-auto text-4xl text-blue-400 transition duration-300 group-hover:scale-110" />

            <h3 className="mt-5 text-2xl font-bold text-white">
              GitHub
            </h3>

            <p className="mt-3 text-slate-400">
              github.com/Yashasgm07
            </p>

            <p className="mt-6 font-medium text-blue-400 transition group-hover:translate-x-1">
              View Profile →
            </p>

          </a>

          {/* LinkedIn */}

          <a
            href="https://www.linkedin.com/in/gm-yashas/"
            target="_blank"
            rel="noreferrer"
            className="
              group
              rounded-2xl
              border
              border-slate-800
              bg-slate-950/60
              p-8
              text-center
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-blue-500
              hover:bg-slate-900
              hover:shadow-[0_20px_50px_rgba(37,99,235,.18)]
            "
          >
            <FaLinkedin className="mx-auto text-4xl text-blue-400 transition duration-300 group-hover:scale-110" />

            <h3 className="mt-5 text-2xl font-bold text-white">
              LinkedIn
            </h3>

            <p className="mt-3 text-slate-400">
              linkedin.com/in/gm-yashas
            </p>

            <p className="mt-6 font-medium text-blue-400 transition group-hover:translate-x-1">
              Connect →
            </p>

          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;