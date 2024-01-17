import { Link } from 'react-router-dom'
import clsx from 'clsx'

import { useUrl } from '../../utils/hooks/useUrl'

export const Footer = () => {
  const { isDarkLayout } = useUrl()

  return (
    <footer
      id="Footer"
      className={clsx('py-96 px-48 grid grid-cols-[1fr_1fr_1fr_2fr] gap-y-48', {
        'bg-almost-white-1': isDarkLayout,
        'bg-gray-3': !isDarkLayout,
      })}
    >
      <nav>
        <ul className="flex flex-col gap-16">
          <li>
            <Link
              to="/"
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
              to="/about-us"
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
              to="/find-our-store"
              className={clsx('font-general-sans-medium text-16', {
                'text-gray-3': isDarkLayout,
                'text-almost-white-1': !isDarkLayout,
              })}
            >
              FIND OUR STORE
            </Link>
          </li>
        </ul>
      </nav>
      <nav>
        <ul className="flex flex-col gap-16">
          <li>
            <Link
              to="/get-help"
              className={clsx('font-general-sans-medium text-16', {
                'text-gray-3': isDarkLayout,
                'text-almost-white-1': !isDarkLayout,
              })}
            >
              GET HELP
            </Link>
          </li>
          <li>
            <Link
              to="/cart/order-status"
              className={clsx('text-14 transition-all ease-in', {
                'text-gray-1 hover:text-gray-3': isDarkLayout,
                'text-almost-white-2 hover:text-almost-white-1': !isDarkLayout,
              })}
            >
              Order Status
            </Link>
          </li>
          <li>
            <Link
              to="/get-help/delivery"
              className={clsx('text-14 transition-all ease-in', {
                'text-gray-1 hover:text-gray-3': isDarkLayout,
                'text-almost-white-2 hover:text-almost-white-1': !isDarkLayout,
              })}
            >
              Delivery
            </Link>
          </li>
          <li>
            <Link
              to="/get-help/returns"
              className={clsx('text-14 transition-all ease-in', {
                'text-gray-1 hover:text-gray-3': isDarkLayout,
                'text-almost-white-2 hover:text-almost-white-1': !isDarkLayout,
              })}
            >
              Returns
            </Link>
          </li>
          <li>
            <Link
              to="/get-help/payment-options"
              className={clsx('text-14 transition-all ease-in', {
                'text-gray-1 hover:text-gray-3': isDarkLayout,
                'text-almost-white-2 hover:text-almost-white-1': !isDarkLayout,
              })}
            >
              Payment Options
            </Link>
          </li>
        </ul>
      </nav>
      <nav>
        <ul className="flex flex-col gap-16">
          <li>
            <Link
              to="/about-us"
              className={clsx('font-general-sans-medium text-16', {
                'text-gray-3': isDarkLayout,
                'text-almost-white-1': !isDarkLayout,
              })}
            >
              ABOUT PIERCING INDONESIA
            </Link>
          </li>
          <li>
            <Link
              to="/news"
              className={clsx('text-14 transition-all ease-in', {
                'text-gray-1 hover:text-gray-3': isDarkLayout,
                'text-almost-white-2 hover:text-almost-white-1': !isDarkLayout,
              })}
            >
              News
            </Link>
          </li>
          <li>
            <Link
              to="/careers"
              className={clsx('text-14 transition-all ease-in', {
                'text-gray-1 hover:text-gray-3': isDarkLayout,
                'text-almost-white-2 hover:text-almost-white-1': !isDarkLayout,
              })}
            >
              Careers
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
