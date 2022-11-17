import { Variants } from 'framer-motion';

export const offVariants: Variants = {
  opened: {
    width: '100%',
    height: '100vh',
    borderBottomLeftRadius: 0,
    transition: { 
      type: 'tween'
    },
  },
  closed: {
    borderBottomLeftRadius: '100%',
    width: 0,
    height: 0,
    transition: {
      type: 'tween', when: 'afterChildren'
    },
  },
};

export const navVariants: Variants = {
  opened: {
    transition: { staggerChildren: 0.25, delayChildren: 0.01 },
  },
  closed: {
    transition: { staggerDirection: -1 }
  },
};

export const itemVariants: Variants = {
  opened: {
    opacity: 1,
    y: 0
  },
  closed: {
    opacity: 0,
    y: -10
  },
};

export const underlineVariants: Variants = {
  hover: {
    width: '100%',
    // transition: {
    //   type: 'spring',
    //   stiffness: 1
    // }
  },
};
