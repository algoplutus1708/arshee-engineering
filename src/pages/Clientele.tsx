import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { SectionHeading } from "@/components/common/SectionHeading";
import { siteAssets } from "@/lib/assets";
import { usePageMeta } from "@/hooks/use-page-meta";

interface ClientOrganisation {
  name: string;
  category: string;
  logo: string;
  logoAlt: string;
  darkBadge?: boolean;
}

const clients: ClientOrganisation[] = [
  {
    name: "BEML",
    category: "Rolling Stock & Rail Systems",
    logo: siteAssets.logos.beml,
    logoAlt: "BEML Limited official logo",
  },
  {
    name: "RDSO",
    category: "Research Designs & Standards Organisation",
    logo: siteAssets.logos.rdso,
    logoAlt: "Research Designs & Standards Organisation (RDSO) official logo",
  },
  {
    name: "Indian Railways",
    category: "National Rail Network",
    logo: siteAssets.logos.indianRailways,
    logoAlt: "Indian Railways official emblem",
  },
  {
    name: "Titagarh Rail Systems Limited",
    category: "Rolling Stock Manufacturer",
    logo: siteAssets.logos.titagarh,
    logoAlt: "Titagarh Rail Systems Limited official logo",
  },
  {
    name: "Alstom",
    category: "Rail Transport & Mobility Systems",
    logo: siteAssets.logos.alstom,
    logoAlt: "Alstom official logo",
  },
  {
    name: "Kinet",
    category: "Rolling Stock & Rail Technology",
    logo: siteAssets.logos.kinet,
    logoAlt: "Kinet Railway Solutions official logo",
    darkBadge: true,
  },
];

export default function Clientele() {
  usePageMeta({
    title: "Clientele | Arshee Engineering & Innovations Pvt. Ltd.",
    description:
      "Arshee Engineering's esteemed clientele includes RDSO, Indian Railways, Alstom, Titagarh Rail Systems Limited, BEML, Kinet, and leading railway organisations.",
  });

  return (
    <Layout>
      {/* Hero / Introduction */}
      <section className="pt-36 pb-20 md:pt-48 md:pb-24 bg-background overflow-hidden">
        <div className="container-tight text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-widest mb-5"
          >
            Trusted Industry Relationships
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.05]"
          >
            Our Esteemed Clientele
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-8 space-y-6 text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed"
          >
            <p>
              We take pride in our association with some of the most respected names in the railway
              and engineering industry. Our growing clientele includes leading railway
              organisations, rolling stock manufacturers and technology providers such as RDSO,
              Indian Railways, Alstom, Titagarh Rail Systems Limited, BEML, Kinet and many more.
            </p>
            <p>
              These valued associations reflect the trust our clients place in our engineering
              capabilities, technical expertise and commitment to delivering quality solutions. We
              look forward to building lasting partnerships and contributing to the success of
              India&apos;s evolving railway industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Logo Grid */}
      <section className="py-16 md:py-28 bg-surface border-y border-border/50">
        <div className="container-wide">
          <AnimatedSection className="mb-12 md:mb-16">
            <SectionHeading
              eyebrow="Organisations We Serve"
              title="Key Clients & Railway Leaders"
              description="Collaborating with national railway authorities, rolling stock manufacturers, and global mobility technology providers across India."
            />
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clients.map((client, index) => (
              <AnimatedSection
                key={client.name}
                delay={index * 0.06}
                className="group bg-background rounded-3xl p-8 md:p-9 border border-border/60 flex flex-col justify-between transition-all duration-300 hover:border-foreground/25 hover:-translate-y-1 hover:shadow-xl hover:shadow-foreground/5"
              >
                <div
                  className={`h-28 w-full rounded-2xl border border-border/60 flex items-center justify-center p-5 mb-7 ${
                    client.darkBadge ? "bg-neutral-950" : "bg-white"
                  }`}
                >
                  <img
                    src={client.logo}
                    alt={client.logoAlt}
                    loading="lazy"
                    className="max-h-16 max-w-[85%] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="text-xl font-semibold tracking-tight text-foreground">
                      {client.name}
                    </h3>
                    <span className="text-xs font-semibold tracking-widest text-muted-foreground">
                      0{index + 1}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{client.category}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Sector Footprint Showcase */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-wide">
          <AnimatedSection className="mb-12">
            <SectionHeading
              eyebrow="Rail & Urban Mobility"
              title="Supporting Mainline & Metro Programmes Across India"
              description="Contributing to modern passenger rolling stock, high-speed trainsets, and urban metro systems."
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                src: siteAssets.stock.vandeBharatMumbai,
                alt: "Indian Railways Vande Bharat Express semi-high-speed trainset",
                caption: "Mainline & Vande Bharat Rolling Stock",
              },
              {
                src: siteAssets.stock.vandeBharatSleeper,
                alt: "Vande Bharat Sleeper trainset rake at railway yard",
                caption: "Next-Generation Sleeper & Passenger Rakes",
              },
              {
                src: siteAssets.stock.delhiMetro,
                alt: "Modern Metro Rail rolling stock at urban station platform",
                caption: "Urban Metro Rail Systems",
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
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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

      {/* CTA */}
      <section className="py-20 md:py-28 bg-foreground text-background">
        <div className="container-tight text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-background">
              Build a Lasting Engineering Partnership
            </h2>
            <p className="mt-5 text-lg text-background/75 max-w-2xl mx-auto leading-relaxed">
              Connect with our team to explore how AEI can support your upcoming rolling stock
              testing, validation, retrofitment, or engineering requirements.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center mt-10 px-9 py-4 rounded-full bg-background text-foreground font-medium text-base md:text-lg transition-transform duration-300 hover:scale-105"
            >
              Partner With Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
