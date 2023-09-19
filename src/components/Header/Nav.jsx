import { navLinks } from "../../utils/constans";
import { NavItem } from "./Index";

const Nav = () => {
  return (
    <>
      <ul className="navbar-nav align-items-center">
        {navLinks.map((link) => {
          return <NavItem key={link?.id} {...link} />;
        })}
      </ul>
    </>
  );
};

export default Nav;
