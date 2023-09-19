import { DropdownItem } from "./Index";
import PropTypes from "prop-types";

const Dropdown = ({ dropLinks }) => {
  return (
    <>
      <ul className="dropdown-menu">
        {dropLinks &&
          dropLinks?.map((link) => {
            return <DropdownItem key={link.id} {...link} />;
          })}
      </ul>
    </>
  );
};

Dropdown.propTypes = {
  dropLinks: PropTypes.array,
};

export default Dropdown;
