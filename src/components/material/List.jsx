import PropTypes from "prop-types";

const List = ({ children, className, desgin }) => {
  return (
    <>
      <ul className={className} style={desgin}>
        {children}
      </ul>
    </>
  );
};

List.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  desgin: PropTypes.any,
};

export default List;
