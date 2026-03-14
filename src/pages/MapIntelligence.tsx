import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { USMap } from "@/components/map/USMap";
import { StateLeaderboard } from "@/components/map/StateLeaderboard";
import { IntelCards } from "@/components/map/IntelCards";

const metrics = ["Diabetes %", "Obesity %", "Smoking %", "Hypertension %", "Mental Health %", "No Checkup %"] as const;
type Metric = typeof metrics[number];

export default function MapIntelligence() {
  const [activeMetric, setActiveMetric] = useState<Metric>("Diabetes %");

  return (
    <div className="p-4 md:p-6 space-y-4">
      <h1 className="text-lg font-semibold text-foreground">Map Intelligence</h1>

      {/* Metric tabs */}
      <div className="flex flex-wrap gap-1">
        {metrics.map((m) => (
          <button
            key={m}
            onClick={() => setActiveMetric(m)}
            className={`px-3 py-1.5 text-xs font-medium rounded transition-colors duration-150 ${
              activeMetric === m
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            {m}
          </button>
        ))}
      </div>

      {/* Map + Leaderboard */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        <div className="lg:col-span-2">
          <Card className="bg-card border-border overflow-hidden">
            <CardContent className="p-0">
              <USMap metric={activeMetric} />
            </CardContent>
          </Card>
        </div>
        <div>
          <StateLeaderboard metric={activeMetric} />
        </div>
      </div>

      {/* Intel Cards */}
      <IntelCards />
    </div>
  );
}
