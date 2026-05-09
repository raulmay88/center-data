import { BarChart3, PieChart as PieChartIcon } from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const nationalData = [
  { name: "México", value: 8.8 },
  { name: "Q. Roo", value: 0.241795 },
];

const quintanaRooBreakdown = [
  { name: "Discapacidad", value: 67005 },
  { name: "Limitación", value: 164117 },
  { name: "Condición mental", value: 20352 },
];

const COLORS = ["#2563eb", "#059669", "#7c3aed"];

export default function ImpactCharts() {
  return (
    <div className="mt-14">
      <div className="text-center mb-10">
        <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 text-slate-700 px-4 py-2 text-sm font-semibold mb-5">
          <BarChart3 size={18} />
          Visualización de datos
        </span>

        <h3 className="text-2xl md:text-4xl font-extrabold text-slate-900">
          Gráficas sobre inclusión y discapacidad
        </h3>

        <p className="max-w-3xl mx-auto mt-4 text-base md:text-lg leading-relaxed text-slate-600">
          Estas gráficas ayudan a visualizar mejor la magnitud del tema tanto a
          nivel nacional como en Quintana Roo.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* BAR CHART */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
              <BarChart3 size={24} />
            </div>

            <div>
              <h4 className="text-xl font-bold text-slate-900">
                Comparación de población
              </h4>
              <p className="text-sm text-slate-500">
                Millones de personas con discapacidad
              </p>
            </div>
          </div>

          <div className="h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={nationalData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis
                  dataKey="name"
                  tick={{ fill: "#64748b", fontSize: 12 }}
                  axisLine={{ stroke: "#cbd5e1" }}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: "#64748b", fontSize: 12 }}
                  axisLine={{ stroke: "#cbd5e1" }}
                  tickLine={false}
                />
                <Tooltip
                  cursor={{ fill: "#f1f5f9" }}
                  contentStyle={{
                    borderRadius: "16px",
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)",
                  }}
                />
                <Bar dataKey="value" radius={[10, 10, 0, 0]}>
                  <Cell fill="#2563eb" />
                  <Cell fill="#059669" />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-slate-500">
            Se muestra una comparación entre la población con discapacidad en
            México y el total registrado en Quintana Roo.
          </p>
        </div>

        {/* PIE CHART */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
              <PieChartIcon size={24} />
            </div>

            <div>
              <h4 className="text-xl font-bold text-slate-900">
                Distribución en Quintana Roo
              </h4>
              <p className="text-sm text-slate-500">Censo 2020</p>
            </div>
          </div>

          <div className="h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={quintanaRooBreakdown}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  innerRadius={58}
                  paddingAngle={3}
                  label
                >
                  {quintanaRooBreakdown.map((_, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>

                <Tooltip
                  contentStyle={{
                    borderRadius: "16px",
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-4 grid gap-2 sm:grid-cols-3 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-blue-600" />
              Discapacidad
            </div>

            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-emerald-600" />
              Limitación
            </div>

            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-violet-700" />
              Condición mental
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}