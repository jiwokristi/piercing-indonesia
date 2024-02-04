import { ShoppingCart } from 'lucide-react'

interface CartIconProps extends React.ComponentProps<typeof ShoppingCart> {
  classes?: string
}

export const CartIcon = ({ classes = '', ...props }: CartIconProps) => {
  return <ShoppingCart className={`text-gray-1 ${classes}`} {...props} />
}
