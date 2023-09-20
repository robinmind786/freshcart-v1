import PropTypes from "prop-types";

const Span = ({ children, className }) => {
  return (
    <>
      <span className={className}>{children}</span>
    </>
  );
};

Span.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

export default Span;
