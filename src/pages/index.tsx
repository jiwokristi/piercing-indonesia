import { Outlet } from 'react-router-dom'

import { Language, Navbar, Footer } from '../components/layout'

export const RootLayout = () => {
  return (
    <>
      <main id="RootLayout">
        <Language />
        <Navbar />
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
