import 'tailwindcss/tailwind.css'
import '@/styles/globals.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import HeaderDemo from '../components/Header/HeaderDemo'
import { NewFooter } from '../components/Footer/NewFooter'

import GlobalStyles from '@/pages/GlobalStyles'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <>
      <GlobalStyles />
      <HeaderDemo />
      <Component {...pageProps} />
      <NewFooter />
    </>
  )
}
