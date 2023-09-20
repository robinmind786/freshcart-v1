import PropTypes from "prop-types";

const Input = ({ className, type, placeholder }) => {
  return (
    <>
      <input
        className={className}
        type={type}
        placeholder={placeholder}
      ></input>
    </>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
