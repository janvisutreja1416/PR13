
import { HashRouter, Routes, Route, NavLink } from "react-router-dom";
import { Home, Info } from "lucide-react";

function Page({ title, description }) {
  return (
    <div className="mt-5 rounded-xl bg-white p-5 ring-1 ring-slate-200">
      <h3 className="text-lg font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
    </div>
  );
}

export default function HashDemo() {
  return (
    <HashRouter>
      <section>
        <div className="flex flex-wrap gap-3">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold ${
                isActive
                  ? "bg-violet-600 text-white"
                  : "bg-white text-slate-700 ring-1 ring-slate-200"
              }`
            }
          >
            <Home size={17} /> Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold ${
                isActive
                  ? "bg-violet-600 text-white"
                  : "bg-white text-slate-700 ring-1 ring-slate-200"
              }`
            }
          >
            <Info size={17} /> About
          </NavLink>
        </div>

        <p className="mt-4 break-all rounded-lg bg-slate-900 p-3 text-sm text-emerald-300">
          Current URL: {window.location.href}
        </p>

        <Routes>
          <Route
            path="/"
            element={
              <Page
                title="HashRouter Home"
                description="Welcome! Click About to change the route and URL hash."
              />
            }
          />
          <Route
            path="/about"
            element={
              <Page
                title="About HashRouter"
                description="Notice the #/about part of the browser URL."
              />
            }
          />
        </Routes>
      </section>
    </HashRouter>
  );
}
