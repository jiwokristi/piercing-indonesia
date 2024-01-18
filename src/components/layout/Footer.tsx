import { Link } from 'react-router-dom'
import clsx from 'clsx'

import { useUrl } from '../../utils/hooks/useUrl'

export const Footer = () => {
  const { isDarkLayout } = useUrl()

  return (
    <footer
      id="Footer"
      className={clsx('py-96 px-48 grid grid-cols-[1fr_1fr_3fr] gap-y-48', {
        'bg-almost-white-1': isDarkLayout,
        'bg-gray-3': !isDarkLayout,
      })}
    >
      <nav>
        <ul className="flex flex-col gap-16">
          <li>
            <Link
              to="/"
              target="_top"
              className={clsx('font-general-sans-medium text-16', {
                'text-gray-3': isDarkLayout,
                'text-almost-white-1': !isDarkLayout,
              })}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/products?filter=all"
              target="_top"
              className={clsx('font-general-sans-medium text-16', {
                'text-gray-3': isDarkLayout,
                'text-almost-white-1': !isDarkLayout,
              })}
            >
              PRODUCTS
            </Link>
          </li>
          <li>
            <Link
              to="/find-our-store"
              target="_top"
              className={clsx('font-general-sans-medium text-16', {
                'text-gray-3': isDarkLayout,
                'text-almost-white-1': !isDarkLayout,
              })}
            >
              FIND OUR STORE
            </Link>
          </li>
          <li>
            <Link
              to="/about-us"
              target="_top"
              className={clsx('font-general-sans-medium text-16', {
                'text-gray-3': isDarkLayout,
                'text-almost-white-1': !isDarkLayout,
              })}
            >
              ABOUT US
            </Link>
          </li>
          <li>
            <Link
              to="/feedback"
              target="_top"
              className={clsx('font-general-sans-medium text-16', {
                'text-gray-3': isDarkLayout,
                'text-almost-white-1': !isDarkLayout,
              })}
            >
              SEND US FEEDBACK
            </Link>
          </li>
        </ul>
      </nav>
      <nav>
        <ul className="flex flex-col gap-16">
          <li>
            <p
              className={clsx('font-general-sans-medium text-16', {
                'text-gray-3': isDarkLayout,
                'text-almost-white-1': !isDarkLayout,
              })}
            >
              GET HELP
            </p>
          </li>
          <li>
            <Link
              to="/faq"
              className={clsx('text-14 transition-all ease-in', {
                'text-gray-1 hover:text-gray-3': isDarkLayout,
                'text-almost-white-2 hover:text-almost-white-1': !isDarkLayout,
              })}
            >
              Frequently Asked
            </Link>
          </li>
        </ul>
      </nav>

      <nav>
        <ul
          className={clsx('flex flex-col items-end gap-32 heading--tertiary', {
            'text-gray-3': isDarkLayout,
            'text-almost-white-1': !isDarkLayout,
          })}
        >
          <li className="flex items-center justify-end gap-32">
            <Link
              to="https://www.instagram.com/piercingindonesia/"
              target="_blank"
            >
              IG
            </Link>
            <Link
              to="https://www.youtube.com/channel/UC90IkRBkBuu9XjVi9S9vBvQ"
              target="_blank"
            >
              YT
            </Link>
          </li>
          <li className="flex flex-col items-end gap-16">
            <Link
              to="mailto:piercingindonesia@gmail.com"
              className={clsx(
                'font-general-sans-medium text-36 leading-medium border-b-4 transition-all ease-in hover:border-transparent',
                {
                  'border-gray-3': isDarkLayout,
                  'border-almost-white-1': !isDarkLayout,
                },
              )}
            >
              piercingindonesia@gmail.com
            </Link>
            <Link
              to="tel:+62-812-2052-3330"
              className="font-general-sans-medium text-36 leading-medium"
            >
              +62-812-2052-3330
            </Link>
          </li>
        </ul>
      </nav>
      <div
        className={clsx('pt-48 border-t-2 col-span-4', {
          'border-gray-3': isDarkLayout,
          'border-almost-white-1': !isDarkLayout,
        })}
      >
        <p
          className={clsx('text-16 font-general-sans-medium ', {
            'text-gray-3': isDarkLayout,
            'text-almost-white-1': !isDarkLayout,
          })}
        >
          &copy;{new Date().getFullYear()} PIERCING INDONESIA
        </p>
      </div>
    </footer>
  )
}
