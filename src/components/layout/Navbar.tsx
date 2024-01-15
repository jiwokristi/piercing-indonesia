import { Link } from 'react-router-dom'

import { CartIcon, HeartIcon } from '../icons'

export const Navbar = () => {
  return (
    <nav
      id="Navbar"
      className="sticky top-0 z-20 text-20 flex items-center p-32 justify-between tracking-1.25 bg-almost-white-1"
    >
      <Link to="/">Logo</Link>
      <ul className="flex items-center gap-32">
        <li className="group overflow-hidden flex flex-col-reverse gap-16 max-h-[2rem]">
          <Link
            to="/"
            className="group-hover:translate-y-[2rem] transition-all ease-in duration-200"
          >
            Home
          </Link>
          <Link
            to="/"
            className="group-hover:translate-y-[3.6rem] transition-all ease-in duration-200"
          >
            Home
          </Link>
        </li>
        <li>
          <Link to="/products?filter=all">Products</Link>
        </li>
        <li className="group overflow-hidden flex flex-col-reverse gap-16 max-h-[2rem]">
          <Link
            to="/about-us"
            className="group-hover:translate-y-[2rem] transition-all ease-in duration-200"
          >
            About Us
          </Link>
          <Link
            to="/about-us"
            className="group-hover:translate-y-[3.6rem] transition-all ease-in duration-200"
          >
            About Us
          </Link>
        </li>
        <li className="group overflow-hidden flex flex-col-reverse gap-16 max-h-[2rem]">
          <Link
            to="payment-confirmation"
            className="group-hover:translate-y-[2rem] transition-all ease-in duration-200"
          >
            Find Our Store
          </Link>
          <Link
            to="payment-confirmation"
            className="group-hover:translate-y-[3.6rem] transition-all ease-in duration-200"
          >
            Find Our Store
          </Link>
        </li>
      </ul>
      <div className="flex items-center gap-32">
        <Link to="wishlist">
          <HeartIcon />
        </Link>
        <Link to="cart">
          <CartIcon />
        </Link>
        <Link
          to="/sign-in"
          className="group flex flex-col-reverse gap-16 max-h-[4rem] px-24 py-12 bg-gray-1 text-almost-white-1 text-16 transition-all duration-200 ease-in"
        >
          <span className="group-hover:translate-y-32 transition-all ease-in duration-200">
            SIGN IN
          </span>
          <span className="group-hover:translate-y-32 transition-all ease-in duration-200">
            SIGN IN
          </span>
        </Link>
      </div>
    </nav>
  )
}
