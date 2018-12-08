import Link from "next/link";

const wrapStyle = {
  height: 65px;
  margin: 0 192px;
  display: flex;
  alignItems: center;
  opacity: 0.8;
};

const Header = () => (
  <div style={wrapStyle}>
    <p>Hexon </p>
    <p>放风筝的小小马</p>
  </div>
);

export default Header;
