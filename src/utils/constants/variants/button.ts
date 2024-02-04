import { cva } from 'class-variance-authority'

const variants = {
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

const sizes = {
  sm: 'max-h-[4rem] px-24 py-12 text-16 tracking-0.1',
  xl: ['text-52', 'px-16', 'py-12', '-tracking-0.1'],
}

const effects = {}

const flexOptions = {
  'column-reverse': 'flex flex-col-reverse',
  row: 'flex',
}

export type ButtonVariants = keyof typeof variants

export const buttonVariants = cva(
  'group gap-16 overflow-hidden font-general-sans-medium text-center transition-all ease-in duration-200 disabled:cursor-not-allowed',
  {
    variants: {
      variant: variants,
      size: sizes,
      effect: effects,
      flex: flexOptions,
    },
    defaultVariants: {
      variant: 'solid-gray',
      size: 'sm',
      flex: 'column-reverse',
    },
  },
)
