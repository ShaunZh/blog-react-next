// 首页 
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";

const PostLink = props => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

const Index = props => (
  <Layout>
    <h1>My blog</h1>
    <ul>
      {props.shows.map(({ show }) => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();
  return {
    shows: data
  };
};

export default Index;
// export default () => (
//   <Layout>
//     <h1>My blog</h1>
//     <ul>
//       <PostLink title="Hello blog" id="hello-nextjs" />
//       <PostLink title="first blog" id="first-blogjs" />
//       <PostLink title="second blog" id="second-blogjs" />
//     </ul>
//   </Layout>
// );
