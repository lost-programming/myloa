import type { AppProps } from 'next/app';
import React, { useRef } from "react";
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import '../styles/app.scss';
import Layout from "../components/layout";
import withHead from "../hoc/withHead";

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
        </RecoilRoot>
      </QueryClientProvider>
    </>
  )
}

export default MyLoa;
