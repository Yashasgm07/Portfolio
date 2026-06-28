function HeroButtons() {
  return (
    <div className="mt-12 flex justify-center">

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="
          group
          inline-flex
          items-center
          gap-3
          rounded-xl
          bg-blue-600
          px-8
          py-4
          font-semibold
          text-white
          transition-all
          duration-300
          hover:-translate-y-1
          hover:bg-blue-500
          hover:shadow-[0_20px_50px_rgba(37,99,235,.35)]
          active:scale-95
        "
      >
        <span>Resume</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>

      </a>

    </div>
  );
}

export default HeroButtons;