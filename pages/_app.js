import React from "react";
import App, { Container } from "next/app";

import fetch from "isomorphic-unfetch";
import FullLayout from "../components/FullLayout";

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const res = await fetch(
      "https://www.easy-mock.com/mock/5a6ad0ef2d33bf493f88235d/blog_copy/initData"
    );
    const data = await res.json();
    if (data.status !== 200) {
      throw new Error(data.message);
    }
    console.log('=========app==============')
    return {
      pageProps,
      initData: data.data
    };
  }
  render() {
    const { Component, pageProps, initData } = this.props;
    // console.log('---------------Component----------------');
    // console.log(JSON.stringify(this.props));
    return (
      <Container>
        <FullLayout {...initData}>
          <Component {...pageProps} />
        </FullLayout>
      </Container>
    );
  }
}
