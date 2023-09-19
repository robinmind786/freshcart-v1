import PropTypes from "prop-types";
import search from "../assets/search.svg";

const Search = ({
  children,
  className = "col-xxl-5 col-lg-5 d-none d-lg-block",
}) => {
  return (
    <>
      <div className={className}>
        <form action="#">
          <div className="input-group ">
            <input
              className="form-control rounded"
              type="search"
              placeholder="Search for products"
            />
            <span className="input-group-append">
              <button
                className="btn bg-white border border-start-0 ms-n10 rounded-0 rounded-end"
                type="button"
              >
                <img src={search} alt="search" />
              </button>
            </span>
          </div>
        </form>
        {children}
      </div>
    </>
  );
};

Search.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
};

export default Search;
