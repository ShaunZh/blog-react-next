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
  try {
    const articleId = props.query.id;
    const res = await fetch(
      `https://www.easy-mock.com/mock/5a6ad0ef2d33bf493f88235d/blog_copy/articleDetail/${articleId}`
    );
    const data = await res.json();
    if (data.status !== 200) {
      throw new Error(data.message);
    }
    return {
      articleDetail: data.data
    };
  } catch (e) {
    console.error(e.message);
  }
};

export default Page;
