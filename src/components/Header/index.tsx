import OffCanvasMenu from './OffCanvasMenu';
import MenuIcon from './MenuIcon';

export default function Header() {
  return (
    <header className='w-full h-12 flex items-center justify-end px-2 md:px-6 bg-cyan-900 mb-6 text-white'>
      <MenuIcon />
      <OffCanvasMenu />
    </header>
  );
}
