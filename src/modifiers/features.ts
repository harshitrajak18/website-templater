import type { FeaturesMetadata, FeatureItem } from "../type/type";

export interface FeaturesData {
  eyebrow?: string;
  title?: string;
  description?: string;
  items: FeatureItem[];
}

export function modifyFeatures(section: FeaturesMetadata): FeaturesData {
  return {
    eyebrow: section.eyebrow,
    title: section.title,
    description: section.description,
    items: section.items,
  };
}
