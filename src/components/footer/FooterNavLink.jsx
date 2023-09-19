import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const FooterNavLink = ({ sub }) => {
  return (
    <>
      <ul className="nav flex-column">
        {sub?.map((link) => {
          return (
            <li className="nav-item mb-2" key={link.id}>
              <Link to={link.link} className="nav-link">
                {link.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

FooterNavLink.propTypes = {
  sub: PropTypes.array,
};

export default FooterNavLink;
