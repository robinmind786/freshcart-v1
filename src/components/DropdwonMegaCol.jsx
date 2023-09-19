import PropTypes from "prop-types";
import { DropdwonMegaColItem, NavBanner } from "./Index";

const DropdwonMegaCol = ({ subMega }) => {
  return (
    <div className="row p-2 p-lg-4">
      {subMega &&
        subMega.map((subLink) => {
          return (
            <div className="col-lg-3 col-12 mb-4 mb-lg-0" key={subLink.id}>
              <h6 className="text-primary ps-3">{subLink.text}</h6>
              {subLink?.subLinks?.map((link) => {
                return <DropdwonMegaColItem key={link.id} {...link} />;
              })}
            </div>
          );
        })}
      <NavBanner />
    </div>
  );
};

DropdwonMegaCol.propTypes = {
  subMega: PropTypes.array,
};

export default DropdwonMegaCol;
