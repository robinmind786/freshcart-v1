import PropTypes from "prop-types";

const Row = ({ children, className = "" }) => {
  return (
    <>
      <div className={`row ${className}`}>{children}</div>
    </>
  );
};

Row.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

export default Row;
