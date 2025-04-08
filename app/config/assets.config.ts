export const assetsConfig = {
  // PNG assets
  png: {
    hero: {
      // Add hero PNGs here
    },
    features: {
      // Add feature PNGs here
    },
    icons: {
      // Add icon PNGs here
    }
  },
  
  // JPG assets
  jpg: {
    backgrounds: {
      // Add background JPGs here
    },
    content: {
      // Add content JPGs here
    }
  }
} as const

export type AssetsConfig = typeof assetsConfig 