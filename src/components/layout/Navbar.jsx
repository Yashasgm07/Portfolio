import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "certifications", label: "Certs" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);

    const sections = [
      "home",
      "about",
      "skills",
      "projects",
      "experience",
      "education",
      "certifications",
      "contact",
    ];

    const scrollMiddle = window.scrollY + window.innerHeight / 2;

    for (const id of sections) {
      const section = document.getElementById(id);

      if (!section) continue;

      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;

      if (scrollMiddle >= top && scrollMiddle < bottom) {
        setActive(id);
        break;
      }
    }
  };

  handleScroll();

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className="fixed top-5 left-0 right-0 z-50 flex justify-center">
      <nav
        className={`
          flex items-center gap-8 rounded-full
          border border-white/10
          px-8 py-4
          transition-all duration-500
          ${
            scrolled
              ? "bg-slate-900/90 backdrop-blur-xl shadow-2xl"
              : "bg-slate-900/50 backdrop-blur-lg"
          }
        `}
      >
        <h1 className="text-xl font-black text-white">
          YG<span className="text-blue-500">.</span>
        </h1>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative cursor-pointer"
            >
              <span
                className={`transition-colors duration-300 ${
                  active === item.id
                    ? "text-blue-400"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {item.label}
              </span>

              <span
                className={`absolute left-0 -bottom-2 h-[2px] rounded-full bg-blue-500 transition-all duration-300 ${
                  active === item.id ? "w-full" : "w-0"
                }`}
              />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;