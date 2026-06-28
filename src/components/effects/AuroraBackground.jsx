function AuroraBackground() {
  return (
    <>
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[140px]" />

      <div className="pointer-events-none absolute left-0 top-96 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute right-0 top-72 h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-[120px]" />
    </>
  );
}

export default AuroraBackground;