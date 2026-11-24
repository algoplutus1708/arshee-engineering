import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Compass,
  Gauge,
  Globe,
  ShieldCheck,
  Train,
  Wrench,
} from "lucide-react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ServiceCard } from "@/components/services/ServiceCard";
import { servicesData } from "@/data/services";
import { siteAssets } from "@/lib/assets";
import { usePageMeta } from "@/hooks/use-page-meta";

const engineeringCapabilities = [
  {
    icon: Gauge,
    title: "Rolling Stock Testing & Commissioning",
    description:
      "End-to-end static and dynamic verification covering electrical, braking, HVAC, traction, ride comfort, and signalling subsystems.",
  },
  {
    icon: ShieldCheck,
    title: "Validation, Homologation & Standards",
    description:
      "Structured conformity assessment and compliance evidence aligned with RDSO, EN, IEC, UIC, and TSI requirements.",
  },
  {
    icon: Train,
    title: "Vande Bharat & Metro Rail Integration",
    description:
      "Specialised modern train assembly, subsystem integration, and retrofitting execution for next-generation passenger fleets.",
  },
  {
    icon: Compass,
    title: "Engineering Design & Simulation",
    description:
      "Mechanical, electrical, and TCMS engineering paired with FEA, multibody dynamics, and traction/braking modelling.",
  },
  {
    icon: Wrench,
    title: "Precision Instrumentation & Calibration",
    description:
      "Strain gauging, DAQ systems, sensor layouts, and calibrated load bench testing up to 4,000 kN compression capacity.",
  },
  {
    icon: Globe,
    title: "Global Expertise, Local Execution",
    description:
      "Indian representation of European ISO/IEC 17025 accredited laboratories VÚKV a.s. and VUZ a.s. backed by experienced local engineers.",
  },
];

const clientelePreview = [
  { name: "RDSO", logo: siteAssets.logos.rdso, darkBadge: false },
  { name: "Indian Railways", logo: siteAssets.logos.indianRailways, darkBadge: false },
  { name: "Alstom", logo: siteAssets.logos.alstom, darkBadge: false },
  { name: "Titagarh Rail Systems Limited", logo: siteAssets.logos.titagarh, darkBadge: false },
  { name: "BEML", logo: siteAssets.logos.beml, darkBadge: false },
  { name: "Kinet", logo: siteAssets.logos.kinet, darkBadge: true },
];

function TechnologyShowcaseCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const slides = siteAssets.workshopStages;

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full aspect-video rounded-3xl overflow-hidden bg-neutral-900 shadow-2xl border border-border/50">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          initial={{ x: direction > 0 ? "100%" : "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction < 0 ? "100%" : "-100%", opacity: 0 }}
          transition={{ x: { type: "spring", stiffness: 280, damping: 30 }, opacity: { duration: 0.35 } }}
          className="absolute inset-0"
        >
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous instrumentation stage"
        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center text-white hover:bg-white/25 transition-colors"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next instrumentation stage"
        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center text-white hover:bg-white/25 transition-colors"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 z-20 flex flex-col sm:flex-row sm:items-end justify-between gap-4 pointer-events-none">
        <div>
          <p className="text-white/75 text-xs md:text-sm uppercase tracking-widest mb-1.5">
            {slides[currentSlide].subtitle}
          </p>
          <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold">
            {slides[currentSlide].title}
          </h3>
        </div>
        <div className="flex items-center gap-1.5 pointer-events-auto">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              onClick={() => {
                setDirection(index > currentSlide ? 1 : -1);
                setCurrentSlide(index);
              }}
              aria-label={`View ${slide.title}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentSlide ? "w-6 bg-white" : "w-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  usePageMeta({
    title: "Arshee Engineering & Innovations Pvt. Ltd. | Passionate About Precision Technology",
    description:
      "Comprehensive railway engineering and testing solutions: Testing & Commissioning, Validation & Homologation, Technical Documentation, Retrofitment, Consulting, and Equipment Rental.",
  });

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <Layout>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
      >
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <img
            src={siteAssets.vandeBharatHero}
            alt="Vande Bharat Express modern Indian railway rolling stock in motion"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/75" />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs md:text-sm font-medium uppercase tracking-[0.22em] text-white/80 mb-5"
          >
            Arshee Engineering &amp; Innovations Pvt. Ltd.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="text-4xl sm:text-6xl lg:text-[78px] font-bold text-white leading-[1.05] tracking-tight"
          >
            Passionate About Precision Technology
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-7 text-base sm:text-lg md:text-xl text-white/90 font-light max-w-3xl mx-auto leading-relaxed"
          >
            We are an emerging force in the railway industry, driven by innovation, technical
            excellence, and a commitment to quality. Backed by a team of experienced professionals,
            we deliver cutting-edge engineering solutions tailored to meet our clients&apos; evolving
            requirements.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-black rounded-full font-medium text-base md:text-lg hover:scale-105 transition-transform duration-300"
            >
              Explore Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/25 rounded-full font-medium text-base md:text-lg hover:bg-white/20 transition-colors duration-300"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Rolling Stock & Urban Mobility Expertise Band */}
      <section className="py-16 md:py-24 bg-background border-b border-border/50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <AnimatedSection className="lg:col-span-7 space-y-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Railway &amp; Urban Mobility Expertise
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-tight">
                Advancing India&apos;s Railway Testing, Integration &amp; Rolling Stock Readiness
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Our expertise encompasses state-of-the-art testing and validation services for
                railway rolling stock and infrastructure, ensuring compliance with Indian and
                international standards. We also specialise in modern train assembly, integration,
                and retrofitting services for Vande Bharat trains and Metro Rail systems.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                With a strong focus on precision, reliability, safety, and customer satisfaction, we
                strive to contribute to the advancement of India&apos;s railway and urban mobility
                sectors.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.12} className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-surface p-6 border border-border/60">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                    Founded
                  </p>
                  <p className="text-3xl font-bold text-foreground">2020</p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Indian engineering &amp; railway testing specialist
                  </p>
                </div>
                <div className="rounded-2xl bg-surface p-6 border border-border/60">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                    Standards
                  </p>
                  <p className="text-2xl font-bold text-foreground">IEC · EN · RDSO</p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    UIC &amp; TSI aligned methodologies
                  </p>
                </div>
                <div className="col-span-2 rounded-2xl bg-surface p-6 border border-border/60">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                    Focus Platforms
                  </p>
                  <p className="text-lg font-semibold text-foreground">
                    Vande Bharat Trains, Metro Rail Systems &amp; Mainline Rolling Stock
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 md:py-28 bg-foreground text-background">
        <div className="container-tight text-center">
          <AnimatedSection>
            <p className="text-xs md:text-sm font-medium uppercase tracking-widest text-background/60 mb-4">
              Purpose &amp; Direction
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-background">
              Our Mission
            </h2>
            <p className="mt-7 text-xl md:text-2xl text-background/85 font-light leading-relaxed text-balance">
              &ldquo;To empower our clients with engineering excellence, innovative solutions, and
              dependable execution—driving the future of safe, efficient, and sustainable rail
              mobility.&rdquo;
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Six Services Overview */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container-wide">
          <AnimatedSection className="mb-14 md:mb-16">
            <SectionHeading
              eyebrow="What We Do"
              title="Comprehensive Railway Engineering Services"
              description="From static and dynamic testing to homologation, documentation, retrofitment, advisory, and calibrated equipment rental."
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {servicesData.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>

          <AnimatedSection className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-border bg-surface text-foreground font-medium text-base hover:bg-foreground hover:text-background transition-colors duration-300"
            >
              View Full Services Portfolio
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* About Arshee Introduction */}
      <section className="py-20 md:py-28 bg-surface border-y border-border/50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection>
              <div className="relative rounded-3xl overflow-hidden bg-background border border-border/60 aspect-[4/3] shadow-xl">
                <img
                  src={siteAssets.field.aeiVuzTrackside}
                  alt="Arshee Engineering field engineers collaborating with technical partners trackside"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                About Arshee Engineering
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground leading-tight">
                Global Standards. Local Execution.
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Founded in 2020, Arshee Engineering and Innovations Pvt. Ltd. (AEI) delivers
                innovative, reliable, and cost-effective engineering solutions across testing and
                commissioning, validation and homologation, precision engineering, and maintenance.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                We adopt an end-to-end approach—from custom testing strategies and instrumentation
                layouts to execution, analysis, and certification support—combining technical
                rigour with operational agility.
              </p>
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center text-base font-medium text-foreground hover:opacity-75 transition-opacity"
                >
                  Read Our Story
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Engineering Capabilities & Technical Expertise */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container-wide">
          <AnimatedSection className="mb-14 md:mb-16">
            <SectionHeading
              eyebrow="Technical Expertise"
              title="Engineering Capabilities Across the Rolling Stock Lifecycle"
              description="Multidisciplinary engineering capabilities combining instrumentation, standards compliance, and on-track validation."
            />
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {engineeringCapabilities.map((item, idx) => (
              <AnimatedSection
                key={item.title}
                delay={idx * 0.05}
                className="bg-surface rounded-3xl p-8 border border-border/60 transition-all duration-300 hover:border-foreground/20 hover:shadow-lg hover:shadow-foreground/5"
              >
                <div className="w-12 h-12 rounded-2xl bg-background border border-border/60 flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Field Execution Showcase */}
      <section className="py-20 md:py-28 bg-surface border-y border-border/50">
        <div className="container-wide space-y-20">
          <div>
            <AnimatedSection className="mb-12">
              <SectionHeading
                eyebrow="AEI in the Field"
                title="Real-World Rolling Stock Testing & Execution"
                description="From cab commissioning and underframe inspection to multi-channel onboard telemetry and metro line trials."
              />
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  src: siteAssets.field.cabConsoleTesting,
                  alt: "AEI engineer inspecting cab control indicators and test documentation",
                  title: "Cab Control & Diagnostics",
                  top: true,
                },
                {
                  src: siteAssets.field.dewesoftLiveAnalysis,
                  alt: "Live DewesoftX power, frequency, and regenerative energy monitoring during rail trials",
                  title: "Live Power & Energy Telemetry",
                  top: false,
                },
                {
                  src: siteAssets.field.teamBenchCollab,
                  alt: "AEI engineers collaborating at onboard instrumentation setup inside passenger coach",
                  title: "Onboard Instrumentation Setup",
                  top: true,
                },
                {
                  src: siteAssets.field.underframePitInspection,
                  alt: "AEI engineer inspecting underframe brake equipment in depot maintenance pit",
                  title: "Underframe & Brake Inspection",
                  top: true,
                },
                {
                  src: siteAssets.field.teamMetroStation,
                  alt: "AEI and international testing engineers at Ashram Metro Station",
                  title: "Metro Rail Field Trials",
                  top: true,
                },
                {
                  src: siteAssets.field.daqHardware,
                  alt: "Multi-channel Dewesoft DAQ hardware deployed onboard rolling stock",
                  title: "Precision DAQ Hardware",
                  top: false,
                },
              ].map((photo, idx) => (
                <AnimatedSection
                  key={photo.title}
                  delay={idx * 0.05}
                  className="group rounded-3xl overflow-hidden bg-background border border-border/60"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                        photo.top ? "object-top" : "object-center"
                      }`}
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-sm font-medium text-foreground">{photo.title}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          <div>
            <AnimatedSection className="mb-12">
              <SectionHeading
                eyebrow="Technology Showcase"
                title="Instrumented Wheelsets & Precision Metrology"
                description="A closer look at our specialised wheelset instrumentation, strain gauge integration, telemetry assembly, and traceable calibration workflow."
              />
            </AnimatedSection>

            <AnimatedSection>
              <TechnologyShowcaseCarousel />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Clientele & Technical Partners Preview */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container-wide space-y-12">
          {/* Clientele Preview */}
          <AnimatedSection className="rounded-3xl bg-surface p-8 md:p-12 border border-border/60">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                  Clientele Preview
                </p>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
                  Trusted by Railway Leaders
                </h2>
                <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                  Serving national railway authorities, rolling stock manufacturers, and global
                  mobility technology providers across India.
                </p>
                <Link
                  to="/clientele"
                  className="inline-flex items-center mt-6 text-sm font-medium text-foreground hover:opacity-75 transition-opacity"
                >
                  Explore Our Clientele
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>

              <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3.5">
                {clientelePreview.map((org) => (
                  <div
                    key={org.name}
                    className="rounded-2xl bg-background border border-border/60 p-3.5 flex flex-col items-center justify-center gap-2.5 text-center"
                  >
                    <div
                      className={`h-14 w-full rounded-xl border border-border/50 flex items-center justify-center p-2 ${
                        org.darkBadge ? "bg-neutral-950" : "bg-white"
                      }`}
                    >
                      <img
                        src={org.logo}
                        alt={`${org.name} logo`}
                        loading="lazy"
                        className="max-h-10 max-w-[85%] w-auto object-contain"
                      />
                    </div>
                    <span className="text-xs font-medium text-foreground leading-snug">
                      {org.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Technical Partners Preview */}
          <AnimatedSection
            delay={0.08}
            className="rounded-3xl bg-surface p-8 md:p-12 border border-border/60"
          >
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                  Technical Partners
                </p>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
                  Strategic European Testing Alliances
                </h2>
                <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                  AEI represents VÚKV a.s. and VUZ a.s. (Czech Republic) in India—ISO/IEC 17025
                  accredited laboratories specialising in TSI, EN, and UIC railway vehicle and
                  component testing.
                </p>
                <Link
                  to="/technical-partners"
                  className="inline-flex items-center mt-6 text-sm font-medium text-foreground hover:opacity-75 transition-opacity"
                >
                  View Technical Partners
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>

              <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
                {[
                  {
                    name: "VÚKV a.s.",
                    country: "Czech Republic",
                    note: "ISO/IEC 17025 Accredited",
                    logo: siteAssets.logos.vukv,
                    darkBadge: false,
                  },
                  {
                    name: "VUZ a.s.",
                    country: "Czech Republic",
                    note: "ISO/IEC 17025 Accredited",
                    logo: siteAssets.logos.vuz,
                    darkBadge: true,
                  },
                ].map((partner) => (
                  <div
                    key={partner.name}
                    className="rounded-2xl bg-background border border-border/60 p-5 flex flex-col justify-between gap-4"
                  >
                    <div
                      className={`h-16 w-full rounded-xl border border-border/50 flex items-center justify-center p-3 ${
                        partner.darkBadge ? "bg-neutral-950" : "bg-white"
                      }`}
                    >
                      <img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        loading="lazy"
                        className="max-h-10 max-w-[80%] w-auto object-contain"
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-lg font-semibold text-foreground">{partner.name}</h3>
                        <span className="text-xs text-muted-foreground">{partner.country}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{partner.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Call to Action */}
      <section className="py-20 md:py-28 bg-foreground text-background">
        <div className="container-tight text-center">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-background/60 mb-4">
              Start a Conversation
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-background">
              Ready to Partner on Your Next Railway Programme?
            </h2>
            <p className="mt-5 text-lg text-background/75 max-w-2xl mx-auto leading-relaxed">
              Connect with our engineering team for testing and commissioning, homologation support,
              technical consulting, retrofitment, or calibrated equipment rental.
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
                to="/services"
                className="inline-flex items-center justify-center px-9 py-4 rounded-full border border-background/25 text-background font-medium text-base md:text-lg transition-colors hover:bg-background/10"
              >
                Explore Services
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
