/**
 * Site Configuration - DonePagez
 * Controls all text content based on true DonePagez Core Product Info.
 */

export const siteConfig = {
  // Site metadata
  name: 'DonePagez',
  description: 'The Launch Operating System for AI SaaS Founders. Build unlimited pro level landing pages with Cursor. Own your code, own your launch, forever.',

  // Navigation text
  nav: {
    links: ['Features', 'How It Works', 'Pricing', 'FAQ'],
    button: 'See The Complete System'
  },

  // Hero section
  hero: {
    headline: 'Own Your Launch. Build Pro Level Pagez.',
    subheadline: 'DonePagez is the Launch OS for AI SaaS Founders.',
    button: 'Get Instant Access',
    badgeText: 'Landing Page Expansion Engine',
    secondaryButton: {
      text: 'See How It Works',
      link: '#compare'
    },
    highlights: [
      'AI Powered',
      'Cursor Optimized',
      'One Time Payment',
      '100% Code Ownership'
    ]
  },

  // Social Proof / Differentiator Section
  socialProof: {
    headline: 'Launch Smarter. Launch Stronger. Launch Free.',
    subheadline: 'Build unlimited high conversion landing pages with AI, the first time.',
    stats: [
      { value: 'Unlimited', label: 'Launches After Purchase' },
      { value: '$0 Per Month', label: 'Hosting and Backend Costs' },
      { value: '100 Percent', label: 'Full Code Ownership' },
      { value: 'Guided Videos', label: 'Walkthroughs Included' }
    ]
  },

  // Features section
  features: {
    headline: 'Own Your Launch from Day One',
    subheadline: 'DonePagez is not a page builder. It is your launch system. Expand your idea, structure your brand, and ship a polished landing page in a day, not months. No designers. No subscriptions. No wasted time.',
    featureItems: [
      {
        title: 'Full MD Vault and Codebase',
        description: 'Clone a project with a fresh Next.js, Tailwind, and Shadcn setup plus structured MD files to expand your SaaS into a real brand.'
      },
      {
        title: 'AI Expansion System',
        description: 'Use prompt chaining with GPT 4o to turn simple ideas into full marketing, branding, and landing page strategies with clear instructions.'
      },
      {
        title: 'Zero Platform Lock In',
        description: 'Pay once. Unlimited usage. Host free on Vercel. Backend free on Supabase. Complete ownership and freedom.'
      }
    ]
  },

  // Comparison Section
  comparison: {
    headline: 'How DonePagez Compares',
    subheadline: 'Own your launch stack. Own your momentum. Stop renting your brand.',
    comparisonPoints: [
      { title: "Launch Workflow", donepagez: "Structured AI with MD System", builders: "Manual Drag and Drop Visual Editors" },
      { title: "Code Output", donepagez: "Clean Next.js TSX and Tailwind", builders: "Bloated Platform Specific Code" },
      { title: "AI Fit", donepagez: "Built for Cursor and LLM Integration", builders: "Manual Workarounds Needed" },
      { title: "Ownership", donepagez: "One Hundred Percent Yours", builders: "Locked Inside SaaS Platform" },
      { title: "Pricing Model", donepagez: "Single Payment", builders: "$30 to $50 or More Per Month Forever" },
      { title: "Deployment", donepagez: "Free on Vercel and Supabase", builders: "Paid Hosting Required" }
    ],
    bottomLine: {
      title: "The Bottom Line",
      donepagez: {
        label: "DonePagez",
        description: "One time payment. You own the system forever."
      },
      builders: {
        label: "Visual Editors",
        description: "$30 to $50+ monthly forever. You're locked to their platform."
      }
    }
  },

  // Pricing section
  pricing: {
    headline: 'Launch Unlimited Projects for Life.',
    subheadline: 'One purchase. Lifetime ownership. DonePagez is your Launch OS with no hidden fees and no gatekeeping.',
    plans: [
      {
        name: 'DonePagez Launch OS',
        price: '$59',
        period: 'Lifetime Access',
        features: [
          'Full DonePagez Dashboard Access',
          'Next.js, Tailwind, and Shadcn Pro Codebase',
          'Foundational MD Strategy Vault',
          'AI Prompt Chains for GPT 4 and Cursor',
          'Beginner Friendly Video Guides',
          'Simple MD Export System',
          'Free Deploy Stack Setup (Vercel and Supabase Ready)',
          'Lifetime Updates to the Core System'
        ],
        button: 'Get DonePagez',
        audience: 'Built for Indie Hackers, SaaS Builders, and First Time Founders'
      }
    ]
  },

  // Final Call to action section
  finalCTA: {
    headline: 'Ready to Control Your Brand and Launch?',
    subheadline: 'Own the launch, the brand, and the build using AI.',
    ctaText: 'Get DonePagez Now',
    trialText: 'Single payment. Unlimited launches. Full ownership forever.'
  },

  // FAQ section
  faq: {
    headline: "Real Questions. Straight Answers.",
    subheadline: "Everything you need to know before owning your launch system.",
    questions: [
      {
        question: "What is an MD System?",
        answer: "DonePagez uses simple Markdown (MD) files clean text files that store the knowledge AI needs to understand your project. One file might define your audience. Another your product. Another your brand voice. The system part comes from stacking dozens of MD files together like building the blueprint of a house, piece by piece so when you feed them into Cursor, the AI knows exactly how to build your landing page properly. No confusion. No randomness. Just full context, ready to launch."
      },
      {
        question: "How does DonePagez work?",
        answer: "Pick your SaaS idea. Create a new project in DonePagez. Expand your idea using chaining prompts. Fill out your Audience, Product, and Branding MDs. Inject the MDs into Cursor for full context. Build your landing page with AI help. Export and deploy on Vercel. Launch and own your brand."
      },
      {
        question: "I just started with Cursor. Can I use DonePagez?",
        answer: "Yes. DonePagez was built assuming you are starting fresh. Our video guides walk you through every step, from simple idea to full AI powered landing page."
      },
      {
        question: "What makes DonePagez better than trying to build a landing page on my own?",
        answer: "DonePagez gives you a full proven system structured MD files, chaining prompts, a clean codebase, and a guided process. No guess work. No messy copy paste. Just a clean expansion from idea to pro level launch."
      },
      {
        question: "Can I customize my landing pages after DonePagez builds them?",
        answer: "Absolutely. You own full Next.js source code with Tailwind and Shadcn. Customize everything like any professional frontend project."
      },
      {
        question: "Do I still need a traditional landing page builder?",
        answer: "No. DonePagez replaces expensive no code tools for landing pages. All you need is a code editor like Cursor and a good AI model."
      }
    ]
  },

  // Footer text
  footer: {
    companyText: "DonePagez Launch Operating System for AI Builders.",
    copyright: `© ${new Date().getFullYear()} DonePagez. All rights reserved.`,
    legal: ['Privacy Policy', 'Terms of Service'],
    social: ['Twitter'] 
  }
} as const;
