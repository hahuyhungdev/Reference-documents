import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Loads web fonts */}
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          {/* <link
            href="https://fonts.googleapis.com/css2?family=Roboto&display=swap "
            rel="stylesheet"
          ></link> */}
        </Head>
        <body>
          <Main />
          <NextScript />
          <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
          <script async type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
