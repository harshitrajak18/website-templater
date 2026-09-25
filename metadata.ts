import type { WebsiteMetadata } from "./src/type/type";

/**
 * Production-grade website metadata.
 *
 * This file intentionally uses ONLY the existing types from `src/type/type.ts`.
 * No new section types or interface changes are required.
 */
export const metadata: WebsiteMetadata = {
  site: {
    name: "Acme",
    description:
      "Acme is a modern platform that helps teams build, collaborate, and ship better products faster.",
    favicon: "/favicon.ico",

    navbar: {
      name: "Acme",
      logo: "/images/logo.svg",
      links: [
        { label: "Home", page: "/" },
        { label: "Product", page: "/product" },
        { label: "Solutions", page: "/solutions" },
        { label: "Features", page: "/features" },
        { label: "Integrations", page: "/integrations" },
        { label: "Pricing", page: "/pricing" },
        { label: "Resources", page: "/resources" },
        { label: "Company", page: "/about" },
      ],
      button: {
        text: "Get Started",
        page: "/contact",
      },
    },

    footer: {
      name: "Acme",
      tagline: "Build better. Ship faster. Grow together.",
      linkGroups: [
        {
          heading: "Product",
          links: [
            { label: "Product", page: "/product" },
            { label: "Features", page: "/features" },
            { label: "Integrations", page: "/integrations" },
            { label: "Pricing", page: "/pricing" },
          ],
        },
        {
          heading: "Solutions",
          links: [
            { label: "Startups", page: "/solutions" },
            { label: "Engineering Teams", page: "/solutions" },
            { label: "Enterprise", page: "/solutions" },
            { label: "Agencies", page: "/solutions" },
          ],
        },
        {
          heading: "Resources",
          links: [
            { label: "Blog", page: "/blog" },
            { label: "Resources", page: "/resources" },
            { label: "Documentation", href: "https://docs.example.com" },
            { label: "Support", page: "/contact" },
          ],
        },
        {
          heading: "Company",
          links: [
            { label: "About", page: "/about" },
            { label: "Careers", page: "/careers" },
            { label: "Contact", page: "/contact" },
          ],
        },
        {
          heading: "Legal",
          links: [
            { label: "Privacy Policy", page: "/privacy" },
            { label: "Terms of Service", page: "/terms" },
            { label: "Security", page: "/security" },
          ],
        },
      ],
      socialLinks: [
        {
          platform: "github",
          url: "https://github.com/acme",
          label: "GitHub",
        },
        {
          platform: "linkedin",
          url: "https://linkedin.com/company/acme",
          label: "LinkedIn",
        },
        {
          platform: "youtube",
          url: "https://youtube.com/@acme",
          label: "YouTube",
        },
        {
          platform: "twitter",
          url: "https://twitter.com/acme",
          label: "Twitter",
        },
      ],
      copyright: "© 2026 Acme Inc. All rights reserved.",
    },
  },

  pages: [
    // ========================================================
    // HOME
    // ========================================================
    {
      path: "/",
      name: "Home",
      title: "Acme — Build Better Products, Faster",
      description:
        "Acme gives modern teams the tools they need to collaborate, automate workflows, and ship better products faster.",
      sections: [
        {
          type: "hero",
          eyebrow: "The modern product platform",
          title: "Build better products. Ship them faster.",
          description:
            "Acme brings your product, engineering, design, and customer workflows together in one powerful platform.",
          primaryButton: {
            text: "Get Started",
            page: "/contact",
          },
          secondaryButton: {
            text: "Explore Product",
            page: "/product",
          },
          image: {
            src: "/images/home/hero-dashboard.png",
            alt: "Acme product dashboard showing projects, analytics, and team activity",
          },
        },

        {
          type: "logoCloud",
          title: "Trusted by modern teams",
          items: [
            { name: "Northstar", src: "/images/logos/northstar.svg" },
            { name: "Vertex", src: "/images/logos/vertex.svg" },
            { name: "Orbit", src: "/images/logos/orbit.svg" },
            { name: "Summit", src: "/images/logos/summit.svg" },
            { name: "Nova", src: "/images/logos/nova.svg" },
            { name: "Pioneer", src: "/images/logos/pioneer.svg" },
          ],
        },

        {
          type: "features",
          eyebrow: "Everything in one place",
          title: "One platform for your entire workflow",
          description:
            "Replace disconnected tools with a unified workspace designed around how modern teams actually work.",
          items: [
            {
              icon: "⚡",
              title: "Fast by default",
              description:
                "Keep teams moving with responsive workflows and fast access to the information they need.",
            },
            {
              icon: "🤝",
              title: "Built for collaboration",
              description:
                "Bring product, engineering, design, and business teams into the same workflow.",
            },
            {
              icon: "🔌",
              title: "Connect your stack",
              description:
                "Integrate the tools your team already uses without rebuilding your existing processes.",
            },
            {
              icon: "📊",
              title: "Actionable analytics",
              description:
                "Understand progress, identify bottlenecks, and make decisions using real-time insights.",
            },
            {
              icon: "🔒",
              title: "Enterprise security",
              description:
                "Protect business data with secure access controls, permissions, and reliable infrastructure.",
            },
            {
              icon: "🌍",
              title: "Scale with confidence",
              description:
                "From your first project to global teams, Acme grows with your organization.",
            },
          ],
        },

        {
          type: "stats",
          title: "Acme by the numbers",
          items: [
            { value: "100K+", label: "Active users" },
            { value: "25K+", label: "Teams" },
            { value: "99.99%", label: "Platform uptime" },
            { value: "150+", label: "Countries" },
          ],
        },

        {
          type: "imageText",
          title: "Turn scattered work into one connected workflow",
          description:
            "Acme gives every team a shared view of projects, tasks, decisions, and progress. Everyone stays aligned without spending hours chasing updates.",
          image: {
            src: "/images/home/collaboration.png",
            alt: "Teams collaborating in a shared Acme workspace",
          },
          imagePosition: "right",
          button: {
            text: "Explore the platform",
            page: "/product",
          },
        },

        {
          type: "steps",
          title: "Start in minutes",
          description:
            "Getting started with Acme is simple. Connect your existing workflow and start building.",
          items: [
            {
              step: 1,
              title: "Create your workspace",
              description:
                "Set up your organization and invite the people you work with.",
            },
            {
              step: 2,
              title: "Connect your tools",
              description:
                "Bring your existing development, communication, and productivity tools into Acme.",
            },
            {
              step: 3,
              title: "Build your workflow",
              description:
                "Configure projects, automations, permissions, and team processes.",
            },
            {
              step: 4,
              title: "Ship and improve",
              description:
                "Measure outcomes, find bottlenecks, and continuously improve how your team works.",
            },
          ],
        },

        {
          type: "testimonials",
          title: "Loved by teams",
          description:
            "See how teams use Acme to simplify their workflows and move faster.",
          items: [
            {
              quote:
                "Acme gave our entire organization one place to understand what is happening and what needs to happen next.",
              name: "Sarah Mitchell",
              role: "VP of Engineering",
              company: "Northstar",
              avatar: "/images/people/sarah.jpg",
            },
            {
              quote:
                "We reduced the amount of manual coordination dramatically. The team spends more time building and less time updating spreadsheets.",
              name: "Daniel Kim",
              role: "Head of Product",
              company: "Vertex",
              avatar: "/images/people/daniel.jpg",
            },
            {
              quote:
                "The flexibility is what sold us. We were able to adapt Acme to our process instead of changing our process to fit a tool.",
              name: "Priya Sharma",
              role: "COO",
              company: "Orbit",
              avatar: "/images/people/priya.jpg",
            },
          ],
        },

        {
          type: "faq",
          title: "Frequently asked questions",
          items: [
            {
              question: "What is Acme?",
              answer:
                "Acme is a unified platform for managing product, engineering, collaboration, and operational workflows.",
            },
            {
              question: "Can I try Acme before subscribing?",
              answer:
                "Yes. You can start with the available trial experience and explore the platform before choosing a paid plan.",
            },
            {
              question: "Does Acme integrate with existing tools?",
              answer:
                "Yes. Acme is designed to connect with the tools your team already uses through integrations and APIs.",
            },
            {
              question: "Is Acme suitable for large organizations?",
              answer:
                "Yes. Enterprise capabilities are designed for organizations that require advanced access controls, support, and governance.",
            },
          ],
        },

        {
          type: "cta",
          title: "Ready to build a better workflow?",
          description:
            "Bring your team together and start building with Acme.",
          primaryButton: {
            text: "Get Started",
            page: "/contact",
          },
          secondaryButton: {
            text: "View Pricing",
            page: "/pricing",
          },
        },
      ],
    },

    // ========================================================
    // PRODUCT
    // ========================================================
    {
      path: "/product",
      name: "Product",
      title: "Product — Acme",
      description:
        "Explore the Acme platform and discover how teams can manage their entire workflow in one place.",
      sections: [
        {
          type: "hero",
          eyebrow: "The Acme platform",
          title: "Everything your team needs to move from idea to impact",
          description:
            "Plan, build, collaborate, measure, and improve without switching between disconnected systems.",
          primaryButton: {
            text: "Get Started",
            page: "/contact",
          },
          secondaryButton: {
            text: "View Features",
            page: "/features",
          },
          image: {
            src: "/images/product/product-overview.png",
            alt: "Acme platform overview",
          },
        },

        {
          type: "featureGrid",
          title: "Built around the way teams work",
          description:
            "Powerful capabilities designed to work together instead of becoming another collection of disconnected tools.",
          columns: 3,
          items: [
            {
              icon: "🗂️",
              title: "Project management",
              description:
                "Plan initiatives, assign work, and keep projects moving.",
            },
            {
              icon: "💬",
              title: "Team collaboration",
              description:
                "Keep conversations and decisions connected to the work.",
            },
            {
              icon: "⚙️",
              title: "Automation",
              description:
                "Automate repetitive processes and reduce manual coordination.",
            },
            {
              icon: "📈",
              title: "Analytics",
              description:
                "Understand performance with dashboards and actionable metrics.",
            },
            {
              icon: "🔐",
              title: "Permissions",
              description:
                "Control access across teams, projects, and sensitive information.",
            },
            {
              icon: "🔗",
              title: "Integrations",
              description:
                "Connect Acme with your existing tools and services.",
            },
          ],
        },

        {
          type: "imageText",
          title: "A shared source of truth",
          description:
            "Give every team the context they need. Projects, discussions, decisions, and progress stay connected so work doesn't disappear into disconnected tools.",
          image: {
            src: "/images/product/source-of-truth.png",
            alt: "Shared project workspace in Acme",
          },
          imagePosition: "left",
        },

        {
          type: "imageText",
          title: "Automate the repetitive work",
          description:
            "Create workflows that automatically handle recurring tasks, notifications, approvals, and updates.",
          image: {
            src: "/images/product/automation.png",
            alt: "Acme workflow automation builder",
          },
          imagePosition: "right",
        },

        {
          type: "stats",
          title: "Designed for scale",
          items: [
            { value: "10M+", label: "Work items processed" },
            { value: "99.99%", label: "Service availability" },
            { value: "24/7", label: "Monitoring" },
            { value: "150+", label: "Countries supported" },
          ],
        },

        {
          type: "cta",
          title: "See what Acme can do for your team",
          description:
            "Explore the platform and find the workflows that fit your organization.",
          primaryButton: {
            text: "Explore Features",
            page: "/features",
          },
        },
      ],
    },

    // ========================================================
    // SOLUTIONS
    // ========================================================
    {
      path: "/solutions",
      name: "Solutions",
      title: "Solutions — Acme",
      description:
        "Acme workflows for startups, engineering teams, growing companies, and enterprises.",
      sections: [
        {
          type: "hero",
          eyebrow: "Solutions",
          title: "A flexible platform for every kind of team",
          description:
            "Whether you're a small startup or a global organization, build workflows around the way your team operates.",
          primaryButton: {
            text: "Talk to Our Team",
            page: "/contact",
          },
          image: {
            src: "/images/solutions/hero.png",
            alt: "Teams using Acme across different workflows",
          },
        },

        {
          type: "services",
          title: "Built for different teams and goals",
          description:
            "Start with a workflow designed around your needs and customize it as your organization grows.",
          items: [
            {
              icon: "🚀",
              title: "Startups",
              description:
                "Move quickly with lightweight workflows that keep small teams focused.",
              features: [
                "Simple project management",
                "Fast team collaboration",
                "Flexible automation",
              ],
              link: {
                label: "Explore startup workflows",
                page: "/contact",
              },
            },
            {
              icon: "👨‍💻",
              title: "Engineering teams",
              description:
                "Connect planning, development, releases, and operational visibility.",
              features: [
                "Engineering workflows",
                "Release visibility",
                "Developer integrations",
              ],
              link: {
                label: "Explore engineering workflows",
                page: "/contact",
              },
            },
            {
              icon: "🏢",
              title: "Growing businesses",
              description:
                "Create repeatable processes while keeping teams aligned as you scale.",
              features: [
                "Cross-team workflows",
                "Analytics",
                "Permissions",
              ],
              link: {
                label: "Talk to our team",
                page: "/contact",
              },
            },
            {
              icon: "🌐",
              title: "Enterprise",
              description:
                "Support complex organizations with governance, security, and advanced workflows.",
              features: [
                "Advanced permissions",
                "Enterprise support",
                "Custom workflows",
              ],
              link: {
                label: "Contact sales",
                page: "/contact",
              },
            },
          ],
        },

        {
          type: "testimonials",
          title: "Built around real teams",
          items: [
            {
              quote:
                "Acme gave our teams a common operating system without forcing every department into the same process.",
              name: "Alex Morgan",
              role: "VP Operations",
              company: "Summit",
            },
            {
              quote:
                "The biggest improvement has been visibility. Everyone knows where projects stand without asking for status updates.",
              name: "Maya Patel",
              role: "Product Director",
              company: "Nova",
            },
          ],
        },

        {
          type: "cta",
          title: "Let's design your workflow",
          description:
            "Tell us how your team works and we'll show you how Acme can fit into it.",
          primaryButton: {
            text: "Talk to Us",
            page: "/contact",
          },
        },
      ],
    },

    // ========================================================
    // FEATURES
    // ========================================================
    {
      path: "/features",
      name: "Features",
      title: "Features — Acme",
      description:
        "Explore Acme's collaboration, automation, analytics, security, and workflow features.",
      sections: [
        {
          type: "hero",
          title: "Powerful features without unnecessary complexity",
          description:
            "Everything you need to run modern workflows, with enough flexibility to adapt to your organization.",
          image: {
            src: "/images/features/hero.png",
            alt: "Acme features overview",
          },
        },

        {
          type: "features",
          eyebrow: "Core capabilities",
          title: "Designed for productive teams",
          items: [
            {
              icon: "📋",
              title: "Planning",
              description:
                "Turn goals into clear projects, tasks, milestones, and ownership.",
            },
            {
              icon: "🤝",
              title: "Collaboration",
              description:
                "Keep discussions, decisions, and work connected.",
            },
            {
              icon: "⚙️",
              title: "Automation",
              description:
                "Automate repetitive workflows and trigger actions based on events.",
            },
            {
              icon: "📊",
              title: "Analytics",
              description:
                "Track progress and understand performance across your organization.",
            },
            {
              icon: "🔐",
              title: "Access control",
              description:
                "Manage permissions and protect sensitive team information.",
            },
            {
              icon: "🔌",
              title: "Integrations",
              description:
                "Connect Acme with the systems your team already depends on.",
            },
            {
              icon: "🔔",
              title: "Notifications",
              description:
                "Keep people informed without overwhelming them with unnecessary alerts.",
            },
            {
              icon: "📱",
              title: "Responsive experience",
              description:
                "Access important work across desktop, tablet, and mobile experiences.",
            },
          ],
        },

        {
          type: "featureGrid",
          title: "Built for different workflows",
          columns: 4,
          items: [
            {
              icon: "🎯",
              title: "Goals",
              description: "Connect daily work to business outcomes.",
            },
            {
              icon: "🧩",
              title: "Projects",
              description: "Organize complex initiatives into manageable work.",
            },
            {
              icon: "🔄",
              title: "Processes",
              description: "Create repeatable workflows for recurring work.",
            },
            {
              icon: "📈",
              title: "Reporting",
              description: "Turn activity into useful organizational insight.",
            },
          ],
        },

        {
          type: "faq",
          title: "Feature questions",
          items: [
            {
              question: "Can Acme adapt to our existing process?",
              answer:
                "Yes. Acme is designed to be configured around different team workflows rather than requiring every organization to work identically.",
            },
            {
              question: "Can different teams have different permissions?",
              answer:
                "Yes. Access can be organized around the structure and requirements of your organization.",
            },
            {
              question: "Can we connect external tools?",
              answer:
                "Yes. Acme supports integrations and APIs for connecting external systems.",
            },
          ],
        },
      ],
    },

    // ========================================================
    // INTEGRATIONS
    // ========================================================
    {
      path: "/integrations",
      name: "Integrations",
      title: "Integrations — Acme",
      description:
        "Connect Acme with the tools your team already uses.",
      sections: [
        {
          type: "hero",
          eyebrow: "Integrations",
          title: "Your tools. One connected workflow.",
          description:
            "Bring your existing tools into Acme and keep information flowing between systems.",
          primaryButton: {
            text: "Talk to Us",
            page: "/contact",
          },
          image: {
            src: "/images/integrations/hero.png",
            alt: "Acme integrations connecting business tools",
          },
        },

        {
          type: "logoCloud",
          title: "Connect your favorite tools",
          items: [
            { name: "GitHub", src: "/images/logos/github.svg" },
            { name: "Slack", src: "/images/logos/slack.svg" },
            { name: "Jira", src: "/images/logos/jira.svg" },
            { name: "Notion", src: "/images/logos/notion.svg" },
            { name: "Figma", src: "/images/logos/figma.svg" },
            { name: "Google Drive", src: "/images/logos/google-drive.svg" },
            { name: "Microsoft Teams", src: "/images/logos/microsoft-teams.svg" },
            { name: "HubSpot", src: "/images/logos/hubspot.svg" },
          ],
        },

        {
          type: "services",
          title: "Integration options",
          items: [
            {
              icon: "🔗",
              title: "Native integrations",
              description:
                "Connect popular tools with pre-built integrations and minimal configuration.",
            },
            {
              icon: "⚡",
              title: "Automation",
              description:
                "Trigger workflows when events occur in connected systems.",
            },
            {
              icon: "🛠️",
              title: "API",
              description:
                "Build custom integrations when your workflow requires something specific.",
            },
          ],
        },

        {
          type: "cta",
          title: "Don't see your tool?",
          description:
            "Talk to us about your workflow and integration requirements.",
          primaryButton: {
            text: "Contact Us",
            page: "/contact",
          },
        },
      ],
    },

    // ========================================================
    // PRICING
    // ========================================================
    {
      path: "/pricing",
      name: "Pricing",
      title: "Pricing — Acme",
      description:
        "Simple and transparent Acme plans for individuals, teams, and organizations.",
      sections: [
        {
          type: "hero",
          eyebrow: "Pricing",
          title: "Plans that grow with your team",
          description:
            "Start small and add capabilities as your organization grows.",
        },

        {
          type: "pricing",
          title: "Choose your plan",
          description:
            "Select the plan that matches the size and needs of your team.",
          plans: [
            {
              name: "Free",
              price: "$0",
              billingPeriod: "forever",
              description: "For individuals exploring Acme.",
              features: [
                "1 workspace",
                "3 projects",
                "Basic collaboration",
                "Community support",
              ],
              button: {
                text: "Get Started",
                page: "/contact",
              },
            },
            {
              name: "Starter",
              price: "$12",
              billingPeriod: "per user / month",
              description: "For small teams getting started.",
              features: [
                "Unlimited projects",
                "Team collaboration",
                "Basic automation",
                "Standard integrations",
                "Email support",
              ],
              button: {
                text: "Start Trial",
                page: "/contact",
              },
            },
            {
              name: "Growth",
              price: "$29",
              billingPeriod: "per user / month",
              description: "For growing teams that need more control.",
              highlighted: true,
              features: [
                "Everything in Starter",
                "Advanced automation",
                "Advanced analytics",
                "Custom workflows",
                "Advanced permissions",
                "Priority support",
              ],
              button: {
                text: "Start Trial",
                page: "/contact",
              },
            },
            {
              name: "Enterprise",
              price: "Custom",
              billingPeriod: "annual",
              description: "For large and complex organizations.",
              features: [
                "Everything in Growth",
                "Enterprise permissions",
                "Custom onboarding",
                "Dedicated support",
                "Advanced governance",
                "Custom agreements",
              ],
              button: {
                text: "Contact Sales",
                page: "/contact",
              },
            },
          ],
        },

        {
          type: "featureGrid",
          title: "Every plan includes",
          columns: 3,
          items: [
            {
              icon: "🔒",
              title: "Secure infrastructure",
              description:
                "Your workspace is protected by modern security practices.",
            },
            {
              icon: "🔄",
              title: "Regular updates",
              description:
                "Get continuous improvements without managing upgrades yourself.",
            },
            {
              icon: "📚",
              title: "Learning resources",
              description:
                "Documentation and resources help your team get more from Acme.",
            },
          ],
        },

        {
          type: "faq",
          title: "Pricing questions",
          items: [
            {
              question: "Can I change plans later?",
              answer:
                "Yes. Your organization can move between plans as your needs change.",
            },
            {
              question: "Do you offer annual billing?",
              answer:
                "Annual billing options are available for eligible plans.",
            },
            {
              question: "Is there an enterprise plan?",
              answer:
                "Yes. Enterprise plans can be configured around larger organizations and their requirements.",
            },
          ],
        },

        {
          type: "cta",
          title: "Not sure which plan fits?",
          description:
            "Tell us about your team and we'll help you understand the available options.",
          primaryButton: {
            text: "Talk to Sales",
            page: "/contact",
          },
        },
      ],
    },

    // ========================================================
    // ABOUT
    // ========================================================
    {
      path: "/about",
      name: "About",
      title: "About Acme",
      description:
        "Learn about Acme, our mission, values, and the people building the platform.",
      sections: [
        {
          type: "hero",
          eyebrow: "About Acme",
          title: "We're building a better way to work",
          description:
            "Acme was created around a simple idea: teams should spend more time solving meaningful problems and less time managing fragmented workflows.",
          image: {
            src: "/images/about/team.jpg",
            alt: "Acme team collaborating in an office",
          },
        },

        {
          type: "imageText",
          title: "Our mission",
          description:
            "We want to make modern work simpler, more connected, and more human. Our platform brings information and people together so teams can focus on outcomes instead of operational friction.",
          image: {
            src: "/images/about/mission.jpg",
            alt: "Acme team working together",
          },
          imagePosition: "right",
        },

        {
          type: "stats",
          title: "Our journey",
          items: [
            { value: "2020", label: "Founded" },
            { value: "25K+", label: "Teams" },
            { value: "100K+", label: "Users" },
            { value: "150+", label: "Countries" },
          ],
        },

        {
          type: "team",
          title: "Meet the team",
          description:
            "A group of builders, designers, operators, and problem-solvers.",
          members: [
            {
              name: "Alex Morgan",
              role: "Co-Founder & CEO",
              bio: "Focused on product strategy and building a durable company.",
              image: {
                src: "/images/team/alex.jpg",
                alt: "Alex Morgan",
              },
            },
            {
              name: "Maya Patel",
              role: "Co-Founder & CTO",
              bio: "Leads the engineering organization and platform architecture.",
              image: {
                src: "/images/team/maya.jpg",
                alt: "Maya Patel",
              },
            },
            {
              name: "Daniel Kim",
              role: "VP Product",
              bio: "Works with customers to turn complex problems into simple products.",
              image: {
                src: "/images/team/daniel.jpg",
                alt: "Daniel Kim",
              },
            },
            {
              name: "Sarah Chen",
              role: "VP Design",
              bio: "Builds thoughtful experiences across the Acme product.",
              image: {
                src: "/images/team/sarah.jpg",
                alt: "Sarah Chen",
              },
            },
          ],
        },

        {
          type: "services",
          title: "What we value",
          items: [
            {
              icon: "🎯",
              title: "Focus",
              description:
                "We prioritize meaningful problems and avoid unnecessary complexity.",
            },
            {
              icon: "🧭",
              title: "Ownership",
              description:
                "We take responsibility for outcomes, not just individual tasks.",
            },
            {
              icon: "🤝",
              title: "Respect",
              description:
                "We listen carefully, communicate clearly, and assume positive intent.",
            },
            {
              icon: "🌱",
              title: "Continuous improvement",
              description:
                "We learn from users, experiments, mistakes, and each other.",
            },
          ],
        },

        {
          type: "cta",
          title: "Want to build with us?",
          description:
            "Explore opportunities to join the team.",
          primaryButton: {
            text: "View Careers",
            page: "/careers",
          },
        },
      ],
    },

    // ========================================================
    // CAREERS
    // ========================================================
    {
      path: "/careers",
      name: "Careers",
      title: "Careers — Acme",
      description:
        "Join Acme and help build the future of collaborative work.",
      sections: [
        {
          type: "hero",
          eyebrow: "Careers",
          title: "Do work that matters",
          description:
            "Join a team of builders working on a product used by teams around the world.",
          primaryButton: {
            text: "View Open Roles",
            page: "/careers",
          },
          image: {
            src: "/images/careers/hero.jpg",
            alt: "Acme team collaborating",
          },
        },

        {
          type: "services",
          title: "Why Acme",
          items: [
            {
              icon: "🌍",
              title: "Remote-friendly",
              description:
                "Work effectively with teammates across locations and time zones.",
            },
            {
              icon: "📚",
              title: "Keep learning",
              description:
                "We invest in continuous learning and professional growth.",
            },
            {
              icon: "🧠",
              title: "Meaningful problems",
              description:
                "Work on real problems that affect how modern teams operate.",
            },
            {
              icon: "🤝",
              title: "Strong teams",
              description:
                "Collaborate with people who care deeply about their craft.",
            },
          ],
        },

        {
          type: "steps",
          title: "Our hiring process",
          items: [
            {
              step: 1,
              title: "Apply",
              description:
                "Tell us about yourself, your experience, and what you want to build.",
            },
            {
              step: 2,
              title: "Conversation",
              description:
                "Meet members of the team and learn more about the role.",
            },
            {
              step: 3,
              title: "Role discussion",
              description:
                "Explore the technical or functional problems relevant to the position.",
            },
            {
              step: 4,
              title: "Decision",
              description:
                "We'll discuss next steps and answer any remaining questions.",
            },
          ],
        },

        {
          type: "cta",
          title: "Don't see the right role?",
          description:
            "We're always interested in meeting thoughtful people who want to build great products.",
          primaryButton: {
            text: "Contact Us",
            page: "/contact",
          },
        },
      ],
    },

    // ========================================================
    // BLOG
    // ========================================================
    {
      path: "/blog",
      name: "Blog",
      title: "Blog — Acme",
      description:
        "Product updates, engineering insights, workflow advice, and stories from the Acme team.",
      sections: [
        {
          type: "hero",
          eyebrow: "The Acme blog",
          title: "Ideas for building better teams and products",
          description:
            "Practical lessons, product updates, engineering stories, and perspectives from the Acme team.",
        },

        {
          type: "features",
          title: "Latest from Acme",
          items: [
            {
              icon: "🚀",
              title: "Product",
              description:
                "New capabilities, improvements, and product announcements.",
            },
            {
              icon: "⚙️",
              title: "Engineering",
              description:
                "Architecture, scalability, infrastructure, and engineering lessons.",
            },
            {
              icon: "💡",
              title: "Workflows",
              description:
                "Practical ideas for improving how teams plan and collaborate.",
            },
          ],
        },

        {
          type: "gallery",
          title: "Featured stories",
          items: [
            {
              src: "/images/blog/story-1.jpg",
              alt: "Engineering team reviewing a system",
              title: "Building systems that scale with your team",
              description:
                "Lessons from designing reliable workflows for growing organizations.",
              href: "/blog/scaling-systems",
            },
            {
              src: "/images/blog/story-2.jpg",
              alt: "Product team planning a roadmap",
              title: "From roadmap to real outcomes",
              description:
                "How teams can connect planning with measurable outcomes.",
              href: "/blog/roadmaps",
            },
            {
              src: "/images/blog/story-3.jpg",
              alt: "Team collaborating around a table",
              title: "Designing better team collaboration",
              description:
                "Small changes that can make cross-functional work easier.",
              href: "/blog/collaboration",
            },
            {
              src: "/images/blog/story-4.jpg",
              alt: "Developer working at a computer",
              title: "Reducing operational friction",
              description:
                "Why eliminating small sources of friction can have a large impact.",
              href: "/blog/operational-friction",
            },
          ],
        },

        {
          type: "newsletter",
          title: "Stay in the loop",
          description:
            "Get product updates, new articles, and practical team-building ideas.",
          inputLabel: "Email address",
          buttonText: "Subscribe",
        },
      ],
    },

    // ========================================================
    // RESOURCES
    // ========================================================
    {
      path: "/resources",
      name: "Resources",
      title: "Resources — Acme",
      description:
        "Guides, documentation, templates, and practical resources for modern teams.",
      sections: [
        {
          type: "hero",
          eyebrow: "Resources",
          title: "Everything you need to get more from Acme",
          description:
            "Explore guides, documentation, templates, and practical resources for your team.",
          image: {
            src: "/images/resources/hero.png",
            alt: "Acme resource library",
          },
        },

        {
          type: "services",
          title: "Explore our resources",
          items: [
            {
              icon: "📚",
              title: "Documentation",
              description:
                "Learn how Acme works and how to configure your workspace.",
              link: {
                label: "Read documentation",
                href: "https://docs.example.com",
              },
            },
            {
              icon: "🧰",
              title: "Templates",
              description:
                "Start quickly with ready-to-use workflow templates.",
              link: {
                label: "Browse templates",
                page: "/resources",
              },
            },
            {
              icon: "🎓",
              title: "Guides",
              description:
                "Practical guides for improving planning, collaboration, and execution.",
              link: {
                label: "Read guides",
                page: "/blog",
              },
            },
            {
              icon: "💬",
              title: "Support",
              description:
                "Get help when you need it from our support team.",
              link: {
                label: "Contact support",
                page: "/contact",
              },
            },
          ],
        },

        {
          type: "gallery",
          title: "Popular resources",
          items: [
            {
              src: "/images/resources/guide-1.jpg",
              alt: "Workflow planning guide",
              title: "The Modern Team Workflow Guide",
              description:
                "A practical framework for designing better team workflows.",
              href: "/resources/modern-team-workflow",
            },
            {
              src: "/images/resources/guide-2.jpg",
              alt: "Product planning guide",
              title: "Product Planning Handbook",
              description:
                "A guide to turning product ideas into measurable outcomes.",
              href: "/resources/product-planning",
            },
            {
              src: "/images/resources/guide-3.jpg",
              alt: "Engineering workflow guide",
              title: "Engineering Workflow Guide",
              description:
                "Patterns for improving engineering visibility and delivery.",
              href: "/resources/engineering-workflows",
            },
          ],
        },

        {
          type: "cta",
          title: "Need help choosing a resource?",
          description:
            "Talk to our team and we'll point you in the right direction.",
          primaryButton: {
            text: "Contact Us",
            page: "/contact",
          },
        },
      ],
    },

    // ========================================================
    // CONTACT
    // ========================================================
    {
      path: "/contact",
      name: "Contact",
      title: "Contact Acme",
      description:
        "Get in touch with the Acme team about product, sales, support, or partnerships.",
      sections: [
        {
          type: "hero",
          eyebrow: "Contact",
          title: "Let's talk",
          description:
            "Have a question, want a product walkthrough, or need help deciding where to start? We'd love to hear from you.",
        },

        {
          type: "contact",
          title: "Get in touch",
          description:
            "Send us a message and someone from our team will get back to you.",
          email: "hello@acme.example",
          phone: "+1 (555) 010-2026",
          address: "100 Market Street, San Francisco, CA 94105",
          showForm: true,
        },

        {
          type: "services",
          title: "How can we help?",
          items: [
            {
              icon: "💼",
              title: "Sales",
              description:
                "Talk with our team about plans, requirements, and enterprise needs.",
              link: {
                label: "Talk to sales",
                page: "/contact",
              },
            },
            {
              icon: "🛠️",
              title: "Support",
              description:
                "Get help with your existing Acme workspace.",
              link: {
                label: "Get support",
                page: "/contact",
              },
            },
            {
              icon: "🤝",
              title: "Partnerships",
              description:
                "Explore integration, technology, and business partnerships.",
              link: {
                label: "Partner with us",
                page: "/contact",
              },
            },
          ],
        },

        {
          type: "faq",
          title: "Before you contact us",
          items: [
            {
              question: "How quickly will I get a response?",
              answer:
                "Response times depend on the type of request and the applicable support or sales process.",
            },
            {
              question: "Can I request a product demo?",
              answer:
                "Yes. Contact our team and mention that you'd like a product walkthrough.",
            },
          ],
        },

        {
          type: "newsletter",
          title: "Get Acme updates",
          description:
            "Occasional product updates, resources, and company news.",
          inputLabel: "Email address",
          buttonText: "Subscribe",
        },
      ],
    },

    // ========================================================
    // TEAM
    // ========================================================
    {
      path: "/team",
      name: "Team",
      title: "Our Team — Acme",
      description:
        "Meet the people building Acme.",
      sections: [
        {
          type: "hero",
          title: "Meet the people behind Acme",
          description:
            "A multidisciplinary team focused on making modern work simpler.",
        },

        {
          type: "team",
          title: "Leadership",
          members: [
            {
              name: "Alex Morgan",
              role: "Co-Founder & CEO",
              image: {
                src: "/images/team/alex.jpg",
                alt: "Alex Morgan",
              },
            },
            {
              name: "Maya Patel",
              role: "Co-Founder & CTO",
              image: {
                src: "/images/team/maya.jpg",
                alt: "Maya Patel",
              },
            },
            {
              name: "Daniel Kim",
              role: "VP Product",
              image: {
                src: "/images/team/daniel.jpg",
                alt: "Daniel Kim",
              },
            },
            {
              name: "Sarah Chen",
              role: "VP Design",
              image: {
                src: "/images/team/sarah.jpg",
                alt: "Sarah Chen",
              },
          },
          ],
        },

        {
          type: "cta",
          title: "Want to join the team?",
          primaryButton: {
            text: "View Careers",
            page: "/careers",
          },
        },
      ],
    },

    // ========================================================
    // TESTIMONIALS / CUSTOMERS
    // ========================================================
    {
      path: "/customers",
      name: "Customers",
      title: "Customers — Acme",
      description:
        "See how teams use Acme to improve collaboration and workflows.",
      sections: [
        {
          type: "hero",
          eyebrow: "Customer stories",
          title: "Built for teams that want to move forward",
          description:
            "Discover how organizations use Acme to simplify work and create better workflows.",
        },

        {
          type: "logoCloud",
          title: "Teams using Acme",
          items: [
            { name: "Northstar", src: "/images/logos/northstar.svg" },
            { name: "Vertex", src: "/images/logos/vertex.svg" },
            { name: "Orbit", src: "/images/logos/orbit.svg" },
            { name: "Summit", src: "/images/logos/summit.svg" },
            { name: "Nova", src: "/images/logos/nova.svg" },
          ],
        },

        {
          type: "testimonials",
          title: "What customers say",
          items: [
            {
              quote:
                "Acme helped us replace a collection of disconnected workflows with one shared operating system.",
              name: "Jordan Lee",
              role: "COO",
              company: "Northstar",
            },
            {
              quote:
                "Our teams have much better visibility into project progress and ownership.",
              name: "Emma Wilson",
              role: "Director of Operations",
              company: "Vertex",
            },
            {
              quote:
                "The flexibility allowed us to adopt Acme without completely changing the way our teams already work.",
              name: "Rahul Mehta",
              role: "Head of Engineering",
              company: "Orbit",
            },
          ],
        },

        {
          type: "cta",
          title: "See what Acme could look like for your team",
          primaryButton: {
            text: "Get Started",
            page: "/contact",
          },
        },
      ],
    },

    // ========================================================
    // FAQ
    // ========================================================
    {
      path: "/faq",
      name: "FAQ",
      title: "Frequently Asked Questions — Acme",
      description:
        "Answers to common questions about Acme, pricing, security, integrations, and support.",
      sections: [
        {
          type: "hero",
          title: "Frequently asked questions",
          description:
            "Find answers to common questions about Acme.",
        },

        {
          type: "faq",
          title: "General",
          items: [
            {
              question: "What is Acme?",
              answer:
                "Acme is a platform that helps teams manage connected workflows across product, engineering, operations, and collaboration.",
            },
            {
              question: "Who is Acme for?",
              answer:
                "Acme is designed for teams of different sizes, from small startups to larger organizations.",
            },
          ],
        },

        {
          type: "faq",
          title: "Product",
          items: [
            {
              question: "Can Acme integrate with our tools?",
              answer:
                "Yes. Acme supports integrations and APIs for connecting external systems.",
            },
            {
              question: "Can we customize our workflows?",
              answer:
                "Yes. Teams can configure workflows around their own processes and requirements.",
            },
          ],
        },

        {
          type: "faq",
          title: "Pricing",
          items: [
            {
              question: "Can we change plans?",
              answer:
                "Yes. Plans can be changed as your organization's requirements evolve.",
            },
            {
              question: "Do you support enterprise customers?",
              answer:
                "Yes. Enterprise options are available for organizations with advanced requirements.",
            },
          ],
        },

        {
          type: "cta",
          title: "Still have a question?",
          description:
            "Our team is happy to help.",
          primaryButton: {
            text: "Contact Us",
            page: "/contact",
          },
        },
      ],
    },

    // ========================================================
    // SECURITY
    // ========================================================
    {
      path: "/security",
      name: "Security",
      title: "Security — Acme",
      description:
        "Learn about the security practices and controls used to protect Acme customers.",
      sections: [
        {
          type: "hero",
          eyebrow: "Security",
          title: "Security is part of the product",
          description:
            "We design Acme with security, privacy, reliability, and controlled access in mind.",
          image: {
            src: "/images/security/hero.png",
            alt: "Acme security and infrastructure overview",
          },
        },

        {
          type: "features",
          title: "Security principles",
          items: [
            {
              icon: "🔐",
              title: "Access control",
              description:
                "Control who can access workspaces, projects, and information.",
            },
            {
              icon: "🛡️",
              title: "Data protection",
              description:
                "Use secure infrastructure and appropriate safeguards for customer data.",
            },
            {
              icon: "📋",
              title: "Operational controls",
              description:
                "Maintain processes designed to protect systems and customer information.",
            },
            {
              icon: "🔎",
              title: "Monitoring",
              description:
                "Monitor infrastructure and operational activity to identify issues quickly.",
            },
          ],
        },

        {
          type: "steps",
          title: "Our approach",
          items: [
            {
              step: 1,
              title: "Prevent",
              description:
                "Build security considerations into systems and product development.",
            },
            {
              step: 2,
              title: "Protect",
              description:
                "Use access controls and infrastructure safeguards to reduce exposure.",
            },
            {
              step: 3,
              title: "Monitor",
              description:
                "Observe systems and investigate relevant security events.",
            },
            {
              step: 4,
              title: "Improve",
              description:
                "Continuously review and improve security practices.",
            },
          ],
        },

        {
          type: "cta",
          title: "Have security questions?",
          description:
            "Contact our team about your organization's security requirements.",
          primaryButton: {
            text: "Contact Us",
            page: "/contact",
          },
        },
      ],
    },

    // ========================================================
    // PRIVACY
    // ========================================================
    {
      path: "/privacy",
      name: "Privacy Policy",
      title: "Privacy Policy — Acme",
      description:
        "Acme privacy policy and information about how customer data is handled.",
      sections: [
        {
          type: "hero",
          title: "Privacy Policy",
          description:
            "Information about how Acme collects, uses, protects, and handles information.",
        },
        {
          type: "richText",
          title: "Privacy at Acme",
          content:
            "This Privacy Policy explains how Acme handles information when you use our website, products, and services.\n\nThe final production version of this document should contain the legally reviewed privacy policy applicable to your organization, jurisdiction, products, and data-processing activities.",
        },
        {
          type: "faq",
          title: "Privacy questions",
          items: [
            {
              question: "How can I contact Acme about privacy?",
              answer:
                "Use the contact information provided on our Contact page for privacy-related questions.",
            },
            {
              question: "Where can I find the latest privacy policy?",
              answer:
                "This page represents the current privacy-policy location for the website.",
            },
          ],
        },
      ],
    },

    // ========================================================
    // TERMS
    // ========================================================
    {
      path: "/terms",
      name: "Terms of Service",
      title: "Terms of Service — Acme",
      description:
        "Terms governing access to and use of Acme services.",
      sections: [
        {
          type: "hero",
          title: "Terms of Service",
          description:
            "The terms governing access to and use of Acme services.",
        },
        {
          type: "richText",
          title: "Terms",
          content:
            "This page contains the Terms of Service applicable to the use of Acme products and services.\n\nBefore production launch, replace this placeholder content with the legally reviewed terms applicable to your organization.",
        },
      ],
    },

    // ========================================================
    // SIGN IN
    // ========================================================
    {
      path: "/signin",
      name: "Sign In",
      title: "Sign In — Acme",
      description:
        "Sign in to your Acme workspace.",
      sections: [
        {
          type: "hero",
          title: "Welcome back",
          description:
            "Sign in to continue to your Acme workspace.",
          primaryButton: {
            text: "Sign In",
            page: "/signin",
          },
          secondaryButton: {
            text: "Create Account",
            page: "/contact",
          },
        },

        {
          type: "logoCloud",
          title: "Trusted by teams worldwide",
          items: [
            { name: "Northstar", src: "/images/logos/northstar.svg" },
            { name: "Vertex", src: "/images/logos/vertex.svg" },
            { name: "Orbit", src: "/images/logos/orbit.svg" },
          ],
        },
      ],
    },

    // ========================================================
    // GET STARTED
    // ========================================================
    {
      path: "/get-started",
      name: "Get Started",
      title: "Get Started — Acme",
      description:
        "Start building better workflows with Acme.",
      sections: [
        {
          type: "hero",
          eyebrow: "Get started",
          title: "Build your first workflow",
          description:
            "Start with a simple workspace and expand as your team grows.",
          primaryButton: {
            text: "Create Your Workspace",
            page: "/contact",
          },
        },

        {
          type: "steps",
          title: "Your first few steps",
          items: [
            {
              step: 1,
              title: "Tell us about your team",
              description:
                "Share your team's size, workflow, and goals.",
            },
            {
              step: 2,
              title: "Configure your workspace",
              description:
                "Set up projects, permissions, and integrations.",
            },
            {
              step: 3,
              title: "Invite your team",
              description:
                "Bring the people you work with into the workspace.",
            },
            {
              step: 4,
              title: "Start shipping",
              description:
                "Use your new workflow and improve it over time.",
            },
          ],
        },

        {
          type: "cta",
          title: "Ready to begin?",
          primaryButton: {
            text: "Get Started",
            page: "/contact",
          },
        },
      ],
    },
  ],
};