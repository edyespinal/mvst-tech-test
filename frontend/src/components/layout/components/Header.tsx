import { useIsMobile } from '@/hooks/useIsMobile'
import { useRouter } from 'next/dist/client/router'
import { Logo } from './Logo'
import { NavLink } from './NavLink'

export const Header: React.FC = () => {
  const router = useRouter()
  const isMobile = useIsMobile()

  return (
    <div className='bg-secondary text-white text-center'>
      <div className='max-w-100 mx-auto md:flex md:justify-between'>
        <div className='grid place-items-center pt-6 mb-6 '>
          <Logo mobile={isMobile} />
        </div>

        <div className='flex justify-between self-end md:gap-14'>
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
        <div className='helper'></div>
      </div>
    </div>
  )
}
