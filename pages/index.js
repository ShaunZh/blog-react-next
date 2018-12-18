/*
 * @Author: Hexon
 * @Date: 2018-12-04 21:51:42
 * @LastEditTime: 2018-12-18 00:37:40
 * @Description: 首页
 */
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import FullLayout from "../components/FullLayout";

import ArticlesList from "../components/ArticlesList";
import "../global.scss"

const PostLink = props => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

const Index = props => (
  <ArticlesList articlesList={props.articlesList} />
);

Index.getInitialProps = async function() {
  try {
    const res = await fetch(
      "https://www.easy-mock.com/mock/5a6ad0ef2d33bf493f88235d/blog_copy/initData"
    );
    const data = await res.json();
    if (data.status !== 200) {
      throw new Error(data.message);
    }
    // console.log('articlesList', data.data.latestArticlesList)
    return {
      articlesList: data.data.latestArticlesList
    };
  } catch (e) {
    console.error(e.message);
  }
};

export default Index;
