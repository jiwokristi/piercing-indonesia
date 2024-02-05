import { createBrowserRouter } from 'react-router-dom'

import { RootLayout } from './pages'
import { Home } from './pages/home'
import { AboutUs } from './pages/about-us'
import { SignIn } from './pages/sign-in'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'about-us',
        element: <AboutUs />,
      },
      {
        path: 'sign-in',
        element: <SignIn />,
      },
    ],
  },
])
