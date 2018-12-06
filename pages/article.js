// 文章详情页面
import Link from "next/link";
import fetch from "isomorphic-unfetch";
const Page = ({ stars }) => {
  return (
    <div className="article">
      <h1>文章详情页面</h1>
    </div>
  );
};

Page.getInitialProps = async ({ req }) => {
  // 获取文章详情
  const res = await fetch("https://api.github.com/repos/zeit/next.js");
  const json = await res.json();
  return {
    stars: json.stargazers_count
  };
};

export default Page;
