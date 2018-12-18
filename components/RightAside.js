/*
 * @Author: Hexon
 * @Date: 2018-12-08 16:27:09
 * @LastEditTime: 2018-12-13 00:33:33
 * @Description: 右侧边栏
 */
import Search from "./Search";
import RecommendArticlesList from "./RecommendArticlesList";
import TagsList from "./TagsList";

const RightAside = ({ recommendArticlesList = [], tagsList = [] }) => (
  <div className="right-wrap">
    <Search />
    <RecommendArticlesList recommendArticlesList={recommendArticlesList} />
    <TagsList tagsList={tagsList} />
    <style jsx>
      {`
        .right-wrap {
          width: 266px;
        }
      `}
    </style>
  </div>
);

export default RightAside;
