import type { SectionType } from "../../type/type";
import type { TemplateConfig } from "../../type/template-config";
import { navbarConfig } from "./navbar";
import { heroConfig } from "./hero";
import { featuresConfig } from "./features";
import { featureGridConfig } from "./featureGrid";
import { testimonialsConfig } from "./testimonials";
import { ctaConfig } from "./cta";
import { pricingConfig } from "./pricing";
import { faqConfig } from "./faq";
import { footerConfig } from "./footer";
import { statsConfig } from "./stats";
import { logoCloudConfig } from "./logoCloud";
import { teamConfig } from "./team";
import { contactConfig } from "./contact";
import { richTextConfig } from "./richText";
import { imageTextConfig } from "./imageText";
import { servicesConfig } from "./services";
import { stepsConfig } from "./steps";
import { galleryConfig } from "./gallery";
import { newsletterConfig } from "./newsletter";
import { socialLinksConfig } from "./socialLinks";

export const templateRegistry: Record<SectionType, TemplateConfig> = {
  navbar: navbarConfig,
  hero: heroConfig,
  features: featuresConfig,
  featureGrid: featureGridConfig,
  testimonials: testimonialsConfig,
  cta: ctaConfig,
  pricing: pricingConfig,
  faq: faqConfig,
  footer: footerConfig,
  stats: statsConfig,
  logoCloud: logoCloudConfig,
  team: teamConfig,
  contact: contactConfig,
  richText: richTextConfig,
  imageText: imageTextConfig,
  services: servicesConfig,
  steps: stepsConfig,
  gallery: galleryConfig,
  newsletter: newsletterConfig,
  socialLinks: socialLinksConfig,
};
