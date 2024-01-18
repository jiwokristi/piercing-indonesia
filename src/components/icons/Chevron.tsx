import { ChevronsLeft, ChevronsRight } from 'lucide-react'

interface ChevronIconProps extends React.ComponentProps<typeof ChevronsLeft> {
  classes?: string
}

export const ChevronsLeftIcon = ({
  classes = '',
  ...props
}: ChevronIconProps) => {
  return <ChevronsLeft className={`text-gray-1 ${classes}`} {...props} />
}

export const ChevronsRightIcon = ({
  classes = '',
  ...props
}: ChevronIconProps) => {
  return <ChevronsRight className={`text-gray-1 ${classes}`} {...props} />
}
