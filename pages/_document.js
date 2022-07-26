import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='eg'>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,200&family=The+Nautigal&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}