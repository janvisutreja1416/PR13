
import { MemoryRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { useState } from "react";

function MemoryContent() {
  const location = useLocation();
  const [visits, setVisits] = useState(0);

  return (
    <div className="mt-5">
      <div className="rounded-xl bg-slate-900 p-4 text-emerald-300">
        <p className="text-xs text-slate-400">Internal router location</p>
        <p className="mt-1 font-mono text-lg">{location.pathname}</p>
        <p className="mt-2 text-xs text-slate-300">
          Browser address: unchanged by MemoryRouter navigation
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <Link
          to="/"
          className="rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white"
        >
          Memory Home
        </Link>
        <Link
          to="/profile"
          className="rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white"
        >
          Profile
        </Link>
        <button
          onClick={() => setVisits((v) => v + 1)}
          className="rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-700 ring-1 ring-slate-200"
        >
          Click counter: {visits}
        </button>
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <div className="mt-4 rounded-xl bg-white p-5 ring-1 ring-slate-200">
              <h3 className="font-bold">Memory Home</h3>
              <p className="mt-2 text-sm text-slate-600">
                Navigation is stored in memory, not in the address bar.
              </p>
            </div>
          }
        />
        <Route
          path="/profile"
          element={
            <div className="mt-4 rounded-xl bg-white p-5 ring-1 ring-slate-200">
              <h3 className="font-bold">Profile Page</h3>
              <p className="mt-2 text-sm text-slate-600">
                This route is held in the MemoryRouter history.
              </p>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default function MemoryDemo() {
  return (
    <MemoryRouter initialEntries={["/"]}>
      <MemoryContent />
    </MemoryRouter>
  );
}
