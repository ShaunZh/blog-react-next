/*
 * @Author: Hexon
 * @Date: 2018-12-09 13:49:17
 * @LastEditTime: 2018-12-17 23:26:58
 * @Description: html head
 */
import Head from "next/head";

export default props => {
  <Head>
    <meta charSet="utf-8" />
    <title>{props.title}</title>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1"
      key="viewport"
    />
  </Head>;
};
