/*
 * @Author: Hexon
 * @Date: 2018-12-09 12:00:31
 * @LastEditTime: 2018-12-18 00:04:27
 * @Description: 联系方式
 */
import Link from "next/link";

const ContactsList = ({ contactsList = [] }) => (
  <nav className="nav-list">
    {contactsList.map((item, index) => (
      <Link href="" key={item.contactIcon + index}>
        <a className="nav-item">
          <img className="icon" src={item.contactIcon} alt="icon" />
        </a>
      </Link>
    ))}
    <style jsx>
      {`
        .nav-list{
          width: 42px;
          height: 35px;
          text-align: center;
          display: flex;
          flex-direction: column;
        }
        .nav-list > .nav-item >.icon {
          width: 18px;
          height: 18px;
        }
      `}
    </style>
  </nav>
);

export default ContactsList;
