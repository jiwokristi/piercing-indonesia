import clsx from 'clsx'

import { useUrl } from '../utils/hooks/useUrl'

import { ChevronButtonGray } from './button/ChevronButton'

interface CarouselProps extends React.ComponentProps<'div'> {
  withArrows?: boolean
  classes?: string
  containerClasses?: string
  children: React.ReactNode
  onBack?: () => void
  onNext?: () => void
  disableBack?: boolean
  disableNext?: boolean
}

export const Carousel = ({
  withArrows,
  classes = 'auto-cols-[21%]',
  containerClasses = '',
  children,
  onBack,
  onNext,
  disableBack,
  disableNext,
  ...props
}: CarouselProps) => {
  const { isDarkLayout } = useUrl()

  return (
    <div className={`relative ${containerClasses}`}>
      {withArrows && (
        <ChevronButtonGray
          classes="absolute top-1/2 -left-24 -translate-y-1/2 z-10"
          direction="left"
          onClick={onBack}
          disabled={disableBack}
        />
      )}
      <div
        id="Carousel"
        className={clsx(
          `relative grid grid-flow-col gap-32 overflow-x-auto overscroll-x-contain p-32 pt-0 snap-x snap-mandatory ${classes}`,
          {
            'scrollbar-dark': isDarkLayout,
            scrollbar: !isDarkLayout,
          },
        )}
        style={{ scrollbarGutter: 'stable' }}
        {...props}
      >
        {children}
      </div>
      {withArrows && (
        <ChevronButtonGray
          classes="absolute top-1/2 -right-24 -translate-y-1/2 z-10"
          direction="right"
          onClick={onNext}
          disabled={disableNext}
        />
      )}
    </div>
  )
}
