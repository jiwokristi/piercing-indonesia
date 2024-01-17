import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'

import { darkLayout } from '../constants/layout'

export const useUrl = () => {
  const { pathname } = useLocation()

  const mainTab = useMemo(() => {
    return pathname.split('/')[1]
  }, [pathname])

  const isDarkLayout = useMemo(() => {
    return darkLayout.includes(mainTab)
  }, [mainTab])

  return {
    pathname,
    mainTab,
    isDarkLayout,
  }
}
