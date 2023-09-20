import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const HyperLink = ({ children, location, className }) => {
  return (
    <>
      <Link to={location} className={className}>
        {children}
      </Link>
    </>
  );
};

HyperLink.propTypes = {
  children: PropTypes.any,
  location: PropTypes.string,
  className: PropTypes.string,
};

export default HyperLink;
