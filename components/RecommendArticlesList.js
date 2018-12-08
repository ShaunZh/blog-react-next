/*
 * @Author: Hexon
 * @Date: 2018-12-08 16:35:23
 * @LastEditTime: 2018-12-08 18:10:58
 * @Description: 推荐文章列表
 */

 const itemStyle = {
   display: flex;
  fontSize: 12px;
   .index {
     background: #ddd;
   }
   .index-1 {
     background: red;
   }
   .index-2 {
     background: green;
   }
   .index-3 {
     background: pink
   }
 }

 const RecommendActiclesList = (props) => (
   <ul>
     {props.RecommendActiclesList.map((item, index)=> (
       <li style={itemStyle}>
         <p className={`index-${index} index`}>
          {index}
         </p>
         <p className="title">{item.title}</p>
       </li>
     )
     )}
   </ul>
 )