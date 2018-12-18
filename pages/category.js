/*
 * @Author: Hexon
 * @Date: 2018-12-04 21:51:42
 * @LastEditTime: 2018-12-19 00:03:32
 * @Description: 首页
 */
import Link from "next/link";
import fetch from "isomorphic-unfetch";

import ArticlesList from "../components/ArticlesList";
import "../global.scss";

const Category = props => <ArticlesList articlesList={props.articlesList} />;

Category.getInitialProps = async function(props) {
  try {
    const categoryId = props.query.id;
    const res = await fetch(
      `https://www.easy-mock.com/mock/5a6ad0ef2d33bf493f88235d/blog_copy/categorysList/${categoryId}`
    );
    const data = await res.json();
    if (data.status !== 200) {
      throw new Error(data.message);
    }
    return {
      articlesList: data.data.articlesList
    };
  } catch (e) {
    console.error(e.message);
  }
};

export default Category;
