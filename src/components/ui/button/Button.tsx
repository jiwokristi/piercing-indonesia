import type { VariantProps } from 'class-variance-authority'

import { buttonVariants } from '../../../utils/constants/variants/button'

export interface ButtonProps
  extends React.ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
  classes?: string
}

export const Button = ({
  classes = '',
  variant,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button className={`${buttonVariants({ variant })} ${classes}`} {...props}>
      {children}
    </button>
  )
}
