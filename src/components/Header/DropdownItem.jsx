import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useProductsContext } from "../../contexts/products_context";

const DropdownItem = ({ text, link, recently }) => {
  const { sidenavClose } = useProductsContext();

  return (
    <>
      <li>
        <Link to={link} className="dropdown-item" onClick={sidenavClose}>
          {text}
          {recently && (
            <span className="badge bg-light-info text-dark-info ms-1">New</span>
          )}
        </Link>
      </li>
    </>
  );
};

DropdownItem.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
  recently: PropTypes.bool,
};

export default DropdownItem;
