import { ChevronDown } from "lucide-react";

function ScrollIndicator() {
  return (
    <div className="mt-16 flex flex-col items-center text-slate-500 animate-bounce">
      <span className="mb-2 text-sm tracking-widest uppercase">
        Scroll
      </span>

      <ChevronDown size={24} />
    </div>
  );
}

export default ScrollIndicator;