
import { ArrowUpRight } from "lucide-react";

export default function RouterCard({
  title,
  subtitle,
  description,
  icon: Icon,
  color,
  active,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full rounded-2xl border p-4 text-left transition hover:-translate-y-1 hover:shadow-lg ${
        active
          ? "border-violet-400 bg-violet-50 shadow-md"
          : "border-slate-200 bg-white hover:border-violet-200"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className={`rounded-xl p-3 ${color}`}>
          <Icon size={23} />
        </div>
        <ArrowUpRight size={18} className="text-slate-400" />
      </div>

      <h3 className="mt-4 font-bold text-slate-900">{title}</h3>
      <p className="mt-1 text-xs font-semibold text-violet-600">
        {subtitle}
      </p>
      <p className="mt-3 text-sm leading-6 text-slate-600">
        {description}
      </p>

      <p className="mt-4 text-xs font-bold text-slate-700">
        {active ? "Currently selected ✓" : "Explore router →"}
      </p>
    </button>
  );
}
