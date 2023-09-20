import PropTypes from "prop-types";

const Cell = ({ children, className, desgin }) => {
  return (
    <>
      <div className={className} style={desgin}>
        {children}
      </div>
    </>
  );
};

Cell.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  desgin: PropTypes.any,
};

export default Cell;
