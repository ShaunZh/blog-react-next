/*
 * @Author: Hexon
 * @Date: 2018-12-08 16:32:43
 * @LastEditTime: 2018-12-09 01:04:10
 * @Description: 文章列表项
 */

 const wrapStyle = {
   width: 581x;
   display: flex;
   padding: 7px;
   > img {
     width: 175px;
     height: 120px;
   }
   > div {
     flexGrow: 2;
   }
 }

 const rightStyle = {
   display: flex;
   flexDirection: column;
   > div {
     flexGrow: 2;
     alignSlef: flexEnd;
   }
 }

 const bottomStyle = {
   display: flex;
   justifyContent: spaceBetween;
 }

 const ArticleItem = (props) => (
   <div style={wrapStyle}>
     <img src={props.articleImg} alt="articleImg"/>
     <div style={rightStyle}>
       <h5>{props.title}</h5>
       <h6>{props.subTitle}</h6>
        <div style={bottomStyle}>
          <span>{props.createTime}</span>
          <span>{props.viewCount}</span>
          <span>{props.commentCount}</span>
          <span>{props.likeCount}</span>
          <span>{props.category}</span>
        </div>
     </div>
   </div>
 )

 export default ArticleItem;