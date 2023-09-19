import PropTypes from "prop-types";

const FooterNavTitle = ({ title }) => {
  return (
    <>
      <h6 className="mb-4">{title}</h6>
    </>
  );
};

FooterNavTitle.propTypes = {
  title: PropTypes.string,
};

export default FooterNavTitle;
