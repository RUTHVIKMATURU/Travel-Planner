import type { Variants } from "framer-motion";

export function fadeUpVariants(reduceMotion: boolean): Variants {
  if (reduceMotion) {
    return {
      hidden: { opacity: 1, y: 0 },
      visible: { opacity: 1, y: 0 },
    };
  }

  return {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
}

export function staggerContainer(reduceMotion: boolean): Variants {
  return {
    hidden: {},
    visible: {
      transition: reduceMotion
        ? { staggerChildren: 0 }
        : {
            staggerChildren: 0.1,
            delayChildren: 0.08,
          },
    },
  };
}

export const revealViewport = {
  once: true,
  amount: 0.2,
} as const;
