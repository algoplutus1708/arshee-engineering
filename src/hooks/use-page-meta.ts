import { useEffect } from "react";

interface PageMetaOptions {
  title: string;
  description: string;
}

/**
 * Updates document title and meta description tags for the active route.
 */
export function usePageMeta({ title, description }: PageMetaOptions) {
  useEffect(() => {
    document.title = title;

    const updateMeta = (selector: string, attribute: "name" | "property", key: string, content: string) => {
      let element = document.querySelector<HTMLMetaElement>(selector);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    updateMeta('meta[name="description"]', "name", "description", description);
    updateMeta('meta[property="og:title"]', "property", "og:title", title);
    updateMeta('meta[property="og:description"]', "property", "og:description", description);
  }, [title, description]);
}
