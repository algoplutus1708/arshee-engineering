import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ServiceIcon } from "@/components/services/ServiceIcon";
import { ServiceEnquiryCta } from "@/components/services/ServiceEnquiryCta";
import { servicesData } from "@/data/services";
import { siteAssets } from "@/lib/assets";
import { usePageMeta } from "@/hooks/use-page-meta";

const standards = [
  { name: "RDSO", detail: "Research Designs & Standards Organisation" },
  { name: "EN Standards", detail: "European Railway Applications Standards" },
  { name: "IEC", detail: "International Electrotechnical Commission" },
  { name: "UIC", detail: "International Union of Railways" },
  { name: "TSI", detail: "Technical Specifications for Interoperability" },
];

export default function Services() {
  usePageMeta({
    title: "Engineering Services | Arshee Engineering & Innovations Pvt. Ltd.",
    description:
      "Engineering services for the future of rail: Testing & Commissioning, Validation & Homologation, Technical Documentation, Retrofitment & Maintenance, Consulting, and Rental Services.",
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-neutral-950 text-white">
        <div className="absolute inset-0">
          <img
            src={siteAssets.stock.vandeBharatMumbai}
            alt="Indian Railways Vande Bharat Express rolling stock on mainline track"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/55" />
        </div>

        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-white/75 mb-5"
            >
              Arshee Engineering Services
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.06]"
            >
              Engineering Services for the Future of Rail
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.16 }}
              className="mt-6 text-base sm:text-lg md:text-xl text-white/85 leading-relaxed font-light"
            >
              Comprehensive testing, homologation, documentation, lifecycle maintenance, technical
              advisory, and calibrated instrumentation rental for railway rolling stock and
              infrastructure—aligned with Indian and international standards.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.24 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-black font-medium text-sm md:text-base transition-transform duration-300 hover:scale-105"
              >
                Enquire Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <a
                href="#service-portfolio"
                className="inline-flex items-center justify-center px-7 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-white font-medium text-sm md:text-base transition-colors hover:bg-white/20"
              >
                Explore All Six Services
              </a>
            </motion.div>
          </div>

          {/* Quick-Jump Service Category Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.32 }}
            className="mt-14 pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3"
          >
            {servicesData.map((service, index) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="group rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 px-4 py-3.5 transition-all duration-300 hover:bg-white hover:text-black"
              >
                <span className="block text-[11px] font-semibold tracking-widest opacity-70 mb-1">
                  0{index + 1}
                </span>
                <span className="block text-xs sm:text-sm font-medium leading-snug">
                  {service.shortTitle}
                </span>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Client-First Service Philosophy */}
      <section className="py-16 md:py-24 bg-background border-b border-border/50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <AnimatedSection className="lg:col-span-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                Our Services Philosophy
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-tight">
                Precision, Transparency &amp; Ownership
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="lg:col-span-8">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                At Arshee, we believe that exceptional service is not just about delivering what is
                promised; it is about understanding the people and expectations behind every
                requirement. We take pride in maintaining the highest standards of professionalism,
                technical excellence and commitment, while remaining sensitive to our clients&apos;
                perspectives, priorities and concerns. We listen with empathy, communicate with
                transparency and approach every challenge with a sense of responsibility and
                ownership. We strive not only to meet expectations but to anticipate needs, provide
                thoughtful solutions and create an experience that makes our clients feel valued,
                respected and assured at every stage of our engagement.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Six Services Showcase — Alternating Editorial Image + Content Layout */}
      <section id="service-portfolio" className="py-20 md:py-28 bg-surface/60 border-b border-border/50 scroll-mt-20">
        <div className="container-wide">
          <AnimatedSection className="mb-14 md:mb-20">
            <SectionHeading
              eyebrow="Service Portfolio"
              title="Six Dedicated Railway Engineering Disciplines"
              description="Explore each service area for full technical scopes, testing matrices, deliverables, and equipment specifications."
            />
          </AnimatedSection>

          <div className="space-y-10 md:space-y-14">
            {servicesData.map((service, index) => {
              const imageRight = index % 2 === 1;

              return (
                <AnimatedSection
                  key={service.slug}
                  delay={0.04}
                  className="group bg-background rounded-3xl border border-border/60 overflow-hidden shadow-sm transition-all duration-300 hover:border-foreground/25 hover:shadow-2xl hover:shadow-foreground/5"
                >
                  <div className="grid lg:grid-cols-12 items-stretch">
                    {/* Visual Column */}
                    <div
                      className={`lg:col-span-5 relative overflow-hidden bg-muted min-h-[260px] sm:min-h-[320px] ${
                        imageRight ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <img
                        src={service.heroImage}
                        alt={service.heroImageAlt}
                        loading="lazy"
                        className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                          service.heroObjectPosition === "top" ? "object-top" : "object-center"
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                      <span className="absolute top-5 left-5 px-3.5 py-1.5 rounded-full bg-background/90 backdrop-blur-md text-xs font-semibold tracking-widest text-foreground border border-border/60">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Content Column */}
                    <div
                      className={`lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-between ${
                        imageRight ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-xl bg-surface border border-border/60 flex items-center justify-center text-foreground">
                            <ServiceIcon iconKey={service.icon} className="w-5 h-5" />
                          </div>
                          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                            {service.eyebrow}
                          </span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
                          {service.title}
                        </h3>

                        <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                          {service.heroSummary}
                        </p>

                        <div className="mt-6 pt-6 border-t border-border/60 grid sm:grid-cols-2 gap-x-6 gap-y-3">
                          {service.previewHighlights.map((highlight) => (
                            <div
                              key={highlight}
                              className="flex items-start gap-2.5 text-sm text-muted-foreground"
                            >
                              <CheckCircle2 className="w-4 h-4 text-foreground shrink-0 mt-0.5" />
                              <span>{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-8 pt-6 border-t border-border/60 flex flex-wrap items-center justify-between gap-4">
                        <Link
                          to={`/services/${service.slug}`}
                          className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-foreground text-background font-medium text-sm transition-all duration-300 hover:opacity-90 group-hover:translate-x-0.5"
                        >
                          Explore Service
                          <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                        <Link
                          to="/contact"
                          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                          Request Proposal
                        </Link>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Professionals at Work */}
      <section className="py-16 md:py-24 bg-background border-b border-border/50">
        <div className="container-wide">
          <AnimatedSection className="mb-12">
            <SectionHeading
              eyebrow="Professionals at Work"
              title="On-Site Engineering & Testing Execution"
              description="Dedicated AEI engineers executing cab commissioning, onboard DAQ setup, and trackside validation across Indian railway and metro networks."
            />
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                src: siteAssets.field.teamBenchCollab,
                alt: "AEI engineers wiring and verifying onboard instrumentation inside a train coach",
                caption: "Onboard Instrumentation & Signal Setup",
                top: true,
              },
              {
                src: siteAssets.field.cabConsoleTesting,
                alt: "AEI engineer inspecting driver cab console and diagnostic switches",
                caption: "Driver Cab & Control Console Verification",
                top: true,
              },
              {
                src: siteAssets.field.daqHardware,
                alt: "Multi-channel ruggedised Dewesoft data acquisition (DAQ) unit wired inside a passenger coach",
                caption: "Multi-Channel DAQ Hardware Deployment",
                top: false,
              },
              {
                src: siteAssets.stock.pantographTesting,
                alt: "Railway pantograph and overhead catenary wire interaction for dynamic current collection testing",
                caption: "Dynamic Current Collection & Pantograph Testing",
                top: false,
              },
            ].map((item, idx) => (
              <AnimatedSection
                key={item.caption}
                delay={idx * 0.08}
                className="group rounded-3xl overflow-hidden bg-surface border border-border/60"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                      item.top ? "object-top" : "object-center"
                    }`}
                  />
                </div>
                <div className="p-5">
                  <p className="text-sm font-medium text-foreground">{item.caption}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Standards & Execution Framework */}
      <section className="py-20 md:py-28 bg-surface/50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <AnimatedSection className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                Standards &amp; Quality
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-tight">
                Aligned with Indian and International Regulatory Frameworks
              </h2>
              <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
                From test planning and instrumentation layouts to on-track trials and final
                homologation records, every engagement is engineered for precision, traceability,
                and regulatory acceptance.
              </p>
            </AnimatedSection>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {standards.map((std, idx) => (
                <AnimatedSection
                  key={std.name}
                  delay={idx * 0.06}
                  className="bg-background rounded-2xl p-6 border border-border/60 flex items-start gap-4"
                >
                  <CheckCircle2 className="w-5 h-5 text-foreground shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{std.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{std.detail}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry CTA */}
      <ServiceEnquiryCta
        title="Need a Customised Testing or Engineering Plan?"
        description="Reach out to discuss your rolling stock programme, instrumentation requirements, or regulatory approval roadmap."
      />
    </Layout>
  );
}
