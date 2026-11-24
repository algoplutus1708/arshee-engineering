import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { servicesData } from "@/data/services";
import { siteAssets } from "@/lib/assets";

const primaryLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Clientele", path: "/clientele" },
  { name: "Technical Partners", path: "/technical-partners" },
  { name: "Careers", path: "/careers" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const location = useLocation();

  const isHome = location.pathname === "/";
  const showNavbarBackground = isScrolled || !isHome;
  const isServicesActive =
    location.pathname === "/services" || location.pathname.startsWith("/services/");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
    setIsMobileServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesDropdownOpen(false);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsServicesDropdownOpen(false);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const linkClass = (active: boolean) =>
    `text-sm font-medium whitespace-nowrap transition-all duration-300 hover:opacity-70 ${
      showNavbarBackground
        ? active
          ? "text-foreground"
          : "text-muted-foreground"
        : active
          ? "text-white"
          : "text-white/75"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showNavbarBackground ? "glass-nav py-2.5" : "bg-transparent py-4"
      }`}
    >
      <nav aria-label="Main navigation" className="container-wide flex items-center justify-between gap-4">
        {/* Brand */}
        <Link
          to="/"
          className="flex items-center gap-2.5 shrink-0 transition-opacity hover:opacity-90"
        >
          <img
            src={siteAssets.logo}
            alt="Arshee Engineering Logo"
            className={`h-9 w-auto object-contain transition-all duration-300 ${
              showNavbarBackground ? "" : "drop-shadow-[0_1px_6px_rgba(0,0,0,0.45)]"
            }`}
          />
          <span
            className={`text-base sm:text-lg font-semibold tracking-tight whitespace-nowrap transition-colors duration-300 ${
              showNavbarBackground ? "text-foreground" : "text-white"
            }`}
          >
            Arshee Engineering
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-7">
          <ul className="flex items-center gap-5 xl:gap-7">
            <li>
              <Link to="/" className={linkClass(location.pathname === "/")}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={linkClass(location.pathname === "/about")}>
                About Us
              </Link>
            </li>

            {/* Services Dropdown */}
            <li
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <div className="flex items-center gap-1">
                <Link to="/services" className={linkClass(isServicesActive)}>
                  Services
                </Link>
                <button
                  type="button"
                  onClick={() => setIsServicesDropdownOpen((prev) => !prev)}
                  aria-label="Toggle services submenu"
                  aria-expanded={isServicesDropdownOpen}
                  className={`p-1 rounded-md transition-colors ${
                    showNavbarBackground
                      ? "text-muted-foreground hover:text-foreground"
                      : "text-white/75 hover:text-white"
                  }`}
                >
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      isServicesDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {isServicesDropdownOpen && (
                <div className="absolute left-0 top-full pt-3 w-72 z-50">
                  <div className="rounded-2xl bg-background/95 backdrop-blur-xl border border-border shadow-2xl p-2">
                    <Link
                      to="/services"
                      className={`block px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                        location.pathname === "/services"
                          ? "bg-surface text-foreground"
                          : "text-foreground hover:bg-surface"
                      }`}
                    >
                      All Services Overview
                    </Link>
                    <div className="my-1.5 border-t border-border/60" />
                    <div className="space-y-0.5">
                      {servicesData.map((service) => {
                        const itemPath = `/services/${service.slug}`;
                        const active = location.pathname === itemPath;
                        return (
                          <Link
                            key={service.slug}
                            to={itemPath}
                            className={`block px-3.5 py-2 rounded-xl text-sm transition-colors ${
                              active
                                ? "bg-surface font-medium text-foreground"
                                : "text-muted-foreground hover:bg-surface hover:text-foreground"
                            }`}
                          >
                            {service.title}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </li>

            {primaryLinks.slice(2).map((link) => (
              <li key={link.path}>
                <Link to={link.path} className={linkClass(location.pathname === link.path)}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <ThemeToggle isScrolled={showNavbarBackground} />
        </div>

        {/* Mobile Controls */}
        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggle isScrolled={showNavbarBackground} />
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className={`p-2 transition-colors duration-300 ${
              showNavbarBackground ? "text-foreground" : "text-white"
            }`}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 glass-nav border-t border-border overflow-y-auto transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="container-wide py-6 flex flex-col gap-3">
          <li>
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block py-1.5 text-base font-medium ${
                location.pathname === "/" ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block py-1.5 text-base font-medium ${
                location.pathname === "/about" ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              About Us
            </Link>
          </li>

          <li>
            <div className="flex items-center justify-between py-1.5">
              <Link
                to="/services"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-base font-medium ${
                  isServicesActive ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                Services
              </Link>
              <button
                type="button"
                onClick={() => setIsMobileServicesOpen((prev) => !prev)}
                aria-label="Expand service pages"
                aria-expanded={isMobileServicesOpen}
                className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground"
              >
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isMobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            {isMobileServicesOpen && (
              <ul className="pl-4 mt-1 mb-2 border-l border-border space-y-2">
                {servicesData.map((service) => {
                  const itemPath = `/services/${service.slug}`;
                  return (
                    <li key={service.slug}>
                      <Link
                        to={itemPath}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block py-1 text-sm ${
                          location.pathname === itemPath
                            ? "text-foreground font-medium"
                            : "text-muted-foreground"
                        }`}
                      >
                        {service.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>

          {primaryLinks.slice(2).map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-1.5 text-base font-medium ${
                  location.pathname === link.path ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
