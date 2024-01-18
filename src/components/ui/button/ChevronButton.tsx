import { ChevronsLeftIcon, ChevronsRightIcon } from '../../icons'

interface ChevronButtonProps extends React.ComponentProps<'button'> {
  classes?: string
  chevronClasses?: string
  direction: 'left' | 'right'
}

export const ChevronButtonGray = ({
  classes = '',
  chevronClasses = '',
  direction,
  ...props
}: ChevronButtonProps) => {
  return (
    <button
      className={`transition-all ease-in hover:scale-90 ${classes}`}
      {...props}
    >
      {direction === 'left' ? (
        <ChevronsLeftIcon
          classes={`!text-almost-white-1 ${chevronClasses}`}
          width={44}
          height={44}
        />
      ) : (
        <ChevronsRightIcon
          classes={`!text-almost-white-1 ${chevronClasses}`}
          width={44}
          height={44}
        />
      )}
    </button>
  )
}

export const ChevronsButtonWhite = ({
  classes = '',
  chevronClasses = '',
  direction,
  ...props
}: ChevronButtonProps) => {
  return (
    <button
      className={`transition-all ease-in hover:scale-90 ${classes}`}
      {...props}
    >
      {direction === 'left' ? (
        <ChevronsLeftIcon classes={chevronClasses} width={44} height={44} />
      ) : (
        <ChevronsRightIcon classes={chevronClasses} width={44} height={44} />
      )}
    </button>
  )
}
