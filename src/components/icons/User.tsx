import { User2 } from 'lucide-react'

interface UserIconProps extends React.ComponentProps<typeof User2> {
  classes?: string
}

export const UserIcon = ({ classes = '', ...props }: UserIconProps) => {
  return <User2 className={`text-gray-1 ${classes}`} {...props} />
}
