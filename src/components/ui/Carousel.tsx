import { ProductCardProps } from './card/ProductCard'

export const Carousel = ({
  children,
}: {
  children: React.ReactElement<ProductCardProps>[]
}) => {
  return (
    <div
      className="grid grid-flow-col auto-cols-[21%] gap-32 overflow-x-auto scrollbar overscroll-x-contain p-32 pt-0 snap-x snap-mandatory"
      style={{ scrollbarGutter: 'stable' }}
    >
      {children}
    </div>
  )
}
