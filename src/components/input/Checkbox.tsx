import { forwardRef, ForwardedRef, ComponentProps } from 'react'
import clsx from 'clsx'

interface CheckboxProps extends ComponentProps<'input'> {
  label?: string
  direction?: 'row' | 'column' | 'row-reverse'
  containerClasses?: string
}

const Checkbox = (
  {
    label,
    direction = 'column',
    containerClasses = '',
    ...props
  }: CheckboxProps,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  return (
    <div
      className={clsx(`flex gap-16 ${containerClasses}`, {
        'flex-col': direction === 'column',
        'flex-row items-center': direction === 'row',
        'flex-row-reverse items-center justify-end':
          direction === 'row-reverse',
      })}
    >
      <input
        ref={ref}
        className="peer relative inline-block h-[2rem] w-[2rem] cursor-pointer appearance-none rounded border-2 border-gray-1 bg-almost-white-1 transition-all ease-in checked:bg-gray-1 checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 checked:after:text-14 checked:after:text-white checked:after:content-['\2714'] active:border-gray-1 active:bg-gray-1"
        type="checkbox"
        {...props}
      />

      {label && (
        <label htmlFor={props.name} className="text-14 tracking-0.1">
          {label}
        </label>
      )}
    </div>
  )
}

// Forward the ref to the inner input element
const ForwardedCheckbox = forwardRef<HTMLInputElement, CheckboxProps>(Checkbox)

export { ForwardedCheckbox as Checkbox }
