export const logoConfig = {
  // Main brand logo (used in light backgrounds)
  primary: {
    src: '/logos/placeholder-logo.svg' as const,  // Simple, direct path
    alt: 'Company Logo',
    width: 160,  // Base size optimized for mobile (53px height)
    height: 53   // Standard mobile logo height
  }
} as const

export type LogoConfig = typeof logoConfig 