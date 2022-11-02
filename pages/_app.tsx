import type { AppProps } from 'next/app'
import '../styles/app.scss';
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
