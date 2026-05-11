import { AlertTriangle, BarChart3 } from "lucide-react";
import {
	ResponsiveContainer,
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from "recharts";

const discriminationData = [
	{
		group: "Total",
		poblacionTotal: 23.7,
		poblacionConDiscapacidad: 33.8,
	},
	{
		group: "Mujeres",
		poblacionTotal: 22.8,
		poblacionConDiscapacidad: 33.4,
	},
	{
		group: "Hombres",
		poblacionTotal: 24.5,
		poblacionConDiscapacidad: 34.4,
	},
];

const formatPercentLabel = (value: unknown) => {
	if (typeof value !== "number") return "";

	return `${value.toFixed(1)}%`;
};

const formatTooltipPercent = (value: unknown, name: unknown) => {
	const numericValue = typeof value === "number" ? value.toFixed(1) : value;

	const label =
		name === "poblacionTotal"
			? "Población total discriminada"
			: "Población con discapacidad discriminada";

	return [`${numericValue}%`, label];
};

const formatLegendLabel = (value: string) => {
	if (value === "poblacionTotal") {
		return "Población total discriminada";
	}

	if (value === "poblacionConDiscapacidad") {
		return "Población con discapacidad discriminada";
	}

	return value;
};

export default function ImpactCharts() {
	return (
		<div className="mt-14">
			<div className="text-center mb-10">
				<span className="inline-flex items-center gap-2 rounded-full bg-slate-100 text-slate-700 px-4 py-2 text-sm font-semibold mb-5">
					<BarChart3 size={18} />
					Visualización de datos
				</span>

				<h3 className="text-2xl md:text-4xl font-extrabold text-slate-900">
					Discriminación hacia personas con discapacidad
				</h3>

				<p className="max-w-3xl mx-auto mt-4 text-base md:text-lg leading-relaxed text-slate-600">
					Esta gráfica compara el porcentaje de personas discriminadas entre la
					población total y la población con discapacidad.
				</p>
			</div>

			<div className="rounded-[2rem] border border-emerald-100 bg-gradient-to-br from-white to-emerald-50/70 p-6 md:p-8 shadow-xl">
				<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
					<div className="flex items-center gap-3">
						<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
							<AlertTriangle size={24} />
						</div>

						<div>
							<h4 className="text-xl md:text-2xl font-extrabold text-slate-900">
								Porcentaje de personas discriminadas
							</h4>

							<p className="text-sm md:text-base text-slate-500">
								Julio 2021 a septiembre 2022
							</p>
						</div>
					</div>

					<span className="w-fit rounded-full bg-white px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm border border-emerald-100">
						ENADIS 2022
					</span>
				</div>

				<div className="h-[380px]">
					<ResponsiveContainer width="100%" height="100%">
						<BarChart
							data={discriminationData}
							margin={{ top: 20, right: 20, left: 0, bottom: 10 }}
							barGap={8}
							barCategoryGap="28%"
						>
							<CartesianGrid strokeDasharray="3 3" stroke="#dbeafe" />

							<XAxis
								dataKey="group"
								tick={{ fill: "#475569", fontSize: 13, fontWeight: 600 }}
								axisLine={{ stroke: "#cbd5e1" }}
								tickLine={false}
							/>

							<YAxis
								domain={[0, 40]}
								tick={{ fill: "#64748b", fontSize: 12 }}
								axisLine={{ stroke: "#cbd5e1" }}
								tickLine={false}
								tickFormatter={(value) => `${value}%`}
							/>

							<Tooltip
								cursor={{ fill: "#f8fafc" }}
								formatter={formatTooltipPercent}
								contentStyle={{
									borderRadius: "16px",
									border: "1px solid #dbeafe",
									boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)",
								}}
							/>

							<Legend
								verticalAlign="bottom"
								height={40}
								formatter={formatLegendLabel}
							/>

							<Bar
								dataKey="poblacionTotal"
								fill="#bbd7a6"
								radius={[10, 10, 0, 0]}
								label={{
									position: "top",
									formatter: formatPercentLabel,
									fill: "#334155",
									fontSize: 13,
									fontWeight: 700,
								}}
							/>

							<Bar
								dataKey="poblacionConDiscapacidad"
								fill="#0f4c5c"
								radius={[10, 10, 0, 0]}
								label={{
									position: "top",
									formatter: formatPercentLabel,
									fill: "#334155",
									fontSize: 13,
									fontWeight: 700,
								}}
							/>
						</BarChart>
					</ResponsiveContainer>
				</div>

				<p className="mt-5 text-sm leading-relaxed text-slate-500 text-center">
					La gráfica muestra que la población con discapacidad reportó mayores
					niveles de discriminación que la población total en los tres grupos
					analizados: total, mujeres y hombres.
				</p>
			</div>
		</div>
	);
}