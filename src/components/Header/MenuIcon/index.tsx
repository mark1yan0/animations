import { motion } from 'framer-motion';
import useSideNavStore from '../../../lib/store/side-nav';
import HamburgerSVG from '../../SvgIcons/HamburgerSVG';

const MenuIcon = () => {
  const toggleSideNav = useSideNavStore(state => state.toggleSideNav);
  return (
    <motion.span
      whileTap={{ scale: 0.8 }}
      onClick={toggleSideNav}
      className='cursor-pointer z-50'
    >
      <HamburgerSVG />
    </motion.span>
  );
};

export default MenuIcon;
