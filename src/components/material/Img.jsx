import PropTypes from "prop-types";

const Img = ({ src, alt }) => {
  return (
    <>
      <img src={src} alt={alt} />
    </>
  );
};

Img.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default Img;
