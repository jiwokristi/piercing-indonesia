import { Outlet } from 'react-router-dom'

import { Navbar } from '../components/layout/Navbar'
import { Language } from '../components/layout/Language'

export const RootLayout = () => {
  return (
    <main id="RootLayout" className="antialiased">
      <Language />
      <Navbar />
      <Outlet />
    </main>
  )
}
