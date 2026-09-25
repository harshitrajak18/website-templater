import type { WebsiteMetadata } from "./src/type/type";

export const metadata: WebsiteMetadata = {
  sections: [
    // ── Navbar ──────────────────────────────────────────
    {
      type: "navbar",
      name: "Acme",
      button: {
        text: "Get Started",
        href: "/signup",
      },
    },

    // ── Hero ────────────────────────────────────────────
    {
      type: "hero",
      eyebrow: "Build faster",
      title: "Create something amazing",
      description:
        "A modern platform for modern teams. Ship products faster with less complexity.",
      primaryButton: {
        text: "Get Started",
        href: "/signup",
      },
      secondaryButton: {
        text: "View Demo",
        href: "/demo",
      },
      image: {
        enabled: true,
        src: "https://placehold.co/800x500/e2e8f0/475569?text=Product+Dashboard",
        alt: "Product dashboard",
      },
    },

    // ── Features ────────────────────────────────────────
    {
      type: "features",
      eyebrow: "Features",
      title: "Everything you need",
      description:
        "All the tools and integrations your team needs, out of the box.",
      items: [
        {
          icon: "⚡",
          title: "Lightning Fast",
          description:
            "Built for speed from the ground up. Sub-second response times on every interaction.",
        },
        {
          icon: "🔒",
          title: "Enterprise Security",
          description:
            "SOC 2 compliant with end-to-end encryption. Your data is always safe.",
        },
        {
          icon: "🔌",
          title: "Seamless Integrations",
          description:
            "Connect with 100+ tools your team already uses. No custom code required.",
        },
        {
          icon: "📊",
          title: "Advanced Analytics",
          description:
            "Real-time dashboards and reports to help you make data-driven decisions.",
        },
        {
          icon: "🤝",
          title: "Team Collaboration",
          description:
            "Built-in collaboration tools so your team can work together seamlessly.",
        },
        {
          icon: "🌍",
          title: "Global Scale",
          description:
            "Deploy worldwide with edge computing. Fast for every user, everywhere.",
        },
      ],
    },

    // ── Testimonials ────────────────────────────────────
    {
      type: "testimonials",
      title: "Loved by our customers Harshit",
      description:
        "See what teams around the world are saying about Acme.",
      items: [
        {
          quote:
            "Acme has transformed how our team collaborates. We shipped 3x faster in the first month.",
          name: "Sarah Johnson",
          role: "Product Manager",
          company: "TechCorp",
        },
        {
          quote:
            "The best developer experience I've ever had. Everything just works out of the box.",
          name: "Michael Chen",
          role: "Senior Engineer",
          company: "StartupHQ",
        },
        {
          quote:
            "We evaluated 10 tools and Acme was the clear winner. Incredible value for the price.",
          name: "Emily Rodriguez",
          role: "CTO",
          company: "ScaleUp Inc",
        },
      ],
    },

    // ── Footer ──────────────────────────────────────────
    {
      type: "footer",
      name: "Acme",
      tagline: "Building the future of team productivity.",
      linkGroups: [
        {
          heading: "Product",
          links: [
            { text: "Features", href: "/features" },
            { text: "Pricing", href: "/pricing" },
            { text: "Changelog", href: "/changelog" },
          ],
        },
        {
          heading: "Company",
          links: [
            { text: "About", href: "/about" },
            { text: "Blog", href: "/blog" },
            { text: "Careers", href: "/careers" },
          ],
        },
      ],
      copyright: "© 2026 Acme Inc. All rights reserved.",
    },
  ],
};
