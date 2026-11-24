import { useParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceOverviewSection } from "@/components/services/ServiceOverviewSection";
import {
  ConsultingAreasSection,
  DeliverablesSection,
  KeyActivitiesGrid,
  RentalEquipmentSection,
  TestingCategorySection,
  ValidationGroupsSection,
} from "@/components/services/ServiceSection";
import { WhyArsheeSection } from "@/components/services/WhyArsheeSection";
import { RelatedServicesSection } from "@/components/services/RelatedServicesSection";
import { ServiceEnquiryCta } from "@/components/services/ServiceEnquiryCta";
import { servicesBySlug, type ServiceSlug } from "@/data/services";
import { usePageMeta } from "@/hooks/use-page-meta";
import NotFound from "./NotFound";

interface ServiceDetailProps {
  forcedSlug?: ServiceSlug;
}

export default function ServiceDetail({ forcedSlug }: ServiceDetailProps) {
  const { slug: routeSlug } = useParams<{ slug: string }>();
  const slug = forcedSlug ?? (routeSlug as ServiceSlug | undefined);
  const service = slug ? servicesBySlug[slug] : undefined;

  usePageMeta({
    title: service ? service.metaTitle : "Service Not Found | Arshee Engineering",
    description: service
      ? service.metaDescription
      : "Explore railway engineering, testing, validation, documentation, retrofitment, consulting, and rental services from Arshee Engineering.",
  });

  if (!service) {
    return <NotFound />;
  }

  return (
    <Layout>
      {/* Section 1: Service Hero */}
      <ServiceHero service={service} />

      {/* Section 2: Overview & Client Value */}
      <ServiceOverviewSection service={service} />

      {/* Section 3: Our Services / Capabilities */}
      <div id="capabilities" className="scroll-mt-24">
        {service.testingCategories && (
          <TestingCategorySection categories={service.testingCategories} />
        )}

        {service.validationGroups && (
          <ValidationGroupsSection groups={service.validationGroups} />
        )}

        {service.deliverables && service.deliverablesHeading && (
          <DeliverablesSection
            heading={service.deliverablesHeading}
            deliverables={service.deliverables}
          />
        )}

        {service.keyActivities && service.keyActivitiesHeading && (
          <KeyActivitiesGrid
            heading={service.keyActivitiesHeading}
            activities={service.keyActivities}
          />
        )}

        {service.consultingAreas && service.consultingHeading && (
          <ConsultingAreasSection
            heading={service.consultingHeading}
            areas={service.consultingAreas}
          />
        )}

        {service.rentalInstruments && service.rentalInstrumentsHeading && service.testBench && (
          <RentalEquipmentSection
            instrumentsHeading={service.rentalInstrumentsHeading}
            instruments={service.rentalInstruments}
            testBench={service.testBench}
          />
        )}

        {/* Closing Engineering Commitment */}
        {service.closingStatement && (
          <section className="py-14 md:py-20 bg-background border-t border-border/50">
            <div className="container-tight">
              <AnimatedSection className="rounded-3xl bg-surface p-8 md:p-12 border border-border/60 text-center">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                  Our Objective &amp; Commitment
                </p>
                <p className="text-lg md:text-xl text-foreground leading-relaxed font-normal">
                  {service.closingStatement}
                </p>
              </AnimatedSection>
            </div>
          </section>
        )}

        {/* Field Execution Gallery */}
        {service.gallery && service.gallery.length > 0 && (
          <section className="py-16 md:py-24 bg-background border-t border-border/50">
            <div className="container-wide">
              <AnimatedSection className="max-w-3xl mb-10 md:mb-12">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                  In Practice
                </p>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
                  Field Execution &amp; Instrumentation
                </h2>
              </AnimatedSection>

              <div className="grid md:grid-cols-3 gap-6">
                {service.gallery.map((photo, idx) => (
                  <AnimatedSection
                    key={photo.caption}
                    delay={idx * 0.08}
                    className="group rounded-3xl overflow-hidden bg-surface border border-border/60"
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        loading="lazy"
                        className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                          photo.objectPosition === "top" ? "object-top" : "object-center"
                        }`}
                      />
                    </div>
                    <div className="p-5">
                      <p className="text-sm font-medium text-foreground">{photo.caption}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>

      {/* Section 4: Why Arshee Engineering */}
      <WhyArsheeSection />

      {/* Section 5: Related Services */}
      <RelatedServicesSection relatedSlugs={service.relatedSlugs} />

      {/* Section 6: Contact / Enquiry CTA */}
      <ServiceEnquiryCta serviceName={service.title} />
    </Layout>
  );
}
