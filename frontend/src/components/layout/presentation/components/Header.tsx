import { useRouter } from 'next/dist/client/router'
import { Logo } from './Logo'
import { NavLink } from './NavLink'

export const Header: React.FC = () => {
  const router = useRouter()

  return (
    <div className='bg-secondary text-white text-center'>
      <div className='grid place-items-center pt-6 mb-6'>
        <Logo />
      </div>

      <div className='flex justify-between '>
        <NavLink
          href='/coffees'
          linkText='Our Coffee'
          active={router.pathname === '/coffees'}
        />
        <NavLink
          href='/teas'
          linkText='Our tea'
          active={router.pathname === '/teas'}
        />
      </div>
    </div>
  )
}
