import { Link } from 'react-router-dom'

interface LinkButton {
  href: string
  label: string
}

export const LinkButtonWhite = ({ href, label }: LinkButton) => {
  return (
    <Link
      to={href}
      className="group flex flex-col-reverse gap-16 max-h-[4rem] px-24 py-12 bg-almost-white-1 font-general-sans-medium text-gray-3 text-16 transition-all duration-200 ease-in"
    >
      <span className="group-hover:translate-y-32 transition-all ease-in duration-200">
        {label}
      </span>
      <span className="group-hover:translate-y-32 transition-all ease-in duration-200">
        {label}
      </span>
    </Link>
  )
}

export const LinkButtonGray = ({ href, label }: LinkButton) => {
  return (
    <Link
      to={href}
      className="group flex flex-col-reverse gap-16 max-h-[4rem] px-24 py-12 bg-gray-1 text-almost-white-1 text-16 transition-all duration-200 ease-in"
    >
      <span className="group-hover:translate-y-32 transition-all ease-in duration-200">
        {label}
      </span>
      <span className="group-hover:translate-y-32 transition-all ease-in duration-200">
        {label}
      </span>
    </Link>
  )
}
