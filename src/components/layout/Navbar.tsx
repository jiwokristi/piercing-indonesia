import { Link } from 'react-router-dom'
import clsx from 'clsx'

import { useUrl } from '../../utils/hooks/useUrl'

import { LinkButton } from '../ui/button'

import { CartIcon, HeartIcon } from '../icons'

export const Navbar = () => {
  const { mainTab, isDarkLayout } = useUrl()

  return (
    <nav
      id="Navbar"
      className={clsx(
        'sticky top-0 z-20 text-20 flex items-center p-32 justify-between tracking-1.25',
        {
          'bg-gray-3': isDarkLayout,
          'bg-almost-white-1': !isDarkLayout,
        },
      )}
    >
      <Link to="/">Logo</Link>
      <ul className="flex items-center gap-32">
        <li className="group overflow-hidden flex flex-col-reverse gap-16 max-h-[2rem]">
          <Link
            to="/"
            target="_top"
            className={clsx(
              'group-hover:translate-y-[2rem] transition-all ease-in duration-200',
              {
                'font-general-sans-medium': !mainTab,
              },
            )}
          >
            Home
          </Link>
          <Link
            to="/"
            target="_top"
            className={clsx(
              'group-hover:translate-y-[3.6rem] transition-all ease-in duration-200',
              {
                'font-general-sans-medium': !mainTab,
              },
            )}
          >
            Home
          </Link>
        </li>
        <li>
          <Link to="/products?filter=all" target="_top">
            Products
          </Link>
        </li>
        <li className="group overflow-hidden flex flex-col-reverse gap-16 max-h-[2rem]">
          <Link
            to="/about-us"
            target="_top"
            className={clsx(
              'group-hover:translate-y-[2rem] transition-all ease-in duration-200',
              {
                'font-general-sans-medium': mainTab === 'about-us',
              },
            )}
          >
            About Us
          </Link>
          <Link
            to="/about-us"
            target="_top"
            className={clsx(
              'group-hover:translate-y-[3.6rem] transition-all ease-in duration-200',
              {
                'font-general-sans-medium': mainTab === 'about-us',
              },
            )}
          >
            About Us
          </Link>
        </li>
        <li className="group overflow-hidden flex flex-col-reverse gap-16 max-h-[2rem]">
          <Link
            to="find-our-store"
            target="_top"
            className={clsx(
              'group-hover:translate-y-[2rem] transition-all ease-in duration-200',
              {
                'font-general-sans-medium': mainTab === 'find-our-store',
              },
            )}
          >
            Find Our Store
          </Link>
          <Link
            to="find-our-store"
            target="_top"
            className={clsx(
              'group-hover:translate-y-[3.6rem] transition-all ease-in duration-200',
              {
                'font-general-sans-medium': mainTab === 'find-our-store',
              },
            )}
          >
            Find Our Store
          </Link>
        </li>
      </ul>
      <div className="flex items-center gap-32">
        <Link to="wishlist">
          <HeartIcon classes={isDarkLayout ? '!text-almost-white-1' : ''} />
        </Link>
        <Link to="cart">
          <CartIcon classes={isDarkLayout ? '!text-almost-white-1' : ''} />
        </Link>
        <LinkButton
          variant={isDarkLayout ? 'solid-white' : 'solid-gray'}
          href="/sign-in"
          label="SIGN IN"
        />
      </div>
    </nav>
  )
}
