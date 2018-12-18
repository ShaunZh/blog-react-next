/*
 * @Author: Hexon
 * @Date: 2018-12-08 16:35:23
 * @LastEditTime: 2018-12-13 00:58:14
 * @Description: 推荐文章列表
 */
import Link from "next/link";

const RecommendActiclesList = ({ recommendArticlesList = [] }) => (
  <div className="recommend-list-wrap">
    <h6 className="title fs-middle">群贤毕至</h6>
    <ul className="recommend-list">
      {recommendArticlesList.map((item, index) => (
        <Link href={`/article/${item.articleId}`}>
          <a className="recommend-item">
            <span className={`index-${index + 1} index`}>{index + 1}</span>
            <span>{item.title}</span>
          </a>
        </Link>
      ))}
    </ul>
    <style jsx>{`
      .recommend-list-wrap {
        margin: 10px 0;
        background: #f8f8f8;
      }
      .recommend-list-wrap > .title {
        padding: 12px;
        font-weight: normal;
      }

      .recommend-list {
        padding: 12px 0;
        border-top: 1px solid #eee;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
       .recommend-item {
        display: flex;
        vertical-align: middle;
        height: 26px;
        padding: 0 12px;
        margin-bottom: 12px;
      }
      .recommend-item .index {
        background: #ddd;
        width: 20px;
        height: 20px;
        margin-right: 10px;
        text-align: center;
      }
      .recommend-item .index-1 {
        background: red;
        color: #fff;
      }
      .recommend-item .index-2 {
        background: green;
        color: #fff;
      }
      .recommend-item .index-3 {
        background: pink;
        color: #fff;
      }
    `}</style>
  </div>
);

export default RecommendActiclesList;
