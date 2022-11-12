import { Variants } from 'framer-motion';

export const offVariants: Variants = {
  opened: {
    width: '100%',
    height: '100vh',
    transition: { type: 'tween' },
  },
  closed: {
    width: 0,
    height: 0,
    transition: { type: 'tween', when: 'afterChildren' },
  },
};

export const navVariants: Variants = {
  opened: {
    transition: { staggerChildren: 0.1, delayChildren: 0.07 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const itemVariants: Variants = {
  opened: {
    opacity: 1,
    y: 0,
    display: 'block',
  },
  closed: {
    opacity: 0,
    y: -10,
    transitionEnd: {
      display: 'none',
    },
  },
};

export const underlineVariants: Variants = {
  hover: {
    width: '100%',
  },
};
