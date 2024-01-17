import clsx from 'clsx'

import { useUrl } from '../../utils/hooks/useUrl'

export const Language = () => {
  const { isDarkLayout } = useUrl()

  return (
    <div
      className={clsx(
        'text-16 flex items-center justify-end gap-16 px-32 py-16',
        {
          'bg-gray-1/30': isDarkLayout,
          'bg-almost-white-2/30': !isDarkLayout,
        },
      )}
    >
      <button className="font-general-sans-medium">EN</button>
      <span>/</span>
      <button>ID</button>
    </div>
  )
}
