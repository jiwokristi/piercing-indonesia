import { ShoppingCart } from 'lucide-react'

export const CartIcon = ({ classes = '' }: { classes?: string }) => {
  return <ShoppingCart className={`text-gray-1 ${classes}`} />
}
