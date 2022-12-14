
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react'
import useSideNavStore from '../../../lib/store/side-nav';
import { itemVariants, underlineVariants } from '../variants';

interface IMenuItemProps {
  link: { path: string, text: string },
  index: number
}
  
const MenuItem: React.FC<IMenuItemProps> = ({ link, index }) => {
  const toggleMenu = useSideNavStore(state => state.toggleSideNav);
  return (
    <motion.li
      className='w-fit text-3xl flex flex-col'
      variants={itemVariants}
      key={link.path + index}
    >
      <motion.span whileHover='hover' onClick={toggleMenu} className='relative'>
        <Link href={link.path}>{link.text}</Link>
        <motion.span
          initial={{ width: 0 }}
          className='h-0.5 bg-black absolute -bottom-2 left-0'
          layout
          variants={underlineVariants}
        ></motion.span>
      </motion.span>
    </motion.li>
  )
}

export default MenuItem