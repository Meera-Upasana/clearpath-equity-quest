import { useState, useMemo } from "react";
import { stateData, type MetricKey } from "@/data/stateHealthData";
import { statePaths } from "@/data/statePaths";

const colorScale = (value: number, min: number, max: number): string => {
  const t = Math.min(1, Math.max(0, (value - min) / (max - min)));
  if (t < 0.33) return `hsl(48, 96%, ${65 - t * 30}%)`;
  if (t < 0.66) return `hsl(${48 - (t - 0.33) * 120}, 90%, 55%)`;
  return `hsl(${8 - (t - 0.66) * 8}, 84%, ${55 - (t - 0.66) * 15}%)`;
};

const metricKeyMap: Record<string, MetricKey> = {
  "Diabetes %": "diabetes",
  "Obesity %": "obesity",
  "Smoking %": "smoking",
  "Hypertension %": "hypertension",
  "Mental Health %": "mentalHealth",
  "No Checkup %": "noCheckup",
};

interface Props {
  metric: string;
}

export function USMap({ metric }: Props) {
  const [tooltip, setTooltip] = useState<{ name: string; value: number; x: number; y: number } | null>(null);
  const key = metricKeyMap[metric] || "diabetes";

  const { min, max } = useMemo(() => {
    const values = Object.values(stateData).map((s) => s[key]);
    return { min: Math.min(...values), max: Math.max(...values) };
  }, [key]);

  return (
    <div className="relative">
      <svg viewBox="0 0 960 600" className="w-full h-auto">
        {Object.entries(statePaths).map(([abbr, path]) => {
          const state = stateData[abbr];
          if (!state) return <path key={abbr} d={path} fill="#1F2937" stroke="#0A0F1E" strokeWidth={0.5} />;
          const value = state[key];
          return (
            <path
              key={abbr}
              d={path}
              fill={colorScale(value, min, max)}
              stroke="#0A0F1E"
              strokeWidth={0.5}
              className="transition-colors duration-150 cursor-pointer"
              onMouseEnter={(e) => {
                const rect = e.currentTarget.ownerSVGElement?.getBoundingClientRect();
                if (rect) {
                  setTooltip({
                    name: state.name,
                    value,
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                  });
                }
              }}
              onMouseLeave={() => setTooltip(null)}
              onMouseMove={(e) => {
                const rect = e.currentTarget.ownerSVGElement?.getBoundingClientRect();
                if (rect && tooltip) {
                  setTooltip((prev) =>
                    prev ? { ...prev, x: e.clientX - rect.left, y: e.clientY - rect.top } : null
                  );
                }
              }}
            />
          );
        })}
      </svg>

      {tooltip && (
        <div
          className="absolute pointer-events-none bg-card border border-border rounded p-2 z-50"
          style={{ left: tooltip.x + 12, top: tooltip.y - 30 }}
        >
          <p className="text-xs font-medium text-foreground">{tooltip.name}</p>
          <p className="text-xs text-primary font-mono">{tooltip.value}%</p>
        </div>
      )}

      {/* Legend */}
      <div className="absolute bottom-2 left-2 flex items-center gap-1 text-[10px] text-muted-foreground">
        <span>{min.toFixed(1)}%</span>
        <div className="w-24 h-2 rounded-sm" style={{
          background: "linear-gradient(to right, hsl(48,96%,65%), hsl(28,90%,55%), hsl(0,84%,48%))"
        }} />
        <span>{max.toFixed(1)}%</span>
      </div>
    </div>
  );
}
