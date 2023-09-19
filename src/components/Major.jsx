import PropTypes from "prop-types";

const Major = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

Major.propTypes = {
  children: PropTypes.any,
};

export default Major;
