import {
  ScatterChart as RechartsScatter,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const withFQHC = [
  { x: 12.1, y: 22, z: 45000, zip: "30312" },
  { x: 14.3, y: 28, z: 62000, zip: "48201" },
  { x: 11.5, y: 18, z: 31000, zip: "10451" },
  { x: 13.8, y: 25, z: 55000, zip: "60621" },
  { x: 10.2, y: 15, z: 28000, zip: "85033" },
  { x: 15.1, y: 30, z: 71000, zip: "70112" },
];

const noFQHC = [
  { x: 22.1, y: 52, z: 38000, zip: "85035" },
  { x: 20.4, y: 48, z: 29000, zip: "38126" },
  { x: 19.8, y: 45, z: 33000, zip: "70802" },
  { x: 19.2, y: 44, z: 26000, zip: "25301" },
  { x: 18.7, y: 42, z: 41000, zip: "39203" },
  { x: 17.6, y: 39, z: 35000, zip: "36603" },
  { x: 17.0, y: 37, z: 22000, zip: "73501" },
  { x: 16.5, y: 35, z: 19000, zip: "72201" },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div className="bg-card border border-border rounded p-2 text-xs">
      <p className="text-foreground font-mono font-medium">ZIP {d.zip}</p>
      <p className="text-muted-foreground">Diabetes: {d.x}%</p>
      <p className="text-muted-foreground">Care Gap: {d.y}%</p>
      <p className="text-muted-foreground">Pop: {d.z.toLocaleString()}</p>
    </div>
  );
};

export function ScatterChart() {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <RechartsScatter margin={{ top: 10, right: 20, bottom: 10, left: 10 }}>
        <XAxis
          type="number"
          dataKey="x"
          name="Diabetes %"
          tick={{ fill: "#9CA3AF", fontSize: 11 }}
          axisLine={false}
          tickLine={false}
          label={{ value: "Diabetes %", position: "bottom", fill: "#9CA3AF", fontSize: 11 }}
        />
        <YAxis
          type="number"
          dataKey="y"
          name="Care Gap %"
          tick={{ fill: "#9CA3AF", fontSize: 11 }}
          axisLine={false}
          tickLine={false}
          label={{ value: "Care Gap %", angle: -90, position: "insideLeft", fill: "#9CA3AF", fontSize: 11 }}
        />
        <ZAxis type="number" dataKey="z" range={[80, 400]} />
        <Tooltip content={<CustomTooltip />} />
        <Scatter name="FQHC Present" data={withFQHC} fill="#3B82F6" fillOpacity={0.7} />
        <Scatter name="No FQHC" data={noFQHC} fill="#EF4444" fillOpacity={0.7} />
      </RechartsScatter>
    </ResponsiveContainer>
  );
}
