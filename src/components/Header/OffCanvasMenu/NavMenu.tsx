import React from 'react';
import { motion } from 'framer-motion';
import { itemVariants, navVariants, underlineVariants } from '../variants';
import Link from 'next/link';
import LINKS from '../../../lib/constants/routing-links';
import useSideNavStore from '../../../lib/store/side-nav';

const NavMenu = () => {
  const toggleMenu = useSideNavStore(state => state.toggleSideNav);
  return (
    <motion.ul
      variants={navVariants}
      className='h-full flex flex-col items-center justify-around overflow-hidden'
    >
      {LINKS.map((link, index: number) => (
        <motion.li
          className='w-fit text-3xl flex flex-col'
          variants={itemVariants}
          key={link.path + index}
        >
          <motion.span initial={false} whileHover='hover' onClick={toggleMenu}>
            <Link href={link.path}>{link.text}</Link>
            <motion.span
              className='w-0 h-0.5 bg-black'
              variants={underlineVariants}
            ></motion.span>
          </motion.span>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default NavMenu;
