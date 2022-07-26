import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { RecoilRoot } from 'recoil'

function MyLoa({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  )
}

export default MyLoa
