import Document, { DocumentContext, Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    const isDev = process && process.env.NODE_ENV === "development";
    return (
      <Html lang="en">
        <Head>
          {(this.props as any).styleTags}
        </Head>
        <body data-layout="topnav" className={isDev ? "debug-screens" : ""}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
