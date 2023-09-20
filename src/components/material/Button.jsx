import PropTypes from "prop-types";

const Button = ({ children, className, desgin, onHandleClick, type }) => {
  return (
    <>
      <button
        className={className}
        style={desgin}
        onClick={onHandleClick}
        type={type}
      >
        {children}
      </button>
    </>
  );
};

Button.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  desgin: PropTypes.string,
  type: PropTypes.string,
  onHandleClick: PropTypes.func,
};

export default Button;
