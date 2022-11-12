import React from 'react';
import { motion } from 'framer-motion';
import { offVariants } from '../variants';
import NavMenu from './NavMenu';

const OffCanvasMenu: React.FC<{ open: boolean }> = ({ open }) => {
  return (
    <motion.nav
      initial={false}
      variants={offVariants}
      animate={open ? 'opened' : 'closed'}
      className='absolute top-0 right-0 bg-white text-black h-screen'
    >
      <NavMenu />
    </motion.nav>
  );
};

export default OffCanvasMenu;
