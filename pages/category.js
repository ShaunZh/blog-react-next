// 分类页面
import fetch from "isomorphic-unfetch";
import Head from "next/head";

export default const Category = () => (
  <div className="category">
    <h1>分类列表页面</h1>
  </div>
);

Category.getInitialProps = async function({ req }) {
  // 获取分类列表数据
  const res = await fetch(''); 
  const data = await res.json();
  return {
    categoryList: data
  }
}
