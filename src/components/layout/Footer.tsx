import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { servicesData } from "@/data/services";
import { siteAssets } from "@/lib/assets";

const companyLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Clientele", path: "/clientele" },
  { name: "Technical Partners", path: "/technical-partners" },
  { name: "Careers", path: "/careers" },
  { name: "Contact", path: "/contact" },
];

export function Footer() {
  return (
    <>
      {/* Careers Banner */}
      <section className="py-24 md:py-32 bg-surface overflow-hidden">
        <div className="container-tight text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Driven by a higher purpose?
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="mt-2 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-muted-foreground">
              Join us.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <motion.a
              href="mailto:Info@arshee-enginv.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center mt-12 px-8 md:px-10 py-4 md:py-5 rounded-full bg-foreground text-background font-medium text-base md:text-lg transition-colors hover:bg-foreground/90"
            >
              Send your CV to Info@arshee-enginv.com
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.a>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-20 md:py-24">
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
            {/* Column 1: Logo & Identity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <img
                  src={siteAssets.logo}
                  alt="Arshee Engineering & Innovations Pvt. Ltd."
                  className="h-16 w-auto object-contain"
                />
              </div>
              <p className="mt-4 text-background/85 font-medium text-sm">
                Arshee Engineering &amp; Innovations Pvt. Ltd.
              </p>
              <p className="mt-2 text-background/50 text-xs">
                Passionate About Precision Technology
              </p>
            </motion.div>

            {/* Column 2: Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.25, 0.4, 0.25, 1] }}
              viewport={{ once: true }}
            >
              <h4 className="font-medium mb-4 text-background/50 text-xs uppercase tracking-widest">
                Navigation
              </h4>
              <ul className="space-y-2.5 text-sm text-background/80">
                {companyLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="hover:text-background transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 3: Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.14, ease: [0.25, 0.4, 0.25, 1] }}
              viewport={{ once: true }}
            >
              <h4 className="font-medium mb-4 text-background/50 text-xs uppercase tracking-widest">
                Services
              </h4>
              <ul className="space-y-2.5 text-sm text-background/80">
                {servicesData.map((service) => (
                  <li key={service.slug}>
                    <Link
                      to={`/services/${service.slug}`}
                      className="hover:text-background transition-colors"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 4: Address & Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h4 className="font-medium mb-3 text-background/50 text-xs uppercase tracking-widest">
                  Address
                </h4>
                <p className="text-sm text-background/80 leading-relaxed">
                  6/41 Netaji Nagar,
                  <br />
                  Near Netaji Nagar Women&apos;s College,
                  <br />
                  Kolkata - 700091
                </p>
              </div>

              <div>
                <h4 className="font-medium mb-3 text-background/50 text-xs uppercase tracking-widest">
                  Contact
                </h4>
                <div className="space-y-2 text-sm text-background/80">
                  <p>
                    <a
                      href="mailto:Info@arshee-enginv.com"
                      className="inline-block hover:text-background transition-colors"
                    >
                      Info@arshee-enginv.com
                    </a>
                  </p>
                  <p>
                    <a
                      href="tel:+913345180382"
                      className="inline-block hover:text-background transition-colors"
                    >
                      033 451 80382
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            viewport={{ once: true }}
            className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <p className="text-sm text-background/45 text-center md:text-left">
              © {new Date().getFullYear()} Arshee Engineering &amp; Innovations Pvt. Ltd.
            </p>
            <p className="text-sm text-background/45">Make in India Initiative</p>
          </motion.div>
        </div>
      </footer>
    </>
  );
}
