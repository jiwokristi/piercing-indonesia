import { Link } from 'react-router-dom'

import {
  buttonVariants,
  ButtonVariants,
} from '../../../utils/constants/variants/button'

interface LinkButton {
  href: string
  label: string
  classes?: string
  variant: ButtonVariants
}

export const LinkButton = ({
  variant,
  href,
  label,
  classes = '',
}: LinkButton) => {
  return (
    <Link to={href} className={`${buttonVariants({ variant })} ${classes}`}>
      <span className="group-hover:translate-y-32 transition-all ease-in duration-200">
        {label}
      </span>
      <span className="group-hover:translate-y-32 transition-all ease-in duration-200">
        {label}
      </span>
    </Link>
  )
}
