import { CheckCircle2 } from "lucide-react";
import type { ServiceDetailContent } from "@/data/services";
import { AnimatedSection } from "@/components/common/AnimatedSection";

interface ServiceOverviewSectionProps {
  service: ServiceDetailContent;
}

/**
 * SGS-inspired Section 2: Detailed overview paired with railway engineering relevance
 * and client value highlights.
 */
export function ServiceOverviewSection({ service }: ServiceOverviewSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Detailed Explanation */}
          <AnimatedSection className="lg:col-span-7 space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                Service Overview
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-tight">
                Technical Scope &amp; Railway Relevance
              </h2>
            </div>

            <div className="space-y-5">
              {service.introParagraphs.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-base md:text-lg text-muted-foreground leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </AnimatedSection>

          {/* Value to Clients */}
          <AnimatedSection delay={0.1} className="lg:col-span-5">
            <div className="rounded-3xl bg-surface border border-border/60 p-7 md:p-9 space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                  Client Value
                </p>
                <h3 className="text-xl md:text-2xl font-semibold text-foreground tracking-tight">
                  How This Supports Your Programme
                </h3>
              </div>

              <div className="space-y-5 pt-2 border-t border-border/60">
                {service.valueHighlights.map((item) => (
                  <div key={item.title} className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-foreground shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-base font-semibold text-foreground">{item.title}</h4>
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
