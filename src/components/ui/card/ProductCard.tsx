import clsx from 'clsx'
import dayjs from 'dayjs'

import { mediumFormat } from '../../../utils/constants/date'

import { HeartIcon } from '../../icons'

export interface ProductCardProps {
  src: string
  alt: string
  name: string
  category: string
  price: string
  previousPrice?: string
  startDate?: string
  endDate?: string
}

export const ProductCard = ({
  src,
  alt,
  name,
  category,
  price,
  previousPrice,
  startDate,
  endDate,
}: ProductCardProps) => {
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
        <p className="leading-paragraph">{name}</p>
        <p className="text-gray-2 leading-paragraph mb-8">{category}</p>
        {previousPrice && (
          <p className="line-through text-16">{previousPrice}</p>
        )}
        <p
          className={clsx('font-general-sans-semibold text-24', {
            'text-danger': previousPrice,
          })}
        >
          {price}
        </p>
        {startDate && endDate && (
          <p className="text-danger w-3/4 leading-medium">
            Limited Offer from {dayjs(startDate).format(mediumFormat)}&ndash;
            {dayjs(endDate).format(mediumFormat)}
          </p>
        )}
      </div>
      <button className="absolute right-0 bottom-0">
        <HeartIcon classes="transition-all ease-in hover:fill-gray-1" />
      </button>
    </div>
  )
}
