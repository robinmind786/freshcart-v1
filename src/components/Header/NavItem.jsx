import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Dropdown, DropdwonMega } from "./Index";
import { useProductsContext } from "../../contexts/products_context";

const NavItem = ({ text, link, subLinks, subMega }) => {
  const { sidenavClose } = useProductsContext();

  return (
    <>
      <li
        className={`nav-item dropdown w-100 w-lg-auto ${
          subMega ? "dropdown-fullwidth" : ""
        }`}
      >
        <Link to={link} className="nav-link" onClick={sidenavClose}>
          {text}
          {(subLinks || subMega) && (
            <i
              className="fa-thin fa-angle-down m"
              style={{
                marginLeft: "5px",
              }}
            ></i>
          )}
        </Link>
        {subLinks && <Dropdown dropLinks={subLinks} />}
        {subMega && <DropdwonMega subMega={subMega} />}
      </li>
    </>
  );
};

NavItem.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
  subLinks: PropTypes.array,
  subMega: PropTypes.array,
};

export default NavItem;
