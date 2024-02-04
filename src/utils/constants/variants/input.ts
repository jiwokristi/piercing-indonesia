import { cva } from 'class-variance-authority'

const variants = {
  'plain-white':
    'border-b border-gray-1 placeholder-gray-1 bg-transparent text-gray-1',
}

export const sizes = {
  xl: ['text-52', 'font-general-sans-semibold'],
}

export type InputVariants = keyof typeof variants
export type InputSizes = keyof typeof sizes

export const inputVariants = cva(
  'w-full px-16 -tracking-0.1 transition-all ease-in duration-200 disabled:cursor-not-allowed',
  {
    variants: {
      variant: variants,
      size: sizes,
    },
    defaultVariants: {
      variant: 'plain-white',
    },
  },
)
