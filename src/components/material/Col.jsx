import PropTypes from "prop-types";

const Col = ({ children, className, style }) => {
  return (
    <>
      <div className={className} style={style}>
        {children}
      </div>
    </>
  );
};

Col.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.any,
};

export default Col;
