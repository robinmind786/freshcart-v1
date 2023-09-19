import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/freshcart-logo.svg";
import { useProductsContext } from "../contexts/products_context";

const Logo = ({ children, className = "" }) => {
  const { sidenavClose } = useProductsContext();

  return (
    <>
      <Link to="/" className={className} onClick={sidenavClose}>
        <img src={logo} alt="eCommerce HTML Template" />
        {children}
      </Link>
    </>
  );
};

Logo.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
};

export default Logo;
