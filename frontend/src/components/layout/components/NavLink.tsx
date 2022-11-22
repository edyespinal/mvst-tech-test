import Link from 'next/link'

interface INavLink {
  href: string
  linkText: string
  active?: boolean
}

export const NavLink: React.FC<INavLink> = ({ href, linkText, active }) => {
  return (
    <div className='w-full min-w-fit'>
      <Link href={href}>
        <a className='font-medium'>{linkText}</a>
      </Link>
      {active && <div className='bg-tertiary w-full h-[10px] mt-1'></div>}
    </div>
  )
}
