import { useState } from 'react';
import MenuIcon from '../SvgIcons/MenuIcon';
import OffCanvasMenu from './OffCanvasMenu';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className='w-full h-12 flex items-center justify-end px-2 bg-cyan-900 mb-6 text-white'>
      <MenuIcon clickHandler={() => setOpen(prev => !prev)} open={open} />
      <OffCanvasMenu open={open} />
    </header>
  );
}
