import { Heart } from 'lucide-react'

interface HeartIconProps extends React.ComponentProps<typeof Heart> {
  classes?: string
}

export const HeartIcon = ({ classes = '', ...props }: HeartIconProps) => {
  return <Heart className={`text-gray-1 ${classes}`} {...props} />
}
