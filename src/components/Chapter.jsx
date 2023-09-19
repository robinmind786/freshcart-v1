import PropTypes from "prop-types";

const Chapter = ({ children, className }) => {
  return (
    <>
      <section className={className}>{children}</section>
    </>
  );
};

Chapter.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
};

export default Chapter;
