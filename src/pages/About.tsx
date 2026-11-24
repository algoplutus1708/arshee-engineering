import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Globe, Layers, ShieldCheck, Wrench } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { SectionHeading } from "@/components/common/SectionHeading";
import { siteAssets } from "@/lib/assets";
import { usePageMeta } from "@/hooks/use-page-meta";

const pillars = [
  {
    icon: Globe,
    number: "01",
    title: "Global Expertise, Local Execution",
    description:
      "Strategic partnerships with leading European accredited testing agencies paired with responsive on-site execution across India.",
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "Standards-Driven Compliance",
    description:
      "Rigorous adherence to Indian and international railway standards, including IEC, EN, UIC, TSI, and RDSO specifications.",
  },
  {
    icon: Layers,
    number: "03",
    title: "End-to-End Engineering Lifecycle",
    description:
      "Flexible coverage from requirement analysis and custom testing strategies to instrumentation, execution, validation, and certification support.",
  },
  {
    icon: Wrench,
    number: "04",
    title: "Technical Excellence & Agility",
    description:
      "Practical, cost-effective engineering solutions delivered with operational agility, precision, and lasting client partnerships.",
  },
];

export default function About() {
  usePageMeta({
    title: "About Us | Arshee Engineering & Innovations Pvt. Ltd.",
    description:
      "Founded in 2020, AEI is an Indian railway engineering company specialising in Testing & Commissioning, Validation & Homologation, Precision Engineering, and Maintenance.",
  });

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <Layout>
      {/* Header Section */}
      <section ref={heroRef} className="pt-36 pb-20 md:pt-48 md:pb-28 bg-background overflow-hidden">
        <motion.div style={{ y: heroY }} className="max-w-4xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-widest mb-5"
          >
            About Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.04] tracking-tight"
          >
            Challenging the Status Quo
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-7 text-lg md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed"
          >
            Delivering innovative, reliable, and cost-effective railway engineering solutions built
            on precision, compliance, and lasting partnerships.
          </motion.p>
        </motion.div>
      </section>

      {/* Company Profile - Premium Split Layout */}
      <section className="py-20 md:py-28 bg-surface border-y border-border/50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Image Column */}
            <AnimatedSection className="lg:col-span-6">
              <div className="relative group rounded-3xl overflow-hidden bg-background border border-border/60 shadow-2xl shadow-foreground/5 aspect-[4/3]">
                <img
                  src={siteAssets.field.teamMetroStation}
                  alt="Arshee Engineering and Innovations Pvt. Ltd. testing and commissioning team at Ashram Metro station"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="rounded-2xl overflow-hidden bg-background border border-border/60 aspect-[4/3]">
                  <img
                    src={siteAssets.field.teamBenchCollab}
                    alt="AEI engineers assembling onboard test instrumentation inside a passenger coach"
                    loading="lazy"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden bg-background border border-border/60 aspect-[4/3]">
                  <img
                    src={siteAssets.field.aeiVuzTrackside}
                    alt="AEI and VUZ technical partner engineers alongside metro rolling stock"
                    loading="lazy"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </AnimatedSection>

            {/* Description Column */}
            <div className="lg:col-span-6 space-y-7">
              <AnimatedSection>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                  Company Profile
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight tracking-tight">
                  Arshee Engineering &amp; Innovations Pvt. Ltd.
                </h2>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Founded in 2020, Arshee Engineering and Innovations Pvt. Ltd. (AEI) is a
                  forward-thinking Indian engineering company delivering innovative, reliable, and
                  cost-effective solutions to the railway industry. We specialise in Testing &amp;
                  Commissioning, Validation &amp; Homologation, Precision Engineering, and
                  Maintenance Services for rolling stock, railway systems, and infrastructure,
                  adhering to Indian and international standards, including IEC and EN.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.18}>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Backed by strong technical expertise and strategic partnerships with leading
                  European accredited testing agencies, we offer comprehensive and customised
                  solutions that ensure quality, safety, compliance, and operational excellence. Our
                  commitment to innovation, precision, and customer satisfaction enables us to
                  deliver efficient, timely, and dependable services tailored to our clients&apos;
                  evolving needs.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.26}>
                <div className="pt-6 border-t border-border/70">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    What Distinguishes AEI
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    What distinguishes AEI is our ability to combine global expertise with local
                    execution, technical excellence with operational agility, and innovation with
                    practical, cost-effective solutions. Unlike conventional service providers, we
                    adopt a flexible, end-to-end approach—from understanding unique project
                    requirements and developing customised testing strategies to instrumentation,
                    execution, validation, and final certification support. At AEI, we go beyond
                    delivering services—we build lasting partnerships driven by trust, performance,
                    and shared success.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container-wide">
          <AnimatedSection className="mb-14 md:mb-16">
            <SectionHeading
              eyebrow="Our Approach"
              title="Built on Trust, Performance & Shared Success"
              description="Every project combines rigorous engineering standards with responsive, end-to-end execution."
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, index) => (
              <AnimatedSection
                key={pillar.title}
                delay={index * 0.07}
                className="bg-surface rounded-3xl p-8 border border-border/60 flex flex-col justify-between transition-all duration-300 hover:border-foreground/25 hover:-translate-y-1 hover:shadow-xl hover:shadow-foreground/5"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-background border border-border/60 flex items-center justify-center">
                      <pillar.icon className="w-6 h-6 text-foreground" />
                    </div>
                    <span className="text-xs font-semibold tracking-widest text-muted-foreground">
                      {pillar.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-12 rounded-3xl bg-surface p-8 md:p-10 border border-border/60">
            <div className="grid md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-semibold text-foreground mb-2">
                  End-to-End Delivery Scope
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  From requirement study and custom test planning to instrumentation, on-site trials,
                  analysis, and final certification documentation.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                {["IEC & EN Standards", "Rolling Stock", "Infrastructure"].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border/60 text-xs font-medium text-foreground"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 md:py-28 bg-foreground text-background">
        <div className="container-tight text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-background">
              Explore Our Engineering Capabilities
            </h2>
            <p className="mt-6 text-lg md:text-xl text-background/75 max-w-2xl mx-auto leading-relaxed">
              Discover how AEI supports rolling stock manufacturers, railway authorities, and system
              integrators across every phase of testing, validation, and lifecycle maintenance.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-9 py-4 bg-background text-foreground rounded-full font-medium text-base md:text-lg transition-transform duration-300 hover:scale-105"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/technical-partners"
                className="inline-flex items-center justify-center px-9 py-4 border border-background/25 text-background rounded-full font-medium text-base md:text-lg transition-colors hover:bg-background/10"
              >
                Technical Partners
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
