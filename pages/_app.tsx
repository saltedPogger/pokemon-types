import { Roboto } from '@next/font/google'

import type { AppProps } from 'next/app'
import '../styles/globals.css'

const robotoFont = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-roboto',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${robotoFont.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  )
}
