import type { AppProps } from 'next/app'
import '../styles/app.scss';
import { RecoilRoot } from 'recoil'
import Layout from "../components/layout";
import { useRef } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function MyLoa({ Component, pageProps }: AppProps) {
  const queryClientRef = useRef<QueryClient>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
        }
      }
    })
  }

  return (
    <>
      <QueryClientProvider client={queryClientRef.current}>
        <RecoilRoot>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RecoilRoot>`
      </QueryClientProvider>
    </>
  )
}

export default MyLoa
