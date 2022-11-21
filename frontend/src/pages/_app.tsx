import React from 'react'
import type { AppProps } from 'next/app'
import { NextPage } from 'next'
import { trpc } from '@/utils/trpc'
import '../core/styles/globals.css'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: any) => React.ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function App({ Component, pageProps }: AppPropsWithLayout): JSX.Element {
  const getLayout = Component.getLayout ?? (page => page)

  return getLayout(<Component {...pageProps} />)
}
export default trpc.withTRPC(App)
