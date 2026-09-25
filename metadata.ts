import type { WebsiteMetadata } from "./src/type/type";

export const metadata: WebsiteMetadata = {
  site: {
    name: "Acme",
    description: "Build better software, faster.",
    navbar: {
      links: [
        { label: "Home", page: "/" },
        { label: "About", page: "/about" },
        { label: "Pricing", page: "/pricing" },
        { label: "Contact", page: "/contact" },
        { label: "Sign In", page: "/SignIn" },
      ],
      button: { text: "Get Started", page: "/contact" },
    },
    footer: {
      tagline: "Building the future of team productivity.",
      linkGroups: [
        {
          heading: "Product",
          links: [
            { label: "Features", page: "/" },
            { label: "Pricing", page: "/pricing" },
          ],
        },
        {
          heading: "Company",
          links: [
            { label: "About Us", page: "/about" },
            { label: "Contact", page: "/contact" },
            { label: "Careers", href: "#" },
          ],
        },
      ],
      socialLinks: [
        { platform: "twitter", url: "https://twitter.com/acme" },
        { platform: "github", url: "https://github.com/acme" },
        { platform: "linkedin", url: "https://linkedin.com/company/acme" },
      ],
      copyright: "© 2026 Acme Inc. All rights reserved.",
    },
  },

  pages: [
    // ── Home ────────────────────────────────────────
    {
      path: "/",
      name: "Home",
      title: "Acme — Build Better Software",
      description: "Acme is the platform for modern development teams to collaborate and ship software at scale.",
      sections: [
        {
          type: "hero",
          eyebrow: "Now in public beta",
          title: "Build Better Software, Faster",
          description:
            "Acme is the platform for modern development teams to collaborate and ship software at scale.",
          primaryButton: { text: "Start for Free", page: "/contact" },
          secondaryButton: { text: "Learn More", page: "/about" },
          image: {
            src: "https://placehold.co/800x500/e2e8f0/475569?text=Product+Dashboard",
            alt: "Product Dashboard",
          },
        },
        {
          type: "logoCloud",
          title: "Trusted by the world's most innovative teams",
          items: [
            { name: "TechCorp", src: "https://placehold.co/120x40/e2e8f0/475569?text=TechCorp" },
            { name: "StartupHQ", src: "https://placehold.co/120x40/e2e8f0/475569?text=StartupHQ" },
            { name: "ScaleUp", src: "https://placehold.co/120x40/e2e8f0/475569?text=ScaleUp" },
            { name: "CloudBase", src: "https://placehold.co/120x40/e2e8f0/475569?text=CloudBase" },
            { name: "DevTools", src: "https://placehold.co/120x40/e2e8f0/475569?text=DevTools" },
          ],
        },
        {
          type: "features",
          eyebrow: "Features",
          title: "Everything you need to ship",
          description: "A complete set of tools to power your entire development lifecycle.",
          items: [
            {
              icon: "⚡",
              title: "Lightning Fast",
              description: "Built for speed from the ground up. Sub-second response times on every interaction.",
            },
            {
              icon: "🔒",
              title: "Enterprise Security",
              description: "SOC 2 compliant with end-to-end encryption. Your data is always safe.",
            },
            {
              icon: "🔌",
              title: "Seamless Integrations",
              description: "Connect with 100+ tools your team already uses. No custom code required.",
            },
            {
              icon: "📊",
              title: "Advanced Analytics",
              description: "Real-time dashboards and reports to help you make data-driven decisions.",
            },
            {
              icon: "🤝",
              title: "Team Collaboration",
              description: "Built-in collaboration tools so your team can work together seamlessly.",
            },
            {
              icon: "🌍",
              title: "Global Scale",
              description: "Deploy worldwide with edge computing. Fast for every user, everywhere.",
            },
          ],
        },
        {
          type: "stats",
          title: "By the numbers",
          description: "Trusted by developers around the world.",
          items: [
            { value: "100K+", label: "Developers" },
            { value: "50M+", label: "Builds per day" },
            { value: "99.99%", label: "Uptime" },
            { value: "150+", label: "Countries" },
          ],
        },
        {
          type: "testimonials",
          title: "Loved by developers",
          description: "See what teams around the world are saying about Acme.",
          items: [
            {
              quote: "Acme has completely transformed how our team ships code. We're 3x faster.",
              name: "Sarah Johnson",
              role: "VP of Engineering",
              company: "TechCorp",
            },
            {
              quote: "The best developer experience I've ever had. Everything just works out of the box.",
              name: "Michael Chen",
              role: "Senior Engineer",
              company: "StartupHQ",
            },
            {
              quote: "We evaluated 10 tools and Acme was the clear winner. Incredible value.",
              name: "Emily Rodriguez",
              role: "CTO",
              company: "ScaleUp Inc",
            },
          ],
        },
        {
          type: "cta",
          title: "Ready to get started?",
          description: "Join thousands of developers building the future.",
          primaryButton: { text: "Get Started Now", page: "/contact" },
          secondaryButton: { text: "View Pricing", page: "/pricing" },
        },
      ],
    },

    // ── About ───────────────────────────────────────
    {
      path: "/about",
      name: "About",
      title: "About Acme",
      description: "Learn more about Acme's mission and team.",
      sections: [
        {
          type: "hero",
          title: "About Acme",
          description: "We are on a mission to empower developers everywhere.",
        },
        {
          type: "imageText",
          title: "Our Story",
          description:
            "Founded in 2020, Acme started with a simple idea: developers shouldn't have to fight their tools. Today, we're building the foundation for the next generation of software.",
          image: {
            src: "https://placehold.co/600x400/e2e8f0/475569?text=Our+Office",
            alt: "Acme Office",
          },
          imagePosition: "right",
        },
        {
          type: "team",
          title: "Meet the Team",
          description: "The people behind Acme.",
          members: [
            {
              name: "Alice Smith",
              role: "CEO & Co-Founder",
              bio: "Former VP at BigTech. Passionate about developer experience.",
              image: "https://placehold.co/200x200/e2e8f0/475569?text=AS",
            },
            {
              name: "Bob Jones",
              role: "CTO & Co-Founder",
              bio: "Open source maintainer. Loves building developer tools.",
              image: "https://placehold.co/200x200/e2e8f0/475569?text=BJ",
            },
            {
              name: "Carol Davis",
              role: "Head of Design",
              bio: "Previously at DesignCo. Obsessed with beautiful interfaces.",
              image: "https://placehold.co/200x200/e2e8f0/475569?text=CD",
            },
          ],
        },
        {
          type: "steps",
          title: "How We Work",
          description: "Our process is simple and effective.",
          items: [
            { step: 1, title: "Listen", description: "We talk to users every day to understand real problems." },
            { step: 2, title: "Build", description: "We iterate quickly with small, focused teams." },
            { step: 3, title: "Ship", description: "We deliver value continuously with rapid deployments." },
            { step: 4, title: "Measure", description: "We use data to validate and improve everything we build." },
          ],
        },
      ],
    },

    // ── Pricing ─────────────────────────────────────
    {
      path: "/pricing",
      name: "Pricing",
      title: "Pricing — Acme",
      description: "Simple, transparent pricing for teams of all sizes.",
      sections: [
        {
          type: "hero",
          title: "Simple pricing for teams of all sizes",
          description: "Start for free, upgrade when you need more power.",
        },
        {
          type: "pricing",
          title: "Choose your plan",
          description: "All plans include a 14-day free trial.",
          plans: [
            {
              name: "Starter",
              price: "Free",
              description: "Perfect for individuals.",
              billingPeriod: "forever",
              features: ["1 User", "3 Projects", "Community Support", "Basic Analytics"],
              button: { text: "Get Started", page: "/contact" },
            },
            {
              name: "Pro",
              price: "$29",
              description: "For professional developers.",
              billingPeriod: "month",
              highlighted: true,
              features: [
                "5 Users",
                "Unlimited Projects",
                "Priority Support",
                "Advanced Analytics",
                "Custom Integrations",
              ],
              button: { text: "Start Free Trial", page: "/contact" },
            },
            {
              name: "Enterprise",
              price: "Custom",
              description: "For large organizations.",
              billingPeriod: "year",
              features: [
                "Unlimited Users",
                "Unlimited Projects",
                "24/7 Dedicated Support",
                "Custom SLAs",
                "On-Premise Option",
                "SOC 2 Compliance",
              ],
              button: { text: "Contact Sales", page: "/contact" },
            },
          ],
        },
        {
          type: "faq",
          title: "Frequently Asked Questions",
          description: "Can't find what you're looking for? Contact us.",
          items: [
            {
              question: "Can I cancel anytime?",
              answer: "Yes, you can cancel your subscription at any time from your billing dashboard. No questions asked.",
            },
            {
              question: "Do you offer discounts for open source projects?",
              answer: "Absolutely! We love open source. Contact us for a free Pro license for your open source project.",
            },
            {
              question: "What payment methods do you accept?",
              answer: "We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.",
            },
            {
              question: "Is there a free trial?",
              answer: "Yes, all paid plans come with a 14-day free trial. No credit card required.",
            },
          ],
        },
        {
          type: "cta",
          title: "Still have questions?",
          description: "Our team is here to help.",
          primaryButton: { text: "Contact Us", page: "/contact" },
        },
      ],
    },

    // ── Contact ─────────────────────────────────────
    {
      path: "/contact",
      name: "Contact",
      title: "Contact Us — Acme",
      description: "Get in touch with the Acme team.",
      sections: [
        {
          type: "hero",
          title: "Get in Touch",
          description: "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
        },
        {
          type: "contact",
          title: "Send us a message",
          description: "Fill out the form below and we'll get back to you within 24 hours.",
          email: "hello@acme.com",
          phone: "+1 (555) 123-4567",
          address: "123 Startup Ave, San Francisco, CA 94105",
          showForm: true,
        },
        {
          type: "newsletter",
          title: "Subscribe to our newsletter",
          description: "Get the latest updates and product news directly to your inbox.",
          buttonText: "Subscribe",
        },
      ],
    },
    {
      path: "/SignIn",
      name: "SignIn",
      title: "Acme — Build Better Software",
      description: "Acme is the platform for modern development teams to collaborate and ship software at scale.",
      sections: [
        {
          type: "hero",
          eyebrow: "Now in public beta",
          title: "Build Better Software, Faster",
          description:
            "Acme is the platform for modern development teams to collaborate and ship software at scale.",
          primaryButton: { text: "Start for Free", page: "/contact" },
          secondaryButton: { text: "Learn More", page: "/about" },
          image: {
            src: "https://placehold.co/800x500/e2e8f0/475569?text=Product+Dashboard",
            alt: "Product Dashboard",
          },
        },
        {
          type: "logoCloud",
          title: "Trusted by the world's most innovative teams",
          items: [
            { name: "TechCorp", src: "https://placehold.co/120x40/e2e8f0/475569?text=TechCorp" },
            { name: "StartupHQ", src: "https://placehold.co/120x40/e2e8f0/475569?text=StartupHQ" },
            { name: "ScaleUp", src: "https://placehold.co/120x40/e2e8f0/475569?text=ScaleUp" },
            { name: "CloudBase", src: "https://placehold.co/120x40/e2e8f0/475569?text=CloudBase" },
            { name: "DevTools", src: "https://placehold.co/120x40/e2e8f0/475569?text=DevTools" },
          ],
        },
        {
          type: "features",
          eyebrow: "Features",
          title: "Everything you need to ship",
          description: "A complete set of tools to power your entire development lifecycle.",
          items: [
            {
              icon: "⚡",
              title: "Lightning Fast",
              description: "Built for speed from the ground up. Sub-second response times on every interaction.",
            },
            {
              icon: "🔒",
              title: "Enterprise Security",
              description: "SOC 2 compliant with end-to-end encryption. Your data is always safe.",
            },
            {
              icon: "🔌",
              title: "Seamless Integrations",
              description: "Connect with 100+ tools your team already uses. No custom code required.",
            },
            {
              icon: "📊",
              title: "Advanced Analytics",
              description: "Real-time dashboards and reports to help you make data-driven decisions.",
            },
            {
              icon: "🤝",
              title: "Team Collaboration",
              description: "Built-in collaboration tools so your team can work together seamlessly.",
            },
            {
              icon: "🌍",
              title: "Global Scale",
              description: "Deploy worldwide with edge computing. Fast for every user, everywhere.",
            },
          ],
        },
        {
          type: "stats",
          title: "By the numbers",
          description: "Trusted by developers around the world.",
          items: [
            { value: "100K+", label: "Developers" },
            { value: "50M+", label: "Builds per day" },
            { value: "99.99%", label: "Uptime" },
            { value: "150+", label: "Countries" },
          ],
        },
        {
          type: "testimonials",
          title: "Loved by developers",
          description: "See what teams around the world are saying about Acme.",
          items: [
            {
              quote: "Acme has completely transformed how our team ships code. We're 3x faster.",
              name: "Sarah Johnson",
              role: "VP of Engineering",
              company: "TechCorp",
            },
            {
              quote: "The best developer experience I've ever had. Everything just works out of the box.",
              name: "Michael Chen",
              role: "Senior Engineer",
              company: "StartupHQ",
            },
            {
              quote: "We evaluated 10 tools and Acme was the clear winner. Incredible value.",
              name: "Emily Rodriguez",
              role: "CTO",
              company: "ScaleUp Inc",
            },
          ],
        },
        {
          type: "cta",
          title: "Ready to get started?",
          description: "Join thousands of developers building the future.",
          primaryButton: { text: "Get Started Now", page: "/contact" },
          secondaryButton: { text: "View Pricing", page: "/pricing" },
        },
      ],
    },
  ],
};
