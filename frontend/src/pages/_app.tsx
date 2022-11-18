import '../core/styles/globals.css'
import type { AppProps } from 'next/app'
import { NextPage } from 'next'
import React from 'react'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: any) => React.ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout): JSX.Element {
  const getLayout = Component.getLayout ?? (page => page)

  return getLayout(<Component {...pageProps} />)
}
export default MyApp
