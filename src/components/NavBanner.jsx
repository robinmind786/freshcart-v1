import { Link } from "react-router-dom";
import bannger from "../assets/images/banner/menu-banner.jpg";

const NavBanner = () => {
  return (
    <>
      <div className="col-lg-3 col-12 mb-4 mb-lg-0">
        <div className="card border-0">
          <img
            src={bannger}
            alt="eCommerce HTML Template"
            className="img-fluid"
          />
          <div className="position-absolute ps-6 mt-8">
            <h5 className=" mb-0 ">
              Dont miss this <br />
              offer today.
            </h5>
            <Link to="/shop" className="btn btn-primary btn-sm mt-3">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBanner;
