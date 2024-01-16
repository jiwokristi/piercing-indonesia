import { CarouselCardProps } from './card/CarouselCard'

export const Carousel = ({
  children,
}: {
  children: React.ReactElement<CarouselCardProps>[]
}) => {
  return (
    <div className="grid grid-flow-col auto-cols-[21%] gap-32 overflow-x-auto scrollbar overscroll-x-contain p-32 pt-0 snap-x snap-mandatory">
      {children}
    </div>
  )
}
