import React from 'react';
import { motion } from 'framer-motion';

const MenuIcon: React.FC<{
  open: boolean;
  clickHandler: React.MouseEventHandler<HTMLSpanElement>;
}> = ({ clickHandler, open }) => {
  return (
    <motion.span
      whileTap={{ scale: 0.8 }}
      onClick={clickHandler}
      className='cursor-pointer z-50'
    >
      <HamburgerSVG open={open} />
    </motion.span>
  );
};

export default MenuIcon;

const HamburgerSVG: React.FC<{ open: boolean }> = ({ open }) => {
  return (
    <svg
      width='30px'
      height='30px'
      viewBox='0 0 150 150'
      className={`transition-all duration-500 ease-linear ${
        open ? 'fill-black' : 'fill-white'
      }`}
    >
      <g id='XMLID_240_'>
        <path
          className={`transition-all ${
            open
              ? 'rotate-45 translate-x-[34px] translate-y-[10px]'
              : 'rotate-0 translate-x-0 translate-y-0'
          }`}
          id='XMLID_241_'
          d='M15,30h120c8.284,0,15-6.716,15-15s-6.716-15-15-15H15C6.716,0,0,6.716,0,15S6.716,30,15,30z'
        />
        <path
          className={open ? 'hidden' : 'visible'}
          id='XMLID_242_'
          d='M135,60H15C6.716,60,0,66.716,0,75s6.716,15,15,15h120c8.284,0,15-6.716,15-15S143.284,60,135,60z'
        />
        <path
          className={`transition-all ${
            open
              ? '-rotate-45 translate-x-[-71px] translate-y-[30px]'
              : 'rotate-0 translate-x-0 translate-y-0'
          }`}
          id='XMLID_243_'
          d='M135,120H15c-8.284,0-15,6.716-15,15s6.716,15,15,15h120c8.284,0,15-6.716,15-15S143.284,120,135,120z'
        />
      </g>
    </svg>
  );
};
