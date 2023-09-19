import PropTypes from "prop-types";

const Backdrop = ({ hideBackdrop }) => {
  return (
    <>
      <div
        className="offcanvas-backdrop fade show"
        onClick={hideBackdrop}
      ></div>
    </>
  );
};

Backdrop.propTypes = {
  hideBackdrop: PropTypes.func,
};

export default Backdrop;
