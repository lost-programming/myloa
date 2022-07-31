import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { RecoilRoot } from 'recoil'
import Layout from "../components/layout";

function MyLoa({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </>
  )
}

export default MyLoa
