import Link from 'next/link'

const links = [
  { text: 'Simple Animation', path: '/simple' },
  { text: 'List Animation', path: '/list' },
  { text: 'Logic Gates', path: '/gates' }
]

export default function Header() {
  return (
    <nav className='w-full h-12 flex items-center justify-around bg-cyan-900 mb-6 text-white'>
      {links.map((link, index: number) => (
        <Link href={link.path} key={link.path + index}>
          {link.text}
        </Link>
      ))}
    </nav>
  )
}
