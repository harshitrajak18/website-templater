// ============================================================
// src/type/type.ts
// Core domain types — describes WHAT the website contains.
// No presentation/styling concerns here.
// ============================================================

export type SectionType =
  | "navbar"
  | "hero"
  | "testimonials"
  | "features"
  | "footer";


// --------------------
// Navbar
// --------------------

export interface NavbarMetadata {
  type: "navbar";
  /** The brand/site name shown in the top-left */
  name: string;
  /** Optional CTA button */
  button?: {
    text: string;
    href: string;
  };
}


// --------------------
// Hero
// --------------------

export interface HeroMetadata {
  type: "hero";
  eyebrow?: string;
  title: string;
  description?: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  image?: {
    enabled?: boolean;
    src?: string;
    alt?: string;
  };
}


// --------------------
// Features
// --------------------

export interface FeatureItem {
  icon?: string;
  title: string;
  description: string;
}

export interface FeaturesMetadata {
  type: "features";
  eyebrow?: string;
  title?: string;
  description?: string;
  items: FeatureItem[];
}


// --------------------
// Testimonials
// --------------------

export interface TestimonialItem {
  quote: string;
  name: string;
  role?: string;
  company?: string;
}

export interface TestimonialsMetadata {
  type: "testimonials";
  title?: string;
  description?: string;
  items: TestimonialItem[];
}


// --------------------
// Footer
// --------------------

export interface FooterLink {
  text: string;
  href: string;
}

export interface FooterLinkGroup {
  heading: string;
  links: FooterLink[];
}

export interface FooterMetadata {
  type: "footer";
  name: string;
  tagline?: string;
  linkGroups?: FooterLinkGroup[];
  copyright?: string;
}


// --------------------
// Section union
// --------------------

export type SectionMetadata =
  | NavbarMetadata
  | HeroMetadata
  | FeaturesMetadata
  | TestimonialsMetadata
  | FooterMetadata;


// --------------------
// Website root
// --------------------

export interface WebsiteMetadata {
  sections: SectionMetadata[];
}
