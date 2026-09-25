import type { PricingMetadata } from "../type/type";
import { resolveButton } from "../utils/routes";

export function modifyPricing(section: PricingMetadata) {
  return {
    title: section.title || "Pricing",
    description: section.description || "",
    plans: section.plans.map((plan) => ({
      name: plan.name,
      description: plan.description || "",
      price: plan.price,
      billingPeriod: plan.billingPeriod || "month",
      features: plan.features || [],
      highlighted: plan.highlighted || false,
      button: plan.button ? resolveButton(plan.button) : { text: "Get Started", href: "#" },
    })),
  };
}
