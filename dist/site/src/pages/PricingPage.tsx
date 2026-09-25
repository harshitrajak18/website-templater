import "../index.css";
import { PricingNavbar0 } from "../components/PricingNavbar0";
import { PricingHero1 } from "../components/PricingHero1";
import { PricingPricing2 } from "../components/PricingPricing2";
import { PricingFaq3 } from "../components/PricingFaq3";
import { PricingCta4 } from "../components/PricingCta4";
import { PricingFooter5 } from "../components/PricingFooter5";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <PricingNavbar0 />
      <PricingHero1 />
      <PricingPricing2 />
      <PricingFaq3 />
      <PricingCta4 />
      <PricingFooter5 />
    </div>
  );
}
