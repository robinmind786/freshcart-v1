import PropTypes from "prop-types";

const Icon = ({ className }) => {
  return (
    <>
      <i className={className}></i>
    </>
  );
};

Icon.propTypes = {
  className: PropTypes.string,
};

export default Icon;
