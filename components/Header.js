import Link from "next/link";


const Header = () => (
  <div className="header-wrap">
    <p>Hexon </p>
    <p>放风筝的小小马</p>
    <style jsx>{`
      div.header-wrap {
        height: 65px;
        padding: 0 200px;
        display: flex;
        align-items: center;
      }
    `}</style>
  </div>
);

export default Header;
