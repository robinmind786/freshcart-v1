import PropTypes from "prop-types";
import { Cell, HyperLink, Img, Span } from "../material/Index";

const Pill = ({ location, count, src, alt }) => {
  return (
    <>
      <Cell className="list-inline-item ml-8">
        <HyperLink className="text-muted position-relative" location={location}>
          <Img src={src} alt={alt} />
          <Span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
            {count && count}
          </Span>
        </HyperLink>
      </Cell>
    </>
  );
};

Pill.propTypes = {
  location: PropTypes.string,
  count: PropTypes.number,
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default Pill;
