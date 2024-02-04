import { Asterisk } from 'lucide-react'

interface AsteriskProps extends React.ComponentProps<typeof Asterisk> {
  classes?: string
}

export const AsteriskIcon = ({ classes = '', ...props }: AsteriskProps) => {
  return <Asterisk className={`text-gray-1 ${classes}`} {...props} />
}
