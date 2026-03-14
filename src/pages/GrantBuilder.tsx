import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { GrantPreview } from "@/components/grants/GrantPreview";
import { FileText, Copy, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function GrantBuilder() {
  const { toast } = useToast();
  const [form, setForm] = useState({
    hospital: "Mercy General Medical Center",
    zip: "85035",
    program: "HRSA Community Health Centers Fund",
    amount: 2400000,
    duration: 36,
  });

  const handleCopy = () => {
    toast({ title: "Copied to clipboard", description: "Grant proposal text copied." });
  };

  return (
    <div className="p-4 md:p-6 space-y-4">
      <h1 className="text-lg font-semibold text-foreground">Grant Proposal Builder</h1>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        {/* Left: Config form */}
        <div className="lg:col-span-2">
          <Card className="bg-card border-border">
            <CardHeader className="pb-3 pt-4 px-4">
              <CardTitle className="text-sm font-medium">Configuration</CardTitle>
            </CardHeader>
            <CardContent className="px-4 pb-4 space-y-4">
              <div className="space-y-1.5">
                <Label className="text-xs text-muted-foreground">Hospital Name</Label>
                <Input
                  value={form.hospital}
                  onChange={(e) => setForm({ ...form, hospital: e.target.value })}
                  className="bg-muted border-border text-sm"
                />
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs text-muted-foreground">Target ZIP Code</Label>
                <Input
                  value={form.zip}
                  onChange={(e) => setForm({ ...form, zip: e.target.value })}
                  className="bg-muted border-border text-sm font-mono"
                />
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs text-muted-foreground">Grant Program</Label>
                <Select value={form.program} onValueChange={(v) => setForm({ ...form, program: v })}>
                  <SelectTrigger className="bg-muted border-border text-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="HRSA Community Health Centers Fund">HRSA Community Health Centers Fund</SelectItem>
                    <SelectItem value="CDC Chronic Disease Prevention">CDC Chronic Disease Prevention</SelectItem>
                    <SelectItem value="CMS Innovation">CMS Innovation</SelectItem>
                    <SelectItem value="FEMA Health Resilience">FEMA Health Resilience</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs text-muted-foreground">
                  Requested Amount: ${form.amount.toLocaleString()}
                </Label>
                <Input
                  type="number"
                  value={form.amount}
                  onChange={(e) => setForm({ ...form, amount: Number(e.target.value) })}
                  className="bg-muted border-border text-sm font-mono"
                />
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs text-muted-foreground">
                  Project Duration: {form.duration} months
                </Label>
                <Slider
                  value={[form.duration]}
                  onValueChange={([v]) => setForm({ ...form, duration: v })}
                  min={12}
                  max={60}
                  step={6}
                  className="py-2"
                />
              </div>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Generate Proposal
              </Button>

              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1 text-xs">
                  <FileText className="h-3 w-3 mr-1" /> PDF
                </Button>
                <Button variant="outline" size="sm" className="flex-1 text-xs" onClick={handleCopy}>
                  <Copy className="h-3 w-3 mr-1" /> Copy
                </Button>
                <Button variant="outline" size="sm" className="flex-1 text-xs">
                  <Mail className="h-3 w-3 mr-1" /> Email
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right: Preview */}
        <div className="lg:col-span-3">
          <GrantPreview form={form} />
        </div>
      </div>
    </div>
  );
}
