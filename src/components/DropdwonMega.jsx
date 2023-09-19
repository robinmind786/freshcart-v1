import PropTypes from "prop-types";
import { DropdwonMegaCol } from "./Index";

const DropdwonMega = ({ subMega }) => {
  return (
    <>
      <div className="dropdown-menu pb-0">
        <div className="row p-2 p-lg-4">
          {subMega && <DropdwonMegaCol subMega={subMega} />}
        </div>
      </div>
    </>
  );
};

DropdwonMega.propTypes = {
  subMega: PropTypes.array,
};

export default DropdwonMega;
