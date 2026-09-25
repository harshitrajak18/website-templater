import { modifyNavbar } from "../modifiers/navbar";
import { modifyHero } from "../modifiers/hero";
import { modifyFeatures } from "../modifiers/features";
import { modifyCTA } from "../modifiers/cta";
import { modifyPricing } from "../modifiers/pricing";
import { modifyFAQ } from "../modifiers/faq";
import { modifyFooter } from "../modifiers/footer";
import { modifyImageText } from "../modifiers/imageText";
import { modifyContact } from "../modifiers/contact";
import type {
  NavbarMetadata,
  HeroMetadata,
  FeaturesMetadata,
  CTAMetadata,
  PricingMetadata,
  FAQMetadata,
  FooterMetadata,
  ImageTextMetadata,
  ContactMetadata,
} from "../type/type";

function assert(condition: boolean, message: string): boolean {
  if (!condition) {
    console.error(`  ❌ FAIL: ${message}`);
    return false;
  }
  console.log(`  ✅ PASS: ${message}`);
  return true;
}

export function runModifierTests(): { passed: number; failed: number } {
  let passed = 0;
  let failed = 0;

  function test(name: string, condition: boolean) {
    if (assert(condition, name)) passed++;
    else failed++;
  }

  // 1. modifyNavbar resolves internal links
  const nav = modifyNavbar({
    type: "navbar",
    name: "Test",
    links: [{ label: "Home", page: "/" }],
  } as NavbarMetadata);
  test("modifyNavbar resolves internal links correctly", nav.links[0].href === "/");

  // 2. modifyHero resolves button page references
  const hero = modifyHero({
    type: "hero",
    title: "Hello",
    primaryButton: { text: "Go", page: "/about" },
  } as HeroMetadata);
  test("modifyHero resolves button page references", hero.primaryButton?.href === "/about/");

  // 3. modifyFeatures maps items correctly
  const feat = modifyFeatures({
    type: "features",
    items: [{ title: "Fast", description: "Very fast" }],
  } as FeaturesMetadata);
  test("modifyFeatures maps items correctly", feat.items[0].title === "Fast");

  // 4. modifyCTA resolves buttons
  const cta = modifyCTA({
    type: "cta",
    title: "Join",
    primaryButton: { text: "Action", page: "/" },
  } as CTAMetadata);
  test("modifyCTA resolves buttons", cta.primaryButton?.href === "/");

  // 5. modifyPricing resolves plan buttons
  const pricing = modifyPricing({
    type: "pricing",
    plans: [{
      name: "Pro",
      price: "$10",
      features: ["A"],
      button: { text: "Buy", page: "/" },
    }],
  } as PricingMetadata);
  test("modifyPricing resolves plan buttons", pricing.plans[0].button.href === "/");

  // 6. modifyFAQ returns items correctly
  const faq = modifyFAQ({
    type: "faq",
    items: [{ question: "Q1", answer: "A1" }],
  } as FAQMetadata);
  test("modifyFAQ returns items correctly", faq.items[0].question === "Q1");

  // 7. modifyFooter resolves link groups
  const footer = modifyFooter({
    type: "footer",
    name: "Test",
    linkGroups: [{
      heading: "Legal",
      links: [{ label: "Terms", page: "/" }],
    }],
  } as FooterMetadata);
  test("modifyFooter resolves link groups", footer.linkGroups[0].links[0].href === "/");

  // 8. modifyImageText defaults imagePosition to "right"
  const imgText = modifyImageText({
    type: "imageText",
    title: "Story",
    image: { src: "img.png" },
  } as ImageTextMetadata);
  test("modifyImageText defaults imagePosition to right", imgText.imagePosition === "right");

  // 9. modifyContact defaults showForm to true
  const contact = modifyContact({
    type: "contact",
    title: "Contact",
  } as ContactMetadata);
  test("modifyContact defaults showForm to true", contact.showForm === true);

  // 10. Multiple section instances return independent data
  const cta1 = modifyCTA({ type: "cta", title: "CTA1" } as CTAMetadata);
  const cta2 = modifyCTA({ type: "cta", title: "CTA2" } as CTAMetadata);
  test("Multiple section instances return independent data", cta1.title !== cta2.title);

  return { passed, failed };
}
