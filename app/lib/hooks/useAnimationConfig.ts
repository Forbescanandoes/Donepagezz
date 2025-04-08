import { useReducedMotion } from 'framer-motion';

export interface AnimationConfig {
  shouldAnimate: boolean;
  transition: {
    duration: number;
    ease: string;
  };
}

export function useAnimationConfig(customDuration?: number): AnimationConfig {
  const prefersReducedMotion = useReducedMotion();

  // If user prefers reduced motion, return minimal animation config
  if (prefersReducedMotion) {
    return {
      shouldAnimate: false,
      transition: {
        duration: 0,
        ease: 'linear',
      },
    };
  }

  // Default animation configuration
  return {
    shouldAnimate: true,
    transition: {
      duration: customDuration || 0.4,
      ease: 'easeOut',
    },
  };
}
