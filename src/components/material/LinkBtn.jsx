import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const LinkBtn = ({ children, className, onHandleClick }) => {
  return (
    <>
      <Link className={className} onClick={onHandleClick}>
        {children}
      </Link>
    </>
  );
};

LinkBtn.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  onHandleClick: PropTypes.func,
};

export default LinkBtn;
