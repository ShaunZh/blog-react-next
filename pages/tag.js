// 标签页面
import fetch from 'isomorphic-unfetch';
import Layout from "../components/Layout";

export default const Tag = props => (
  <Layout>
    <h1>{props.url.query.title}</h1>
    <p>This is the blog post content.</p>
  </Layout>
);

Tag.getInitialProps = async ({ req }) => {
  const res = await fetch('');
  const data = res.json();

  return {
    tag: data
  }
}
