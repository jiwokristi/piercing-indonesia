import { cva } from 'class-variance-authority'

export const variants = {
  'solid-white': ['text-gray-3', 'bg-almost-white-1'],
  'solid-gray': ['text-almost-white-1', 'bg-gray-1'],

  'outlined-white': [
    'text-almost-white-1',
    'ring-inset',
    'ring-1',
    'ring-almost-white-1',
  ],
  'outlined-gray': ['text-gray-1', 'ring-inset', 'ring-1', 'ring-gray-1'],
}

export type ButtonVariants = keyof typeof variants

export const buttonVariants = cva(
  'group flex flex-col-reverse gap-16 max-h-[4rem] overflow-hidden px-24 py-12 font-general-sans-medium text-center text-16 tracking-0.1 transition-all ease-in duration-200 disabled:cursor-not-allowed',
  {
    variants: {
      variant: variants,
    },
    defaultVariants: {
      variant: 'solid-gray',
    },
  },
)
