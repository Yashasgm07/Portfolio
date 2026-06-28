function SkillCard({ icon: Icon, name }) {
  return (
    <div
      className="
        flex
        items-center
        gap-3
        rounded-xl
        border
        border-slate-700
        bg-slate-800/60
        px-5
        py-3
        text-slate-200
        font-medium
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-500
        hover:bg-blue-500/10
        hover:text-blue-300
        hover:shadow-[0_0_18px_rgba(59,130,246,.25)]
      "
    >
      <Icon className="text-xl text-blue-400" />

      <span>{name}</span>
    </div>
  );
}

export default SkillCard;