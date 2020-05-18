import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
       <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <link rel="icon" type="image/png" href={require("../images/favicon.png")}></link>
            <script type="text/javascript" src="adblock.js"></script>
            <script type="text/javascript" src="evercookie.js"></script>
            <script type="text/javascript" src="swfobject-2.2.min.js"></script>
            <script type="text/javascript" src="jquery-1.4.2.min.js"></script>
            <script data-ad-client="ca-pub-9587885399192232" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        </Head>
        
        <body style={{visibility: 'hidden !important'}}>
        <div id={"babasbmsgx"} style={{visibility: "visible"}}>Please disable your adblock and script blockers to view this page</div>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    )
  }
}

export default MyDocument