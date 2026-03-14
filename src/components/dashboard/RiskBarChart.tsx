import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  { zip: "85035", diabetes: 22.1, uninsured: 18.5, careGap: 52.0, score: 92.6, tier: "critical" },
  { zip: "38126", diabetes: 20.4, uninsured: 16.2, careGap: 48.0, score: 84.6, tier: "critical" },
  { zip: "70802", diabetes: 19.8, uninsured: 15.1, careGap: 45.0, score: 79.9, tier: "critical" },
  { zip: "25301", diabetes: 19.2, uninsured: 14.8, careGap: 44.0, score: 78.0, tier: "critical" },
  { zip: "39203", diabetes: 18.7, uninsured: 13.9, careGap: 42.0, score: 74.6, tier: "high" },
  { zip: "71201", diabetes: 18.1, uninsured: 14.2, careGap: 40.0, score: 72.3, tier: "high" },
  { zip: "36603", diabetes: 17.6, uninsured: 13.5, careGap: 39.0, score: 70.1, tier: "high" },
  { zip: "73501", diabetes: 17.0, uninsured: 12.8, careGap: 37.0, score: 66.8, tier: "high" },
  { zip: "72201", diabetes: 16.5, uninsured: 12.1, careGap: 35.0, score: 63.6, tier: "moderate" },
  { zip: "40202", diabetes: 16.0, uninsured: 11.5, careGap: 33.0, score: 60.5, tier: "moderate" },
];

const tierColors: Record<string, string> = {
  critical: "#EF4444",
  high: "#F59E0B",
  moderate: "#10B981",
};

export function RiskBarChart() {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <BarChart data={data} layout="vertical" margin={{ left: 10, right: 20, top: 5, bottom: 5 }}>
        <XAxis type="number" tick={{ fill: "#9CA3AF", fontSize: 11 }} axisLine={false} tickLine={false} />
        <YAxis
          type="category"
          dataKey="zip"
          tick={{ fill: "#9CA3AF", fontSize: 11, fontFamily: "IBM Plex Mono" }}
          axisLine={false}
          tickLine={false}
          width={55}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "#111827",
            border: "1px solid #1F2937",
            borderRadius: 4,
            fontSize: 12,
            fontFamily: "IBM Plex Sans",
          }}
          labelStyle={{ color: "#F9FAFB" }}
          itemStyle={{ color: "#9CA3AF" }}
          formatter={(value: number, name: string) => [`${value}%`, name]}
        />
        <Bar dataKey="diabetes" stackId="a" name="Diabetes %" radius={0}>
          {data.map((entry) => (
            <Cell key={entry.zip} fill={tierColors[entry.tier]} fillOpacity={0.9} />
          ))}
        </Bar>
        <Bar dataKey="uninsured" stackId="a" name="Uninsured %" fill="#6366F1" fillOpacity={0.6} radius={0} />
        <Bar dataKey="careGap" stackId="a" name="Care Gap %" fill="#00D4B4" fillOpacity={0.4} radius={[0, 4, 4, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
