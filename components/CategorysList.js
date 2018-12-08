/*
 * @Author: Hexon
 * @Date: 2018-12-08 17:00:21
 * @LastEditTime: 2018-12-09 00:42:03
 * @Description: 分类列表
 */

const wrapStyle = {
  width: 160px;
}
const navItemStyle = {
  display: flex;
  width: 100%;
  > img {
    width: 24px;
    height: 24px;
    marginRight: 14px;
  }
}

const CategorysList = (props) => {
  <ul style={wrapStyle}>
    {props.categorysList.map(item => (
      <li style={navItemStyle}>
        <img src={item.iconUrl} alt=""/>
        <p>{item.name}</p>
      </li>
    )
    )}
  </ul>
}

export default CategorysList;
