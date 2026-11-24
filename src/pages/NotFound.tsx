import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { usePageMeta } from "@/hooks/use-page-meta";

const NotFound = () => {
  const location = useLocation();

  usePageMeta({
    title: "Page Not Found | Arshee Engineering & Innovations Pvt. Ltd.",
    description: "The requested page could not be found on Arshee Engineering.",
  });

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="min-h-[75vh] flex items-center justify-center pt-28 pb-20 bg-background">
        <div className="container-tight text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            Error 404
          </p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            The page you are looking for does not exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-foreground text-background font-medium transition-transform hover:scale-105"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Return to Home
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
