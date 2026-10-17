
import { useState } from "react";
import {
  Hash,
  MemoryStick,
  Server,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import Header from "./Components/Header";
import RouterCard from "./Components/RouterCard";
import HashDemo from "./Components/HashDemo";
import MemoryDemo from "./Components/MemoryDemo";
import StaticDemo from "./Components/StaticDemo";

export default function App() {
  const [active, setActive] = useState("hash");

  const routers = {
    hash: {
      title: "HashRouter",
      subtitle: "URL-based navigation",
      description:
        "Uses the URL hash to navigate between pages.",
      icon: Hash,
      color: "bg-violet-100 text-violet-700",
      component: <HashDemo />,
      label: "Hash-based routing",
    },
    memory: {
      title: "MemoryRouter",
      subtitle: "In-memory navigation",
      description:
        "Stores the current route in memory, not the URL.",
      icon: MemoryStick,
      color: "bg-blue-100 text-blue-700",
      component: <MemoryDemo />,
      label: "Memory-based routing",
    },
    static: {
      title: "StaticRouter",
      subtitle: "Server-side rendering",
      description:
        "Uses a fixed location when rendering a route on a server.",
      icon: Server,
      color: "bg-emerald-100 text-emerald-700",
      component: <StaticDemo />,
      label: "Static server routing",
    },
  };

  const current = routers[active];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50 to-blue-50 px-4 py-7 sm:px-8 sm:py-10">
      <div className="mx-auto max-w-6xl">
        <Header />

        <section className="mt-10 grid items-center gap-8 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white px-3 py-2 text-xs font-bold text-violet-700">
              <Sparkles size={15} />
              LEARN BY EXPLORING
            </span>

            <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl">
              Understand
              <span className="block text-violet-600">
                React Routers.
              </span>
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-slate-600">
              Explore three routing approaches, test navigation,
              and understand when to use each one in a React project.
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-slate-700">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-100 text-violet-700">
                <ArrowRight size={17} />
              </span>
              Select a router card to begin.
            </div>
          </div>

          <div className="rounded-3xl border border-white bg-white/80 p-5 shadow-xl shadow-violet-100/70 sm:p-7">
            <p className="text-sm font-semibold text-slate-500">
              ROUTER OVERVIEW
            </p>
            <div className="mt-5 space-y-4">
              {[
                ["HashRouter", "URL contains #", "violet"],
                ["MemoryRouter", "URL remains unchanged", "blue"],
                ["StaticRouter", "Fixed server location", "emerald"],
              ].map(([name, detail, color]) => (
                <div
                  key={name}
                  className="flex items-center justify-between gap-3 rounded-xl bg-slate-50 p-4"
                >
                  <div>
                    <p className="font-bold text-slate-800">{name}</p>
                    <p className="mt-1 text-xs text-slate-500">
                      {detail}
                    </p>
                  </div>
                  <span
                    className={`h-3 w-3 shrink-0 rounded-full ${
                      color === "violet"
                        ? "bg-violet-500"
                        : color === "blue"
                        ? "bg-blue-500"
                        : "bg-emerald-500"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12">
          <div className="mb-5">
            <p className="text-sm font-bold uppercase tracking-widest text-violet-600">
              Interactive playground
            </p>
            <h2 className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl">
              Choose your router
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Each card opens its own demonstration below.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {Object.entries(routers).map(([key, router]) => (
              <RouterCard
                key={key}
                {...router}
                active={active === key}
                onClick={() => setActive(key)}
              />
            ))}
          </div>
        </section>

        <section className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-slate-100/80 p-4 sm:p-7">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-violet-600">
                Live demonstration
              </p>
              <h2 className="mt-2 text-2xl font-black text-slate-900">
                {current.title}
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                {current.label}
              </p>
            </div>
            <span className="rounded-full bg-white px-3 py-2 text-xs font-bold text-slate-600 ring-1 ring-slate-200">
              {active.toUpperCase()}
            </span>
          </div>

          <div className="mt-6">
            {current.component}
          </div>
        </section>

        <footer className="mt-8 pb-3 text-center text-sm text-slate-500">
          Built with React, React Router and Tailwind CSS
        </footer>
      </div>
    </main>
  );
}
