/*
 * @Author: Hexon
 * @Date: 2018-12-08 16:57:13
 * @LastEditTime: 2018-12-19 00:07:21
 * @Description: 标签列表
 */

import Link from "next/link";

const TagsList = ({ tagsList = [] }) => (
  <nav className="nav-list">
    {tagsList.map(item => (
      <Link
        as={`/tag/${item.tagName}`}
        key={item.tagId}
        href={`/tag?id=${item.tagId}`}
      >
        <a className="nav-item text-inline">
          <img className="tag-icon" src={item.tagIcon} alt="tagIcon" className="tag-icon" />
          <span>{item.tagName}</span>
          <span>({item.articlesCount})</span>
        </a>
      </Link>
    ))}
    <style jsx>
      {`
        .nav-list {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          padding: 12px;
          background: #f8f8f8;
        }
        .nav-item {
          background: #dfdfdf;
          margin-bottom: 12px;
          padding: 7px;
        }
        .nav-item > .tag-icon {
          width: 24px;
          height: 24px;
          margin-right: 6px;
          vertical-align: middle;
        }
      `}
    </style>
  </nav>
);

export default TagsList;
