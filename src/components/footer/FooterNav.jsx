import PropTypes from "prop-types";

import FooterNavTitle from "./FooterNavTitle";
import Cell from "../Cell";
import FooterNavLink from "./footerNavLink";

const FooterNav = ({ title, sub }) => {
  return (
    <>
      <Cell className="col-6 col-sm-6 col-md-3">
        <FooterNavTitle title={title} />
        <FooterNavLink sub={sub} />
      </Cell>
    </>
  );
};

FooterNav.propTypes = {
  title: PropTypes.string,
  sub: PropTypes.array,
};

export default FooterNav;
