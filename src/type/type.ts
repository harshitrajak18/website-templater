// ============================================================
// src/type/type.ts
// Core domain types for the multi-page website templating engine.
// Describes WHAT the website contains — no presentation concerns.
// ============================================================

// ─── Shared Types ──────────────────────────────────────────

/** A navigation link — internal (page) or external (href) */
export interface LinkItem {
  label: string;
  /** Internal page route, e.g. "/about" */
  page?: string;
  /** External URL, e.g. "https://example.com" */
  href?: string;
}

/** A button — internal (page) or external (href) */
export interface ButtonItem {
  text: string;
  /** Internal page route */
  page?: string;
  /** External URL */
  href?: string;
}

/** Link after modifier resolves page→href */
export interface ResolvedLink {
  label: string;
  href: string;
}

/** Button after modifier resolves page→href */
export interface ResolvedButton {
  text: string;
  href: string;
}

/** Social media link */
export interface SocialLinkItem {
  platform: string; // "github" | "linkedin" | "twitter" | "instagram" | "youtube" | "facebook" | etc.
  url: string;
  label?: string;
}

/** Image reference */
export interface ImageItem {
  src: string;
  alt?: string;
}


// ─── Section Type Registry ─────────────────────────────────

export type SectionType =
  | "navbar"
  | "hero"
  | "features"
  | "featureGrid"
  | "testimonials"
  | "cta"
  | "pricing"
  | "faq"
  | "footer"
  | "stats"
  | "logoCloud"
  | "team"
  | "contact"
  | "richText"
  | "imageText"
  | "services"
  | "steps"
  | "gallery"
  | "newsletter"
  | "socialLinks";

export const VALID_SECTION_TYPES: ReadonlySet<string> = new Set<string>([
  "navbar", "hero", "features", "featureGrid", "testimonials",
  "cta", "pricing", "faq", "footer", "stats", "logoCloud",
  "team", "contact", "richText", "imageText", "services",
  "steps", "gallery", "newsletter", "socialLinks",
]);


// ─── Navbar ────────────────────────────────────────────────

export interface NavbarMetadata {
  type: "navbar";
  /** Brand name (defaults to site.name) */
  name?: string;
  logo?: string;
  links?: LinkItem[];
  button?: ButtonItem;
}


// ─── Hero ──────────────────────────────────────────────────

export interface HeroMetadata {
  type: "hero";
  eyebrow?: string;
  title: string;
  description?: string;
  primaryButton?: ButtonItem;
  secondaryButton?: ButtonItem;
  image?: ImageItem;
}


// ─── Features ──────────────────────────────────────────────

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


// ─── Feature Grid ──────────────────────────────────────────

export interface FeatureGridItem {
  icon?: string;
  title: string;
  description: string;
}

export interface FeatureGridMetadata {
  type: "featureGrid";
  title?: string;
  description?: string;
  columns?: 2 | 3 | 4;
  items: FeatureGridItem[];
}


// ─── Testimonials ──────────────────────────────────────────

export interface TestimonialItem {
  quote: string;
  name: string;
  role?: string;
  company?: string;
  avatar?: string;
}

export interface TestimonialsMetadata {
  type: "testimonials";
  title?: string;
  description?: string;
  items: TestimonialItem[];
}


// ─── CTA ───────────────────────────────────────────────────

export interface CTAMetadata {
  type: "cta";
  title: string;
  description?: string;
  primaryButton?: ButtonItem;
  secondaryButton?: ButtonItem;
  backgroundImage?: string;
}


// ─── Pricing ───────────────────────────────────────────────

export interface PricingPlan {
  name: string;
  description?: string;
  price: string;
  billingPeriod?: string;
  features: string[];
  highlighted?: boolean;
  button?: ButtonItem;
}

export interface PricingMetadata {
  type: "pricing";
  title?: string;
  description?: string;
  plans: PricingPlan[];
}


// ─── FAQ ───────────────────────────────────────────────────

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQMetadata {
  type: "faq";
  title?: string;
  description?: string;
  items: FAQItem[];
}


// ─── Footer ────────────────────────────────────────────────

export interface FooterLinkGroup {
  heading: string;
  links: LinkItem[];
}

