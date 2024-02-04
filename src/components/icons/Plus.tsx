import { Plus } from 'lucide-react'

interface PlusIconProps extends React.ComponentProps<typeof Plus> {
  classes?: string
}

export const PlusIcon = ({ classes = '', ...props }: PlusIconProps) => {
  return <Plus className={`text-gray-1 ${classes}`} {...props} />
}
