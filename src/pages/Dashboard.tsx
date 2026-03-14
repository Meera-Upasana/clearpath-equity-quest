import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, TrendingUp, DollarSign, Target } from "lucide-react";
import { RiskBarChart } from "@/components/dashboard/RiskBarChart";
import { ScatterChart } from "@/components/dashboard/ScatterPlot";
import { ActivityLog } from "@/components/dashboard/ActivityLog";

const kpis = [
  { label: "High-Risk ZIP Codes Identified", value: "23", icon: AlertTriangle, accent: "text-destructive" },
  { label: "Avg Diabetes Rate in Target Zones", value: "17.3%", icon: Target, accent: "text-warning" },
  { label: "Federal Funding Gaps Found", value: "8 ZIPs with $0 awards", icon: DollarSign, accent: "text-primary" },
  { label: "Projected 5-yr ROI", value: "4.2×", icon: TrendingUp, accent: "text-success" },
];

export default function Dashboard() {
  return (
    <div className="p-4 md:p-6 space-y-4">
      <h1 className="text-lg font-semibold text-foreground">Dashboard Overview</h1>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {kpis.map((k) => (
          <Card key={k.label} className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between pb-2 pt-4 px-4">
              <CardTitle className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                {k.label}
              </CardTitle>
              <k.icon className={`h-4 w-4 ${k.accent}`} />
            </CardHeader>
            <CardContent className="px-4 pb-4">
              <div className="text-2xl font-bold text-foreground">{k.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <Card className="bg-card border-border">
          <CardHeader className="pb-2 pt-4 px-4">
            <CardTitle className="text-sm font-medium text-foreground">
              Top 10 ZIP Codes by Composite Risk Score
            </CardTitle>
          </CardHeader>
          <CardContent className="px-2 pb-4">
            <RiskBarChart />
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardHeader className="pb-2 pt-4 px-4">
            <CardTitle className="text-sm font-medium text-foreground">
              Care Access Gap vs Diabetes Prevalence
            </CardTitle>
          </CardHeader>
          <CardContent className="px-2 pb-4">
            <ScatterChart />
          </CardContent>
        </Card>
      </div>

      {/* Activity Log */}
      <ActivityLog />
    </div>
  );
}
