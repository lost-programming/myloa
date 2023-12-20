import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const withHead = (Component: any, title?: string, description?: string) => {
  const customComponent = (props: any) => {
    const router = useRouter();
    const [name, setName]: any = useState();

    useEffect(() => {
      if (router.query) {
        setName(router.query.name ? router.query.name : "");
      }
    }, [router.isReady]);

    return (
      <>
        <Head>
          <title>{ name ? `${ name } - 캐릭터 정보` : "My Loa | 캐릭터 전투정보 검색" }</title>
          <meta name="description" content={ description ? description : "원하는 캐릭터의 전투정보를 검색해보세요."}/>
          {/* OG 태그 */}
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="ko_KR" />
          <meta property="og:title" content="My Loa | 캐릭터 전투정보 검색 사이트" />
          <meta property="og:description" content="원하는 캐릭터의 전투정보를 검색해보세요." />
          {/*<meta property="og:url" content="" />*/}
          {/*<meta property="og:url" content="https://user-images.githubusercontent.com/97172321/219431038-2bb12055-5cb9-4712-849b-aa3a1ed366d0.png" />*/}

          {/* Favicon */}
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
        </Head>

        <Component {...props} />
      </>
    );
  };

  return customComponent;
};

export default withHead;
