import { Meta } from "@once-ui-system/core";
import type { Metadata } from "next";

type SiteMetadataOptions = {
  title: string;
  description: string;
  baseURL: string;
  path?: string;
  type?: "website" | "article";
  image?: string;
  publishedTime?: string;
  author?: {
    name: string;
    url?: string;
  };
  robots?: string;
  noindex?: boolean;
  nofollow?: boolean;
};

export function generateSiteMetadata(options: SiteMetadataOptions): Metadata {
  const canonical = new URL(options.path || "/", options.baseURL).toString();

  return Meta.generate({
    ...options,
    canonical,
    alternates: [{ hrefLang: "en", href: canonical }],
  });
}
