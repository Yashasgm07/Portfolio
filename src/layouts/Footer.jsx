import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-800">

      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="text-center">

          <h2 className="text-3xl font-bold text-white">
            G M Yashas
          </h2>

          <p className="mt-3 text-slate-400">
            Software Engineer • AI & Full-Stack Developer
          </p>

          {/* Social */}

          <div className="mt-8 flex justify-center gap-8">

            <a
              href="https://github.com/Yashasgm07"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 transition hover:-translate-y-1 hover:text-blue-400"
            >
              <FaGithub size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/gm-yashas/"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 transition hover:-translate-y-1 hover:text-blue-400"
            >
              <FaLinkedin size={24} />
            </a>

            <a
              href="mailto:yashasgm07@gmail.com"
              className="text-slate-400 transition hover:-translate-y-1 hover:text-blue-400"
            >
              <FaEnvelope size={24} />
            </a>

          </div>

          <div className="mt-10 space-y-2 text-sm text-slate-500">

            <p>
              Designed & Developed by
              <span className="font-semibold text-slate-300">
                {" "}G M Yashas
              </span>
            </p>

            <p>
              Built with React • Tailwind CSS • Vite
            </p>

            <p className="pt-2">
              © 2026 G M Yashas. All Rights Reserved.
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;