export interface FooterMetadata {
  type: "footer";
  name?: string;
  tagline?: string;
  linkGroups?: FooterLinkGroup[];
  socialLinks?: SocialLinkItem[];
  copyright?: string;
}


// ─── Stats ─────────────────────────────────────────────────

export interface StatItem {
  value: string;
  label: string;
}

export interface StatsMetadata {
  type: "stats";
  title?: string;
  description?: string;
  items: StatItem[];
}


// ─── Logo Cloud ────────────────────────────────────────────

export interface LogoItem {
  name: string;
  src: string;
  href?: string;
}

export interface LogoCloudMetadata {
  type: "logoCloud";
  title?: string;
  items: LogoItem[];
}


// ─── Team ──────────────────────────────────────────────────

export interface TeamMember {
  name: string;
  role: string;
  image?: string;
  bio?: string;
  socialLinks?: SocialLinkItem[];
}

export interface TeamMetadata {
  type: "team";
  title?: string;
  description?: string;
  members: TeamMember[];
}


// ─── Contact ───────────────────────────────────────────────

export interface ContactMetadata {
  type: "contact";
  title?: string;
  description?: string;
  email?: string;
  phone?: string;
  address?: string;
  showForm?: boolean;
}


// ─── Rich Text ─────────────────────────────────────────────

export interface RichTextMetadata {
  type: "richText";
  title?: string;
  content: string;
}


// ─── Image + Text ──────────────────────────────────────────

export interface ImageTextMetadata {
  type: "imageText";
  title: string;
  description?: string;
  image: ImageItem;
  imagePosition?: "left" | "right";
  button?: ButtonItem;
}


// ─── Services ──────────────────────────────────────────────

export interface ServiceItem {
  icon?: string;
  title: string;
  description: string;
}

export interface ServicesMetadata {
  type: "services";
  title?: string;
  description?: string;
  items: ServiceItem[];
}


// ─── Steps / How It Works ──────────────────────────────────

export interface StepItem {
  step: number;
  title: string;
  description: string;
}

export interface StepsMetadata {
  type: "steps";
  title?: string;
  description?: string;
  items: StepItem[];
}


// ─── Gallery ───────────────────────────────────────────────

export interface GalleryItem {
  src: string;
  alt?: string;
  title?: string;
  description?: string;
}

export interface GalleryMetadata {
  type: "gallery";
  title?: string;
  description?: string;
  items: GalleryItem[];
}


// ─── Newsletter ────────────────────────────────────────────

export interface NewsletterMetadata {
  type: "newsletter";
  title?: string;
  description?: string;
  inputLabel?: string;
  buttonText?: string;
}


// ─── Social Links ──────────────────────────────────────────

export interface SocialLinksMetadata {
  type: "socialLinks";
  title?: string;
  items: SocialLinkItem[];
}


// ─── Section Union ─────────────────────────────────────────

export type SectionMetadata =
  | NavbarMetadata
  | HeroMetadata
  | FeaturesMetadata
  | FeatureGridMetadata
  | TestimonialsMetadata
  | CTAMetadata
  | PricingMetadata
  | FAQMetadata
  | FooterMetadata
  | StatsMetadata
  | LogoCloudMetadata
  | TeamMetadata
  | ContactMetadata
  | RichTextMetadata
  | ImageTextMetadata
  | ServicesMetadata
  | StepsMetadata
  | GalleryMetadata
  | NewsletterMetadata
  | SocialLinksMetadata;


// ─── Page & Site ───────────────────────────────────────────

export interface PageMetadata {
  /** URL path, e.g. "/" or "/about" */
  path: string;
  /** Display name for the page */
  name: string;
  /** HTML <title> — defaults to "{name} | {site.name}" */
  title?: string;
  /** HTML meta description */
  description?: string;
  /** Page-specific sections (navbar/footer auto-injected from site if defined) */
  sections: SectionMetadata[];
}

export interface SiteMetadata {
  /** Site/brand name */
  name: string;
  description?: string;
  favicon?: string;
  /** Global navbar — prepended to every page unless page has its own */
  navbar?: Omit<NavbarMetadata, "type">;
  /** Global footer — appended to every page unless page has its own */
  footer?: Omit<FooterMetadata, "type">;
}

export interface WebsiteMetadata {
  site: SiteMetadata;
  pages: PageMetadata[];
}
