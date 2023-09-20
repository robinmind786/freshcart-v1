import PropTypes from "prop-types";
import logo from "../assets/images/logo/freshcart-logo.svg";
import { HyperLink, Img } from "./material/Index";

const Logo = ({ children, className = "navbar-brand d-none d-lg-block" }) => {
  return (
    <>
      <HyperLink className={className} location="/">
        <Img src={logo} alt="logo" />
        {children}
      </HyperLink>
    </>
  );
};

Logo.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

export default Logo;
