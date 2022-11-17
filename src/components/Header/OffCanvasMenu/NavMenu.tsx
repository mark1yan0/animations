import React from 'react';
import { motion } from 'framer-motion';
import { navVariants } from '../variants';
import LINKS from '../../../lib/constants/routing-links';
import MenuItem from './NavItem';

const NavMenu = () => {

  return (
    <motion.ul
      variants={navVariants}
      className='h-full flex flex-col items-center justify-around overflow-hidden'
    >
      {LINKS.map((link, index: number) => (
        <MenuItem link={link} index={index} />
      ))}
    </motion.ul>
  );
};

export default NavMenu;
