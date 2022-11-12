import React from 'react';
import { motion } from 'framer-motion';
import { offVariants } from '../variants';
import NavMenu from './NavMenu';
import useSideNavStore from '../../../lib/store/side-nav';

const OffCanvasMenu = () => {
  const open = useSideNavStore(state => state.isOpen);
  return (
    <motion.nav
      initial={false}
      variants={offVariants}
      animate={open ? 'opened' : 'closed'}
      className='z-40 absolute top-0 right-0 bg-white text-black h-screen'
    >
      <NavMenu />
    </motion.nav>
  );
};

export default OffCanvasMenu;
