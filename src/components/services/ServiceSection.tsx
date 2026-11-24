import { CheckCircle2 } from "lucide-react";
import type {
  ConsultingArea,
  DeliverableItem,
  RentalSpec,
  TestingCategory,
} from "@/data/services";
import { AnimatedSection } from "@/components/common/AnimatedSection";

interface TestingCategorySectionProps {
  categories: TestingCategory[];
}

/**
 * Renders Static and Dynamic Testing categories with detailed activity cards.
 */
export function TestingCategorySection({ categories }: TestingCategorySectionProps) {
  return (
    <div className="space-y-16 md:space-y-24">
      {categories.map((category, categoryIdx) => (
        <section
          key={category.title}
          className={categoryIdx % 2 === 0 ? "bg-surface py-16 md:py-24" : "bg-background py-16 md:py-24"}
        >
          <div className="container-wide">
            <AnimatedSection className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-background border border-border text-xs font-semibold uppercase tracking-widest text-foreground mb-5">
                {category.code ? `Category ${category.code}` : "Testing Scope"}
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
                {category.code ? `${category.code}. ${category.title}` : category.title}
              </h2>
              {category.description && (
                <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
                  {category.description}
                </p>
              )}
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {category.activities.map((activity, idx) => (
                <AnimatedSection
                  key={activity.title}
                  delay={Math.min(idx * 0.05, 0.3)}
                  className={`rounded-2xl p-6 md:p-7 border border-border/60 transition-all duration-300 hover:border-foreground/25 hover:shadow-lg hover:shadow-foreground/5 ${
                    categoryIdx % 2 === 0 ? "bg-background" : "bg-surface"
                  }`}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle2 className="w-5 h-5 text-foreground shrink-0 mt-0.5" />
                    <h3 className="text-lg font-semibold text-foreground leading-snug">
                      {activity.title}
                    </h3>
                  </div>
                  {activity.description && (
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed pl-8">
                      {activity.description}
                    </p>
                  )}
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

interface ValidationGroupsSectionProps {
  groups: { title: string; items: string[] }[];
}

/**
 * Renders the 4 Validation & Homologation test matrices.
 */
export function ValidationGroupsSection({ groups }: ValidationGroupsSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="container-wide">
        <AnimatedSection className="max-w-3xl mb-12 md:mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
            Validation Scope
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            Test Categories & Activities
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {groups.map((group, idx) => (
            <AnimatedSection
              key={group.title}
              delay={idx * 0.08}
              className="bg-background rounded-3xl p-8 md:p-10 border border-border/60 shadow-sm"
            >
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/60">
                <h3 className="text-2xl font-semibold text-foreground tracking-tight">
                  {group.title}
                </h3>
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  0{idx + 1}
                </span>
              </div>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm md:text-base text-muted-foreground leading-snug"
                  >
                    <CheckCircle2 className="w-4 h-4 text-foreground shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

interface DeliverablesSectionProps {
  heading: string;
  deliverables: DeliverableItem[];
}

/**
 * Renders structured technical deliverables in a clean grid.
 */
export function DeliverablesSection({ heading, deliverables }: DeliverablesSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="container-wide">
        <AnimatedSection className="max-w-3xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
            Documentation Suite
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            {heading}
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliverables.map((item, idx) => (
            <AnimatedSection
              key={item.title}
              delay={idx * 0.06}
              className="bg-background rounded-3xl p-7 md:p-8 border border-border/60 flex flex-col justify-between transition-all duration-300 hover:border-foreground/25 hover:shadow-lg hover:shadow-foreground/5"
            >
              <div>
                <span className="inline-block text-xs font-semibold tracking-widest text-muted-foreground mb-4">
                  0{idx + 1}
                </span>
                <h3 className="text-xl font-semibold text-foreground mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

interface KeyActivitiesGridProps {
  heading: string;
  activities: string[];
}

/**
 * Renders Retrofitment & Maintenance key activities in a visual grid.
 */
export function KeyActivitiesGrid({ heading, activities }: KeyActivitiesGridProps) {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="container-wide">
        <AnimatedSection className="max-w-3xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
            Operational Capabilities
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            {heading}
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {activities.map((activity, idx) => (
            <AnimatedSection
              key={activity}
              delay={idx * 0.05}
              className="group bg-background rounded-2xl p-6 md:p-7 border border-border/60 transition-all duration-300 hover:border-foreground/25 hover:-translate-y-1 hover:shadow-lg hover:shadow-foreground/5"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-semibold tracking-widest text-muted-foreground">
                  0{idx + 1}
                </span>
                <CheckCircle2 className="w-5 h-5 text-foreground/70 group-hover:text-foreground transition-colors" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-foreground tracking-tight">
                {activity}
              </h3>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

interface ConsultingAreasSectionProps {
  heading: string;
  areas: ConsultingArea[];
}

/**
 * Renders numbered Consulting Services areas with structured capability bullets.
 */
export function ConsultingAreasSection({ heading, areas }: ConsultingAreasSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="container-wide">
        <AnimatedSection className="max-w-3xl mb-12 md:mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
            Advisory Scope
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            {heading}
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {areas.map((area, idx) => (
            <AnimatedSection
              key={area.number}
              delay={idx * 0.07}
              className={`bg-background rounded-3xl p-8 md:p-10 border border-border/60 ${
                idx === areas.length - 1 && areas.length % 2 !== 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex items-baseline gap-4 mb-6 pb-4 border-b border-border/60">
                <span className="text-sm font-semibold tracking-widest text-muted-foreground">
                  {area.number}
                </span>
                <h3 className="text-2xl font-semibold text-foreground tracking-tight">
                  {area.title}
                </h3>
              </div>
              <ul
                className={`grid gap-3 ${
                  idx === areas.length - 1 && areas.length % 2 !== 0 ? "md:grid-cols-2" : ""
                }`}
              >
                {area.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm md:text-base text-muted-foreground leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-foreground shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

interface RentalEquipmentSectionProps {
  instrumentsHeading: string;
  instruments: string[];
  testBench: {
    heading: string;
    description: string;
    specs: RentalSpec[];
  };
}

/**
 * Renders Rental instruments list and prominent Compression Test Bench specifications.
 */
export function RentalEquipmentSection({
  instrumentsHeading,
  instruments,
  testBench,
}: RentalEquipmentSectionProps) {
  return (
    <>
      <section className="py-16 md:py-24 bg-surface">
        <div className="container-wide">
          <AnimatedSection className="max-w-3xl mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
              Precision Hardware
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
              {instrumentsHeading}
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {instruments.map((instrument, idx) => (
              <AnimatedSection
                key={instrument}
                delay={idx * 0.05}
                className="bg-background rounded-2xl p-6 md:p-7 border border-border/60 flex items-start gap-4"
              >
                <div className="w-9 h-9 rounded-xl bg-surface flex items-center justify-center shrink-0 text-xs font-semibold text-foreground">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-semibold text-foreground leading-snug pt-1">
                  {instrument}
                </h3>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container-wide">
          <div className="rounded-3xl bg-foreground text-background p-8 md:p-14 lg:p-16">
            <AnimatedSection className="max-w-3xl mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-background/60 mb-3">
                Load Testing Facility
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-background">
                {testBench.heading}
              </h2>
              <p className="mt-5 text-base md:text-lg text-background/75 leading-relaxed">
                {testBench.description}
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-5 md:gap-6">
              {testBench.specs.map((spec, idx) => (
                <AnimatedSection
                  key={spec.label}
                  delay={idx * 0.08}
                  className="rounded-2xl bg-background/10 border border-background/15 p-7 md:p-8"
                >
                  <p className="text-xs font-medium uppercase tracking-widest text-background/65 mb-3">
                    {spec.label}
                  </p>
                  <p className="text-3xl md:text-4xl font-bold tracking-tight text-background">
                    {spec.value}
                  </p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
