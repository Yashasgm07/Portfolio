function CertificationCard({
  title,
  issuer,
  duration,
  status,
  link,
}) {
  return (
    <div
      className="
      rounded-[28px]
      border
      border-white/10
      bg-slate-900/60
      p-8
      backdrop-blur-md
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-blue-500/40
      hover:shadow-[0_20px_50px_rgba(37,99,235,.18)]
      "
    >
      <div className="flex items-start justify-between gap-4">

        <div>

          <h3 className="text-xl font-bold text-white">
            {title}
          </h3>

          <p className="mt-2 text-blue-400">
            {issuer}
          </p>

        </div>

        <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-300">
          {status}
        </span>

      </div>

      <p className="mt-6 text-slate-400">
        {duration}
      </p>

      {link !== "#" && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block text-blue-400 hover:text-blue-300"
        >
          View Certificate →
        </a>
      )}

    </div>
  );
}

export default CertificationCard;