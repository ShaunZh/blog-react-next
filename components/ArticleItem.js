/*
 * @Author: Hexon
 * @Date: 2018-12-08 16:32:43
 * @LastEditTime: 2018-12-19 00:13:42
 * @Description: 文章列表项
 */
import Link from "next/link";

const ArticleItem = props => (
  <div className="wrap">
    <img className="left" src={props.articleBkImg} alt="articleImg" />
    <div className="right flex flex-direction-column">
      <Link
        as={`/article/${props.id}`}
        key={props.id}
        href={`/article?id=${props.id}`}
      >
        <a>
          <h4>{props.title}</h4>
        </a>
      </Link>
      <h5>{props.subTitle}</h5>
      <div className="bottom fs-12 flex align-item-end justify-content-between">
        <div className="item">
          <img src="/static/icons/date.svg" alt="" />
          <span>{props.createTime}</span>
        </div>
        <div className="item">
          <img src="/static/icons/view.svg" alt="" />
          <span>{props.viewCount}</span>
        </div>
        <div className="item">
          <img src="/static/icons/message.svg" alt="" />
          <span>{props.commentCount}</span>
        </div>
        <div className="item">
          <img src="/static/icons/like.svg" alt="" />
          <span>{props.likeCount}</span>
        </div>
        <div className="item">
          <img src="/static/icons/category.svg" alt="" />
          <span>{props.category}</span>
        </div>
      </div>
    </div>
    <style jsx>
      {`
        .wrap {
          margin-bottom: 7px;
          padding: 7px;
          display: flex;
          background-color: pink;
        }
        .left {
          width: 175px;
          height: 120px;
        }
        .right {
          margin-left: 10px;
          flex-grow: 2;
          display: flex;
          flex-direction: column;
        }
        .right > .bottom {
          flex-grow: 2;
        }

        .right > .bottom > .item {
          margin-left: 7px;
        }
        .right > .bottom img {
          margin-right: 4px;
          vertical-align: middle;
        }
      `}
    </style>
  </div>
);

export default ArticleItem;
