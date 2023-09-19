import PropTypes from "prop-types";
import { useProductsContext } from "../../contexts/products_context";

const LocationButton = ({
  className = "col-md-2 col-xxl-3 d-none d-lg-block",
  btnClass = "",
}) => {
  const { sidenavClose } = useProductsContext();

  return (
    <>
      <div className={className}>
        <button
          type="button"
          className={`btn  btn-outline-gray-400 text-muted ${btnClass}`}
          onClick={sidenavClose}
        >
          <i className="fa-regular fa-location-crosshairs me-2"></i>Location
        </button>
      </div>
    </>
  );
};

LocationButton.propTypes = {
  className: PropTypes.string,
  btnClass: PropTypes.string,
};

export default LocationButton;
