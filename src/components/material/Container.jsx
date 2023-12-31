import PropTypes from "prop-types";

const Container = ({ children }) => {
  return (
    <>
      <div className="container">{children}</div>
    </>
  );
};

Container.propTypes = {
  children: PropTypes.element,
};

export default Container;
