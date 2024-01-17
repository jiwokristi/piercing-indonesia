import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer
      id="Footer"
      className="py-96 px-48 bg-gray-3 grid grid-cols-[1fr_1fr_1fr_2fr] gap-y-48"
    >
      <nav>
        <ul className="flex flex-col gap-16">
          <li>
            <Link
              to="/"
              className="font-general-sans-medium text-16 text-almost-white-1"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/products?filter=all"
              className="font-general-sans-medium text-16 text-almost-white-1"
            >
              PRODUCTS
            </Link>
          </li>
          <li>
            <Link
              to="/about-us"
              className="font-general-sans-medium text-16 text-almost-white-1"
            >
              ABOUT US
            </Link>
          </li>
          <li>
            <Link
              to="/find-our-store"
              className="font-general-sans-medium text-16 text-almost-white-1"
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
              className="font-general-sans-medium text-16 text-almost-white-1"
            >
              GET HELP
            </Link>
          </li>
          <li>
            <Link
              to="/cart/order-status"
              className="text-14 text-almost-white-2 transition-all ease-in hover:text-almost-white-1"
            >
              Order Status
            </Link>
          </li>
          <li>
            <Link
              to="/get-help/delivery"
              className="text-14 text-almost-white-2 transition-all ease-in hover:text-almost-white-1"
            >
              Delivery
            </Link>
          </li>
          <li>
            <Link
              to="/get-help/returns"
              className="text-14 text-almost-white-2 transition-all ease-in hover:text-almost-white-1"
            >
              Returns
            </Link>
          </li>
          <li>
            <Link
              to="/get-help/payment-options"
              className="text-14 text-almost-white-2 transition-all ease-in hover:text-almost-white-1"
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
              className="font-general-sans-medium text-16 text-almost-white-1"
            >
              ABOUT PIERCING INDONESIA
            </Link>
          </li>
          <li>
            <Link
              to="/news"
              className="text-14 text-almost-white-2 transition-all ease-in hover:text-almost-white-1"
            >
              News
            </Link>
          </li>
          <li>
            <Link
              to="/careers"
              className="text-14 text-almost-white-2 transition-all ease-in hover:text-almost-white-1"
            >
              Careers
            </Link>
          </li>
        </ul>
      </nav>
      <nav>
        <ul className="flex flex-col items-end gap-32 heading--tertiary text-almost-white-1">
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
              className="font-general-sans-medium text-36 leading-medium border-b-4 border-almost-white-1 transition-all ease-in hover:border-transparent"
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
      <div className="pt-48 border-t-2 border-almost-white-1 col-span-4">
        <p className="text-16 font-general-sans-medium text-almost-white-1">
          &copy;{new Date().getFullYear()} PIERCING INDONESIA
        </p>
      </div>
    </footer>
  )
}
