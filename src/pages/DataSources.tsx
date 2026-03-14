import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArchitectureDiagram } from "@/components/sources/ArchitectureDiagram";

const sources = [
  {
    name: "CDC PLACES API",
    endpoint: "https://chronicdata.cdc.gov/resource/swc5-untb.json",
    status: "CONNECTED",
    statusColor: "bg-success",
    lastSync: "Today, 09:14 UTC",
    records: "3,142 counties · 36 health measures",
    description: "Population-level chronic disease prevalence, risk behaviors, and prevention data at county and census tract level.",
  },
  {
    name: "HRSA Data Warehouse API",
    endpoint: "https://data.hrsa.gov/api/download",
    status: "CONNECTED",
    statusColor: "bg-success",
    lastSync: "Today, 09:15 UTC",
    records: "All FQHCs, funded sites, look-alike sites",
    description: "Federally Qualified Health Center locations, service areas, patient populations, and federal funding levels.",
  },
  {
    name: "USAspending.gov API",
    endpoint: "https://api.usaspending.gov/api/v2/",
    status: "CONNECTED",
    statusColor: "bg-success",
    lastSync: "Today, 09:16 UTC",
    records: "All federal grants, last 24 months, healthcare category",
    description: "Federal award obligations by recipient, geography, CFDA program, and awarding agency.",
  },
  {
    name: "2-1-1 Referral Network",
    endpoint: "https://api.211.org/",
    status: "SIMULATED",
    statusColor: "bg-warning",
    lastSync: "Cached dataset",
    records: "Call-volume aggregates by ZIP",
    description: "Community referral call volumes as a proxy for unmet social determinants of health needs.",
  },
];

export default function DataSources() {
  return (
    <div className="p-4 md:p-6 space-y-4">
      <h1 className="text-lg font-semibold text-foreground">Data Sources</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {sources.map((s) => (
          <Card key={s.name} className="bg-card border-border">
            <CardHeader className="pb-2 pt-4 px-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-foreground">{s.name}</CardTitle>
                <Badge variant="outline" className={`text-[10px] font-mono ${
                  s.status === "CONNECTED" ? "border-success text-success" : "border-warning text-warning"
                }`}>
                  {s.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="px-4 pb-4 space-y-2">
              <p className="text-xs text-muted-foreground font-mono break-all">{s.endpoint}</p>
              <p className="text-xs text-muted-foreground">{s.description}</p>
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-muted-foreground">Last sync: {s.lastSync}</span>
                <span className="text-muted-foreground">{s.records}</span>
              </div>
              <Button variant="outline" size="sm" className="text-xs w-full mt-1">
                Test Connection
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-card border-border">
        <CardHeader className="pb-2 pt-4 px-4">
          <CardTitle className="text-sm font-medium text-foreground">System Architecture</CardTitle>
        </CardHeader>
        <CardContent className="px-4 pb-4">
          <ArchitectureDiagram />
        </CardContent>
      </Card>
    </div>
  );
}
