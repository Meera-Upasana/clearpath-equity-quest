import { Card, CardContent } from "@/components/ui/card";

const cards = [
  {
    borderColor: "border-primary",
    title: "FQHC Coverage",
    content: "ZIP 85035: 0 FQHCs within 10 miles. Nearest facility is 14.3 miles away in ZIP 85033.",
    badge: "GAP IDENTIFIED",
    badgeColor: "text-primary",
  },
  {
    borderColor: "border-warning",
    title: "Federal Grants (24mo)",
    content: "ZIP 85035: $0 awarded. ZIP 85033: $1.2M (CDC, competitor NGO). ZIP 85031: $680K (HRSA).",
    badge: "FUNDING DESERT",
    badgeColor: "text-warning",
  },
  {
    borderColor: "border-success",
    title: "Strategic Recommendation",
    content: "ZIP 85035 confirmed healthcare desert. Priority Tier 1. Recommend immediate grant application targeting HRSA Community Health Centers Fund.",
    badge: "PRIORITY 1",
    badgeColor: "text-success",
  },
];

export function IntelCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {cards.map((c) => (
        <Card key={c.title} className={`bg-card ${c.borderColor} border-l-2`}>
          <CardContent className="p-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-foreground">{c.title}</span>
              <span className={`text-[10px] font-mono font-medium ${c.badgeColor}`}>{c.badge}</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">{c.content}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
