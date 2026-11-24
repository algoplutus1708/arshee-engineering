import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { ServiceDetailContent } from "@/data/services";
import { ServiceIcon } from "./ServiceIcon";

interface ServiceCardProps {
  service: ServiceDetailContent;
  index: number;
  showImage?: boolean;
}

/**
 * Reusable card for displaying a service summary and linking to its detail page.
 */
export function ServiceCard({ service, index, showImage = false }: ServiceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: Math.min(index * 0.07, 0.35), ease: [0.25, 0.4, 0.25, 1] }}
      className="group flex flex-col justify-between bg-surface rounded-3xl border border-border/60 overflow-hidden transition-all duration-300 hover:border-foreground/25 hover:shadow-2xl hover:shadow-foreground/5 hover:-translate-y-1"
    >
      {showImage && (
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
          <img
            src={service.heroImage}
            alt={service.heroImageAlt}
            className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
              service.heroObjectPosition === "top" ? "object-top" : "object-center"
            }`}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/85 backdrop-blur-md text-xs font-medium text-foreground border border-border/50">
            0{index + 1}
          </span>
        </div>
      )}

      <div className="flex flex-col flex-1 justify-between p-8 md:p-9">
        <div>
          <div className="flex items-center justify-between mb-6">
            <div className="w-12 h-12 rounded-2xl bg-background border border-border/60 flex items-center justify-center text-foreground group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
              <ServiceIcon iconKey={service.icon} className="w-6 h-6" />
            </div>
            {!showImage && (
              <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                0{index + 1}
              </span>
            )}
          </div>

          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-2">
            {service.eyebrow}
          </p>
          <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3 tracking-tight">
            {service.title}
          </h3>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            {service.shortDescription}
          </p>
        </div>

        <div className="mt-8 pt-5 border-t border-border/60">
          <Link
            to={`/services/${service.slug}`}
            className="inline-flex items-center text-sm font-medium text-foreground group-hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md"
          >
            Explore Service
            <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
