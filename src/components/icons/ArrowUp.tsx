import { ArrowUp } from 'lucide-react'

interface ArrowUpProps extends React.ComponentProps<typeof ArrowUp> {
  classes?: string
}

export const ArrowUpIcon = ({ classes = '', ...props }: ArrowUpProps) => {
  return <ArrowUp className={`text-gray-1 ${classes}`} {...props} />
}
