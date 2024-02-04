import { forwardRef, ForwardedRef, useMemo, ComponentProps } from 'react'
import type { VariantProps } from 'class-variance-authority'

import {
  InputSizes,
  inputVariants,
  sizes,
} from '../../utils/constants/variants/input'

import { AsteriskIcon } from '../icons/Asterisk'

export interface InputProps
  extends Omit<ComponentProps<'input'>, 'size' | 'required'>,
    VariantProps<typeof inputVariants> {
  classes?: string
  containerClasses?: string
  required?: boolean
}

const Input = (
  {
    classes = '',
    containerClasses = '',
    variant,
    size,
    required,
    ...props
  }: InputProps,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  const iconSize = useMemo(() => {
    return Number(`${sizes[size as InputSizes][0]}`.split('-')[1])
  }, [size])

  return (
    <div className={`relative ${containerClasses}`}>
      <input
        ref={ref}
        className={`peer ${inputVariants({ variant, size })} ${classes}`}
        {...props}
      />
      {required && (
        <div className="absolute right-16 top-1/2 -translate-y-1/2 transition-all ease-in-out duration-1000 peer-hover:rotate-360">
          <AsteriskIcon width={iconSize} height={iconSize} />
        </div>
      )}
    </div>
  )
}

const ForwardedInput = forwardRef<HTMLInputElement, InputProps>(Input)

export { ForwardedInput as Input }
