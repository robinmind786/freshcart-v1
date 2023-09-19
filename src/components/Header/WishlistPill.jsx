import PropTypes from "prop-types";

const WishlistPill = ({ count, msg }) => {
  return (
    <>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
        {count}
        <span className="visually-hidden">{msg}</span>
      </span>
    </>
  );
};

WishlistPill.propTypes = {
  count: PropTypes.number,
  msg: PropTypes.string,
};

export default WishlistPill;
