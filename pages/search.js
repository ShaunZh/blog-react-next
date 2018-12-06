// 搜索页面
import fetch from 'isomorphic-unfetch';
export default const Search = () => (
  <div className="search">
    <h1>搜索页面</h1>
  </div>
)

Search.getInitialProps = async ({ req }) => {
  // 获取搜索的文章列表
  const res = await fetch('');
  const data = await res.json();

  return {
    searchResult: data
  }

}