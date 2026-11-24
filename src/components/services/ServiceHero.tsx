import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import type { ServiceDetailContent } from "@/data/services";
import { ServiceIcon } from "./ServiceIcon";

interface ServiceHeroProps {
  service: ServiceDetailContent;
}

/**
 * SGS-inspired Section 1: Service Hero with breadcrumb, title, concise summary,
 * primary enquiry CTA, and framed railway engineering image.
 */
export function ServiceHero({ service }: ServiceHeroProps) {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-background border-b border-border/50 overflow-hidden">
      <div className="container-wide">
        {/* Breadcrumb Navigation */}
        <motion.nav
          aria-label="Breadcrumb"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-muted-foreground mb-8 md:mb-10"
        >
          <Link to="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <Link to="/services" className="hover:text-foreground transition-colors">
            Services
          </Link>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <span className="text-foreground font-medium">{service.title}</span>
        </motion.nav>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-surface border border-border/60 mb-6"
            >
              <ServiceIcon iconKey={service.icon} className="w-4 h-4 text-foreground" />
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {service.eyebrow}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.06]"
            >
              {service.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.18 }}
              className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl"
            >
              {service.heroSummary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.25 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-foreground text-background font-medium text-sm md:text-base transition-all duration-300 hover:opacity-90 hover:scale-[1.03]"
              >
                Request Service Enquiry
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <a
                href="#capabilities"
                className="inline-flex items-center justify-center px-7 py-4 rounded-full border border-border bg-surface text-foreground font-medium text-sm md:text-base transition-colors hover:bg-muted"
              >
                Explore Capabilities
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="group relative rounded-3xl overflow-hidden bg-surface border border-border/60 aspect-[4/3] shadow-2xl shadow-foreground/5">
              <img
                src={service.heroImage}
                alt={service.heroImageAlt}
                className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                  service.heroObjectPosition === "top" ? "object-top" : "object-center"
                }`}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
