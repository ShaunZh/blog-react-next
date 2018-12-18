/*
 * @Author: Hexon
 * @Date: 2018-12-08 16:32:31
 * @LastEditTime: 2018-12-19 00:14:29
 * @Description: 文章列表
 */
import ArticleItem from "./ArticleItem";

const ArticlesList = ({articlesList})=> (
  <ul>
    {articlesList.map(item => (
      <li key={item.articleId}>
        <ArticleItem {...item} />
      </li>
    ))}
    <style jsx>{`
      ul, li {
        list-style: none;
      }
      `}</style>
  </ul>
);

export default ArticlesList;