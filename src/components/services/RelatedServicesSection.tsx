import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { servicesBySlug, type ServiceSlug } from "@/data/services";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { ServiceIcon } from "./ServiceIcon";

interface RelatedServicesSectionProps {
  relatedSlugs: ServiceSlug[];
}

/**
 * SGS-inspired Section 5: Related Services navigation across AEI's service portfolio.
 */
export function RelatedServicesSection({ relatedSlugs }: RelatedServicesSectionProps) {
  const relatedServices = relatedSlugs
    .map((slug) => servicesBySlug[slug])
    .filter(Boolean);

  return (
    <section className="py-16 md:py-24 bg-background border-t border-border/50">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <AnimatedSection className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
              Related Services
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
              Complementary Railway Engineering Capabilities
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <Link
              to="/services"
              className="inline-flex items-center text-sm font-medium text-foreground hover:opacity-75 transition-opacity"
            >
              View All Services
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {relatedServices.map((item, idx) => (
            <AnimatedSection
              key={item.slug}
              delay={idx * 0.07}
              className="group bg-surface rounded-3xl border border-border/60 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-foreground/25 hover:-translate-y-1 hover:shadow-xl hover:shadow-foreground/5"
            >
              <div className="aspect-[16/10] w-full overflow-hidden bg-muted">
                <img
                  src={item.heroImage}
                  alt={item.heroImageAlt}
                  loading="lazy"
                  className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                    item.heroObjectPosition === "top" ? "object-top" : "object-center"
                  }`}
                />
              </div>

              <div className="p-7 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center gap-2.5 text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">
                    <ServiceIcon iconKey={item.icon} className="w-4 h-4 text-foreground" />
                    <span>{item.eyebrow}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground tracking-tight mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.shortDescription}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60">
                  <Link
                    to={`/services/${item.slug}`}
                    className="inline-flex items-center text-sm font-medium text-foreground group-hover:opacity-80 transition-opacity"
                  >
                    Explore Service
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
