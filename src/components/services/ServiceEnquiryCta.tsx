import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";
import { AnimatedSection } from "@/components/common/AnimatedSection";

interface ServiceEnquiryCtaProps {
  title?: string;
  description?: string;
  serviceName?: string;
}

/**
 * SGS-inspired Section 6: Premium enquiry CTA linking to the existing Contact page.
 */
export function ServiceEnquiryCta({
  title,
  description,
  serviceName,
}: ServiceEnquiryCtaProps) {
  const headingText =
    title ??
    (serviceName
      ? `Discuss Your ${serviceName} Requirements`
      : "Discuss Your Railway Engineering Requirements");

  const bodyText =
    description ??
    "Connect with Arshee Engineering's specialists for tailored testing strategies, technical proposals, compliance support, or project schedules.";

  return (
    <section className="py-20 md:py-28 bg-foreground text-background">
      <div className="container-tight text-center">
        <AnimatedSection>
          <p className="text-xs font-semibold uppercase tracking-widest text-background/60 mb-4">
            Enquiry &amp; Consultation
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-background">
            {headingText}
          </h2>
          <p className="mt-5 text-base md:text-lg text-background/75 max-w-2xl mx-auto leading-relaxed">
            {bodyText}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-9 py-4 rounded-full bg-background text-foreground font-medium text-base md:text-lg transition-transform duration-300 hover:scale-105"
            >
              Contact Our Engineering Team
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href="mailto:Info@arshee-enginv.com"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-background/25 text-background font-medium text-base transition-colors hover:bg-background/10"
            >
              <Mail className="mr-2 w-4 h-4" />
              Info@arshee-enginv.com
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
