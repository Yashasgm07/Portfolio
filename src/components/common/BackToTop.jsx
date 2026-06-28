import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggle = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", toggle);

    return () => window.removeEventListener("scroll", toggle);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollTop}
      className={`
        fixed
        bottom-8
        right-8
        z-50
        rounded-full
        bg-blue-600
        p-4
        shadow-lg
        transition-all
        duration-300
        hover:scale-110
        hover:bg-blue-500

        ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5 pointer-events-none"
        }
      `}
    >
      <ChevronUp size={22} />
    </button>
  );
}

export default BackToTop;