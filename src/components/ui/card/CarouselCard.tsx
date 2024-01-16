import { HeartIcon } from '../../icons'

export interface CarouselCardProps {
  src: string
  alt: string
  name: string
  category: string
  price: string
}

export const CarouselCard = ({
  src,
  alt,
  name,
  category,
  price,
}: CarouselCardProps) => {
  return (
    <div className="relative grid grid-rows-[min-content] gap-16 font-general-sans-medium text-18 snap-start">
      <div className="w-fit h-fit overflow-hidden">
        <img
          className="aspect-square object-cover object-center transition-all ease-in hover:scale-110"
          style={{ inlineSize: '100%' }}
          src={src}
          alt={alt}
        />
      </div>
      <div className="flex flex-col gap-8">
        <p>{name}</p>
        <p className="text-gray-2 leading-medium mb-8">{category}</p>
        <p>{price}</p>
      </div>
      <button className="absolute right-0 bottom-0">
        <HeartIcon classes="transition-all ease-in hover:fill-gray-1" />
      </button>
    </div>
  )
}
