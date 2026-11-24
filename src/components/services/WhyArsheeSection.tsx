import { Award, Globe, Layers, ShieldCheck } from "lucide-react";
import { AnimatedSection } from "@/components/common/AnimatedSection";

const arsheeStrengths = [
  {
    icon: ShieldCheck,
    title: "Indian & International Standards Alignment",
    description:
      "Execution aligned with Indian and international railway standards, including IEC, EN, UIC, TSI, and RDSO specifications.",
  },
  {
    icon: Award,
    title: "European Accredited Partnerships",
    description:
      "Indian representative of VÚKV a.s. and VUZ a.s. (Czech Republic), ISO/IEC 17025 accredited railway testing laboratories.",
  },
  {
    icon: Layers,
    title: "Flexible, End-to-End Execution",
    description:
      "From understanding unique project requirements and test planning to instrumentation, execution, validation, and certification documentation.",
  },
  {
    icon: Globe,
    title: "Experienced Rolling Stock Specialists",
    description:
      "Backed by engineers and technicians with over 10 years of experience across rolling stock testing, Vande Bharat, and Metro Rail systems.",
  },
];

/**
 * SGS-inspired Section 4: Why Arshee Engineering — strictly grounded in approved brief facts.
 */
export function WhyArsheeSection() {
  return (
    <section className="py-16 md:py-24 bg-surface border-t border-border/50">
      <div className="container-wide">
        <AnimatedSection className="max-w-3xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
            Why Arshee Engineering
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-tight">
            Global Testing Expertise With Local Indian Execution
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            Founded in 2020, AEI combines technical rigour, operational agility, and practical
            cost-effective delivery tailored to evolving railway requirements.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {arsheeStrengths.map((item, idx) => (
            <AnimatedSection
              key={item.title}
              delay={idx * 0.06}
              className="bg-background rounded-2xl p-6 md:p-7 border border-border/60 flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-surface border border-border/60 flex items-center justify-center mb-5">
                  <item.icon className="w-5 h-5 text-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
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
