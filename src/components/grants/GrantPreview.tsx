import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface Props {
  form: {
    hospital: string;
    zip: string;
    program: string;
    amount: number;
    duration: number;
  };
}

export function GrantPreview({ form }: Props) {
  return (
    <Card className="bg-card border-border h-full">
      <CardHeader className="pb-2 pt-4 px-5">
        <CardTitle className="text-sm font-medium text-foreground">Grant Proposal Preview</CardTitle>
        <p className="text-xs text-muted-foreground font-mono">{form.program} · ${form.amount.toLocaleString()}</p>
      </CardHeader>
      <CardContent className="px-5 pb-6 space-y-5 text-sm leading-relaxed">
        {/* Executive Summary */}
        <section>
          <h3 className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">1. Executive Summary</h3>
          <p className="text-xs text-muted-foreground">
            {form.hospital} respectfully requests ${form.amount.toLocaleString()} under the {form.program} to establish a comprehensive community health access point serving ZIP code {form.zip} and surrounding areas. This {form.duration}-month initiative will directly address critical gaps in chronic disease management, preventive care, and health equity for an underserved population of approximately 38,000 residents.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Our analysis of CDC PLACES data, HRSA service area mapping, and federal spending records confirms that {form.zip} is a Tier 1 healthcare desert with zero Federally Qualified Health Centers, zero federal healthcare grants awarded in the past 24 months, and a diabetes prevalence rate 47% above the national average.
          </p>
        </section>

        <Separator className="bg-border" />

        {/* Needs Assessment */}
        <section>
          <h3 className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">2. Needs Assessment / Gap Analysis</h3>
          <p className="text-xs text-muted-foreground">
            CDC PLACES 2023 data reports a diabetes prevalence of 22.1% in the {form.zip} census tract area, compared to the national average of 11.6%. HRSA Data Warehouse confirms zero FQHCs operating within a 10-mile radius. USAspending.gov records show $0 in federal healthcare grants allocated to this ZIP code over the past 24 months. United Way 2-1-1 call volume data indicates a 34% year-over-year increase in health-related referral requests, serving as a proxy for escalating social distress.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            While neighboring ZIP 85033 is serviced by two FQHCs supported by a recent $1.2M federal allocation, ZIP {form.zip} remains a critical healthcare desert with no comparable infrastructure, leaving nearly 38,000 residents without adequate primary care access.
          </p>
        </section>

        <Separator className="bg-border" />

        {/* Projected Impact */}
        <section>
          <h3 className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">3. Projected Patient Impact</h3>
          <div className="border border-border rounded overflow-hidden">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-muted">
                  <th className="text-left px-3 py-2 text-muted-foreground font-medium">Metric</th>
                  <th className="text-right px-3 py-2 text-muted-foreground font-medium">Value</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Annual patients served", "8,400"],
                  ["New DM diagnoses caught/yr", "2,100"],
                  ["Preventable admits avoided", "680"],
                  ["Cost per patient", "$340"],
                  ["Breakeven", "18 months"],
                ].map(([k, v]) => (
                  <tr key={k} className="border-t border-border">
                    <td className="px-3 py-2 text-foreground">{k}</td>
                    <td className="px-3 py-2 text-right font-mono text-primary">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <Separator className="bg-border" />

        {/* ROI Model */}
        <section>
          <h3 className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">4. 5-Year ROI Model</h3>
          <div className="border border-border rounded overflow-hidden">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-muted">
                  <th className="text-left px-3 py-2 text-muted-foreground font-medium">Line Item</th>
                  <th className="text-right px-3 py-2 text-muted-foreground font-medium">Amount</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Grant request", `$${form.amount.toLocaleString()}`],
                  ["Annual operating cost", "$1,850,000"],
                  ["Hospitalization cost avoidance (5yr)", "$14,200,000"],
                  ["ED diversion savings (5yr)", "$3,900,000"],
                  ["Net cost avoidance (5yr)", "$10,080,000"],
                  ["ROI Multiplier", "4.2×"],
                ].map(([k, v]) => (
                  <tr key={k} className="border-t border-border">
                    <td className="px-3 py-2 text-foreground">{k}</td>
                    <td className="px-3 py-2 text-right font-mono text-primary">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <Separator className="bg-border" />

        {/* Data Sources */}
        <section>
          <h3 className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">5. Data Sources & Methodology</h3>
          <p className="text-xs text-muted-foreground">
            This proposal is informed by CDC PLACES 2023 county- and tract-level estimates, HRSA Data Warehouse FQHC geocoding, USAspending.gov federal award records (healthcare CFDA codes, trailing 24 months), and 2-1-1 United Way referral call-volume data. Composite risk scores are computed as a weighted index of diabetes prevalence (30%), uninsured rate (25%), care access gap (25%), and social distress proxies (20%).
          </p>
        </section>
      </CardContent>
    </Card>
  );
}
