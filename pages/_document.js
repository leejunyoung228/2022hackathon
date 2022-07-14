import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
      <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=c09a156dd79d982a0e2dd0bbfb6447e7"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}