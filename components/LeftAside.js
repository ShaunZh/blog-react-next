/*
 * @Author: Hexon
 * @Date: 2018-12-08 16:27:41
 * @LastEditTime: 2018-12-13 00:01:22
 * @Description: 左侧边栏
 */
import ContactsList from "./ContactsList";
import CategorysList from "./CategorysList";

const LeftAside = ({contactsList = [], categorysList = []})=> (
  <div className="left-wrap">
    <ContactsList contactsList={contactsList} />
    <CategorysList categorysList={categorysList} />
    <style jsx>{`
      .left-wrap {
        display: flex;
        justify-content: space-between;
        width: 360px;
      }
    `}</style>
  </div>
);

export default LeftAside;
