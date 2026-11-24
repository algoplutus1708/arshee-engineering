import { Link } from "react-router-dom";
import { ArrowRight, Award, Globe, MapPin, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { siteAssets } from "@/lib/assets";
import { usePageMeta } from "@/hooks/use-page-meta";

interface TechnicalPartner {
  name: string;
  country: string;
  logo: string;
  logoAlt: string;
  darkBadge?: boolean;
  facilityImage: string;
  facilityImageAlt: string;
  facilityCaption: string;
  accreditation: string;
  capabilities: string;
  partnershipDescription: string;
}

const partners: TechnicalPartner[] = [
  {
    name: "VÚKV a.s.",
    country: "Czech Republic",
    logo: siteAssets.logos.vukv,
    logoAlt: "VÚKV a.s. official logo",
    facilityImage: siteAssets.stock.velimTestCircuit,
    facilityImageAlt: "Railway test rolling stock operating on the Velim railway test circuit in the Czech Republic",
    facilityCaption: "European Railway Testing & Type-Approval Operations",
    accreditation:
      "ISO/IEC 17025 accredited testing laboratory; test centres recognised by relevant Czech accreditation and regulatory authorities for railway testing and type-approval activities.",
    capabilities:
      "Accredited testing laboratory specialising in railway vehicles, components, and container testing covering applicable Technical Specifications for Interoperability (TSI), European Standards, and UIC requirements.",
    partnershipDescription:
      "Arshee Engineering and Innovations Pvt. Ltd. (AEI) serves as the Indian representative of VÚKV a.s., bringing European railway testing expertise together with strong local execution capabilities in India.",
  },
  {
    name: "VUZ a.s.",
    country: "Czech Republic",
    logo: siteAssets.logos.vuz,
    logoAlt: "VUZ a.s. official logo",
    darkBadge: true,
    facilityImage: siteAssets.stock.vuzCerhenice,
    facilityImageAlt: "VUZ Cerhenice railway test centre and test track infrastructure in the Czech Republic",
    facilityCaption: "VUZ Cerhenice Test Centre Infrastructure",
    accreditation:
      "ISO/IEC 17025 accredited testing laboratory; test centres recognised by relevant Czech accreditation and regulatory authorities for railway testing and type-approval activities.",
    capabilities:
      "Accredited testing laboratory specialising in railway vehicles, components, and container testing covering applicable Technical Specifications for Interoperability (TSI), European Standards, and UIC requirements.",
    partnershipDescription:
      "Arshee Engineering and Innovations Pvt. Ltd. (AEI) serves as the Indian representative of VUZ a.s., bridging globally recognised testing standards with local engineering execution for India's growing railway industry.",
  },
];

export default function TechnicalPartners() {
  usePageMeta({
    title: "Technical Partners | Arshee Engineering & Innovations Pvt. Ltd.",
    description:
      "Strategic technical partnerships with VÚKV a.s. and VUZ a.s. (Czech Republic), ISO/IEC 17025 accredited railway testing laboratories represented in India by AEI.",
  });

  return (
    <Layout>
      {/* Hero & Overview */}
      <section className="pt-36 pb-20 md:pt-48 md:pb-24 bg-background overflow-hidden">
        <div className="container-tight text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-widest mb-5"
          >
            International Accredited Collaboration
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.05]"
          >
            Technical Partners
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-8 space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed text-left"
          >
            <p>
              Arshee Engineering and Innovations Pvt. Ltd. (AEI) has established strategic technical
              partnerships with two of Europe&apos;s most respected railway testing organisations,
              VÚKV a.s. and VUZ a.s., Czech Republic. These collaborations bring together
              international testing expertise, globally recognised standards, and strong local
              execution capabilities to deliver comprehensive railway engineering and testing
              solutions in India.
            </p>
            <p>
              VÚKV a.s. and VUZ a.s. are accredited testing laboratories specialising in railway
              vehicles, components, and container testing. Its testing capabilities cover applicable
              Technical Specifications for Interoperability (TSI), European Standards, and UIC
              requirements.
            </p>
            <p>
              As the Indian representative of VÚKV and VUZ, Arshee bridges European engineering
              expertise with India&apos;s growing railway industry. The relevant Czech accreditation
              and regulatory authorities for railway testing and type-approval activities recognise
              the test centres of our technical partners.
            </p>
            <p>
              Both laboratories are ISO/IEC 17025 accredited, providing a strong foundation for
              technically competent testing, reliable measurement, and internationally aligned
              quality practices.
            </p>
            <p>
              At Arshee, we complement this international expertise with a team of qualified and
              trained engineers and technicians, each bringing over 10 years of experience in
              specialised rolling-stock testing and engineering activities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Separate Partner Sections */}
      <section className="py-16 md:py-28 bg-surface border-y border-border/50">
        <div className="container-wide space-y-10 md:space-y-14">
          {/* Joint Field Collaboration Banner */}
          <AnimatedSection className="bg-background rounded-3xl overflow-hidden border border-border/60 shadow-sm">
            <div className="grid lg:grid-cols-12 items-center">
              <div className="lg:col-span-6 aspect-[4/3] lg:aspect-auto lg:h-full overflow-hidden bg-muted">
                <img
                  src={siteAssets.field.aeiVuzTrackside}
                  alt="AEI and VUZ engineers working together trackside on metro rolling stock"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="lg:col-span-6 p-8 md:p-12 space-y-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Joint On-Site Execution
                </p>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
                  European Testing Expertise Paired With Indian Field Teams
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Our partnerships with VÚKV a.s. and VUZ a.s. translate directly into coordinated
                  on-site trials in India—combining European accredited testing leadership with
                  AEI&apos;s trained local engineering and instrumentation specialists.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {partners.map((partner, index) => (
            <AnimatedSection
              key={partner.name}
              delay={index * 0.1}
              className="bg-background rounded-3xl p-8 md:p-12 lg:p-14 border border-border/60 shadow-sm"
            >
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                {/* Identity & Facility Column */}
                <div className="lg:col-span-5 space-y-5">
                  <div className="rounded-2xl bg-surface border border-border/60 p-6 md:p-7 space-y-5">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        Technical Partner 0{index + 1}
                      </span>
                      <div className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                        <MapPin className="w-3.5 h-3.5 text-foreground" />
                        <span>{partner.country}</span>
                      </div>
                    </div>

                    <div
                      className={`h-24 rounded-xl border border-border/60 flex items-center justify-center p-4 ${
                        partner.darkBadge ? "bg-neutral-950" : "bg-white"
                      }`}
                    >
                      <img
                        src={partner.logo}
                        alt={partner.logoAlt}
                        loading="lazy"
                        className="max-h-14 max-w-[80%] w-auto object-contain"
                      />
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                      {partner.name}
                    </h3>
                  </div>

                  <div className="rounded-2xl overflow-hidden border border-border/60 bg-surface">
                    <div className="aspect-[16/10] overflow-hidden bg-muted">
                      <img
                        src={partner.facilityImage}
                        alt={partner.facilityImageAlt}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="px-4 py-3">
                      <p className="text-xs font-medium text-muted-foreground">
                        {partner.facilityCaption}
                      </p>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-surface/60 border border-border/50 p-4 flex items-center gap-3">
                    <Award className="w-5 h-5 text-foreground shrink-0" />
                    <span className="text-sm font-medium text-foreground">
                      ISO/IEC 17025 Accredited Laboratory
                    </span>
                  </div>
                </div>

                {/* Details Column */}
                <div className="lg:col-span-7 space-y-7">
                  <div>
                    <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                      <ShieldCheck className="w-4 h-4 text-foreground" />
                      <span>Testing Capabilities</span>
                    </div>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                      {partner.capabilities}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-border/60">
                    <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                      <Award className="w-4 h-4 text-foreground" />
                      <span>Accreditation &amp; Recognition</span>
                    </div>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                      {partner.accreditation}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-border/60">
                    <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                      <Globe className="w-4 h-4 text-foreground" />
                      <span>Partnership with AEI</span>
                    </div>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                      {partner.partnershipDescription}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-foreground text-background">
        <div className="container-tight text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-background">
              Global Testing Standards, Delivered in India
            </h2>
            <p className="mt-5 text-lg text-background/75 max-w-2xl mx-auto leading-relaxed">
              Speak with our engineers to learn how our representation of VÚKV a.s. and VUZ a.s.
              supports your TSI, EN, UIC, and Indian railway validation requirements.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-9 py-4 rounded-full bg-background text-foreground font-medium text-base md:text-lg transition-transform duration-300 hover:scale-105"
              >
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services/validation-and-homologation"
                className="inline-flex items-center justify-center px-9 py-4 rounded-full border border-background/25 text-background font-medium text-base md:text-lg transition-colors hover:bg-background/10"
              >
                Explore Validation &amp; Homologation
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
