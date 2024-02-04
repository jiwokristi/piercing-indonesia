import type { VariantProps } from 'class-variance-authority'

import { buttonVariants } from '../../utils/constants/variants/button'

export interface ButtonProps
  extends React.ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
  classes?: string
}

export const Button = ({
  classes = '',
  variant,
  size,
  flex,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${buttonVariants({ variant, size, flex })} ${classes}`}
      {...props}
    >
      {children}
    </button>
  )
}
