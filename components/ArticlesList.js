/*
 * @Author: Hexon
 * @Date: 2018-12-08 16:32:31
 * @LastEditTime: 2018-12-08 16:51:53
 * @Description: 文章列表
 */
import ArticleItem from "ArticleItem";

const ArticlesList = pros => (
  <ul>
    {props.articlesList.map(item => (
      <li key={item.articleId}>
        <ArticleItem {...item} />
      </li>
    ))}
  </ul>
);

export default ArticlesList;