/*
 * @Author: Hexon
 * @Date: 2018-12-08 16:57:13
 * @LastEditTime: 2018-12-09 00:40:41
 * @Description: 标签列表
 */

 const wrapStyle = {
   display: flex;
   flexWrap: wrap;
   marginLeft: 10px;
 }

 const TagsList = (props) => (
   <ul style={wrapStyle}>
     {props.tagsList.map(item => (
       <li>
         <img src={item.tagIcon} alt="tagIcon"/>
         <span>{item.tagName}</span>
         <span>({item.articlesCount})</span>
       </li>
     ))}
   </ul>
 )

 

 export default TagsList;