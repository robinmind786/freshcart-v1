import PropTypes from "prop-types";

const Cell = ({ children, className }) => {
  return (
    <>
      <div className={className}>{children}</div>
    </>
  );
};

Cell.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

export default Cell;
