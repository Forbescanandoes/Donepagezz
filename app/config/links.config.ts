/**
 * This configuration file controls all links, URLs, and scroll targets throughout the site.
 * Edit the values below to update where buttons and links point to.
 */

export const linksConfig = {
  // Navigation scroll targets
  nav: {
    scroll: {
      features: '#features',
      compare: '#compare',
      pricing: '#pricing',
      faq: '#faq'
    }
  },

  // External URLs for main actions
  external: {
    // Main product URL
    getDonepagez: 'https://x.com/0xlog1k',
    // Contact page
    contact: 'https://x.com/0xlog1k',
    // Legal pages
    privacy: 'https://x.com/0xlog1k',
    terms: 'https://x.com/0xlog1k',
    // Social media
    twitter: 'https://x.com/0xlog1k'
  }
} as const;