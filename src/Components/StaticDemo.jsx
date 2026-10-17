
import { Server, FileCode2, CheckCircle2 } from "lucide-react";

export default function StaticDemo() {
  return (
    <div className="mt-5 space-y-4">
      <div className="rounded-xl bg-emerald-50 p-5 ring-1 ring-emerald-200">
        <div className="flex items-center gap-2 font-bold text-emerald-900">
          <Server size={21} />
          Static route demonstration
        </div>
        <p className="mt-3 text-sm leading-6 text-emerald-900">
          A server renders the page for a known location. The route is
          supplied to StaticRouter, and the rendered HTML is returned
          to the client.
        </p>
      </div>

      <div className="rounded-xl bg-slate-900 p-4 text-sm">
        <p className="text-slate-400">Example server location</p>
        <p className="mt-2 font-mono text-emerald-300">
          /about
        </p>
        <div className="mt-4 flex items-center gap-2 text-emerald-300">
          <CheckCircle2 size={18} />
          <span>Fixed route selected for rendering</span>
        </div>
      </div>

      <div className="rounded-xl bg-white p-5 ring-1 ring-slate-200">
        <h3 className="font-bold text-slate-900">
          Where is it used?
        </h3>
        <ul className="mt-3 space-y-2 text-sm text-slate-600">
          <li>• Server-side rendering (SSR)</li>
          <li>• Generating HTML for a requested URL</li>
          <li>• Server-rendered pages for search engines</li>
        </ul>
      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
        <div className="mb-2 flex items-center gap-2 font-semibold text-slate-800">
          <FileCode2 size={18} /> Server-side example
        </div>
        <pre className="overflow-x-auto whitespace-pre-wrap text-xs leading-6 text-slate-700">
{`import { StaticRouter } from "react-router-dom/server";
import { renderToString } from "react-dom/server";

const html = renderToString(
  <StaticRouter location="/about">
    <App />
  </StaticRouter>
);`}
        </pre>
        <p className="mt-3 text-xs leading-5 text-slate-500">
          This snippet belongs in a server-rendering environment, not
          in the browser's main.jsx. A complete SSR setup needs a server
          entry point and server-compatible build configuration.
        </p>
      </div>
    </div>
  );
}
