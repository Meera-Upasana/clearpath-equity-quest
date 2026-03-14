const logs = [
  "[09:14:02] CDC PLACES API → 3,142 counties ingested. 36 health measures loaded.",
  "[09:14:18] Cross-referenced hospital footprint against ZIP boundaries.",
  "[09:15:01] 23 ZIP codes flagged: diabetes ≥ 15%, care gap ≥ 40%.",
  "[09:15:44] HRSA API → Querying FQHC presence in 23 target ZIPs...",
  "[09:16:02] USAspending.gov API → Scanning last 24mo federal grants by ZIP...",
  "[09:16:31] Competitive analysis complete. 8 ZIPs confirmed healthcare deserts with $0 federal allocation.",
];

export function ActivityLog() {
  return (
    <div className="bg-card border border-border rounded overflow-hidden">
      <div className="px-4 py-3 border-b border-border flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
        <span className="text-xs font-medium text-foreground">AI Agent Activity Log</span>
      </div>
      <div className="p-4 max-h-48 overflow-y-auto">
        <div className="font-mono text-xs leading-6 text-primary space-y-0.5">
          {logs.map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
