import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
// import Script from "next/script";

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="icon"
            type="image/x-icon"
            href="/static/img/brand/adit_logo.svg"
          />
          {/* Boostrap CSS */}
          <link
            rel="stylesheet"
            href="/static/dst/plugin/bootstrap/css/bootstrap.min.css"
          />
          {/* STYLE CSS */}
          <link rel="stylesheet" href="/static/dst/css/style.css" />
          {/* FONT ICON CSS  */}
          <link rel="stylesheet" href="/static/dst/css/icons.css" />
          {/* COLOR SKIN CSS */}
        </Head>
        <body>
          <Main />
          {/* add script here */}
          <NextScript />

          {/* Add modal tag */}
          {/* load plugin script  */}
          <script src="/static/dst/js/jquery.min.js"></script>
          {/* BOOTSRAP JS  */}
          <script src="/static/dst/plugin/bootstrap/js/popper.min.js"></script>
          <script src="/static/dst/plugin/bootstrap/js/bootstrap.min.js"></script>
          {/* <script src="/static/dst/js/sticky.js"></script> */}
        </body>
      </Html>
    );
  }
}
