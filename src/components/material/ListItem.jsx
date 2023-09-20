import PropTypes from "prop-types";

const ListItem = ({ children, className }) => {
  return (
    <>
      <li className={className}>{children}</li>
    </>
  );
};

ListItem.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

export default ListItem;
