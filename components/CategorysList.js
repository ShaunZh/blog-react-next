/*
 * @Author: Hexon
 * @Date: 2018-12-08 17:00:21
 * @LastEditTime: 2018-12-18 00:49:19
 * @Description: 分类列表
 */
import Link from "next/link";

const CategorysList = ({ categorysList = [] }) => (
  <nav className="nav-list">
    {categorysList.map(item => (
      <Link
        as={`/category/${item.categoryName}`}
        key={item.categoryId}
        href={`/category?id=${item.categoryId}`}
      >
        <a className="nav-item text-inline">
          <img
            className="category-icon"
            src={item.categoryIcon}
            alt="iconUrl"
          />
          <span className="category-name">{item.categoryName}</span>
        </a>
      </Link>
    ))}
    <style jsx>{`
      .nav-list {
        width: 160px;
      }
      .nav-item {
        display: flex;
        margin-bottom: 10px;
        padding: 7px;
        align-items: center;
        background: #ddd;
      }
      .nav-item > .category-icon {
        width: 24px;
        height: 24px;
        margin-right: 14px;
      }
      .nav-item > .category-name {
      }
    `}</style>
  </nav>
);

export default CategorysList;
