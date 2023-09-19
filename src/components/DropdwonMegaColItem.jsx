import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useProductsContext } from "../contexts/products_context";

const DropdwonMegaColItem = ({ text, link }) => {
  const { sidenavClose } = useProductsContext();

  return (
    <>
      <Link to={link} className="dropdown-item" onClick={sidenavClose}>
        {text}
      </Link>
    </>
  );
};

DropdwonMegaColItem.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
};

export default DropdwonMegaColItem;
