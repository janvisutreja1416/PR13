
import { Compass, Code2 } from "lucide-react";

export default function Header() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="rounded-2xl bg-violet-600 p-3 text-white shadow-lg shadow-violet-200">
          <Compass size={25} />
        </div>
        <div>
          <h1 className="text-xl font-black tracking-tight text-slate-900 sm:text-2xl">
            RouteLab
          </h1>
          <p className="text-xs text-slate-500">
            React Router Playground
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600">
        <Code2 size={16} className="text-violet-600" />
        React + Tailwind CSS
      </div>
    </header>
  );
}
