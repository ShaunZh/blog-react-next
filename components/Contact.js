/*
 * @Author: Hexon
 * @Date: 2018-12-09 12:00:31
 * @LastEditTime: 2018-12-09 12:08:38
 * @Description: 联系方式
 */

 const wrapStyle = {
   width: 42px;
   height: 35px;
   textAlign: center;
   > li {
     lineHeight: 35px;
   }
   .icon {
     width: 18px;
     height: 18px;
   }
 }


const Contact = (props) => (
  <ul style={wrapStyle}>
    {props.contact.map(item => (
      <li>
        <img className="icon" src={item.icon} alt="icon"/>
      </li>
    ))}
  </ul>
)

export default Contact;