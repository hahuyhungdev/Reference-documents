import { SEO } from "@config/env";
import NextHead from "next/head";
import React from "react";

export type SEOHeadProps = {
  seoTitle?: string;
  seoDescription?: string;
  seoURL?: string;
  seoImage?: string;
  favicon?: string;
};

/**
 * SEO Head component
 */
export const SEOHead: React.FC<SEOHeadProps> = ({
  seoTitle,
  seoDescription = SEO.description,
  seoURL = SEO.url,
  seoImage = SEO.image,
  favicon = SEO.favicon,
  children,
}) => {
  return (
    <NextHead>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{seoTitle ? `${seoTitle} - ${SEO.title}` : SEO.title}</title>
      <meta name="description" content={seoDescription} />

      <link rel="shortcut icon" href={favicon} />
      <link rel="icon" href={favicon} />

      <meta name="twitter:site" content={seoURL} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={seoImage} />

      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:url" content={seoURL} />
      <meta property="og:image" content={seoImage} />

      {/* Additional content */}
      {children}
    </NextHead>
  );
};

export default SEOHead;
