import { BarButton } from "./Index";
import Logo from "./Logo";
import WishlistCart from "./WishlistCart";
import WishlistUser from "./WishlistUser";

const WishlistRes = () => {
  return (
    <>
      <div className="d-flex justify-content-between w-100 d-lg-none">
        <Logo />
        <div className="d-flex align-items-center lh-1">
          <div className="list-inline me-4">
            <div className="list-inline-item">
              <WishlistUser />
            </div>
            <div className="list-inline-item">
              <WishlistCart />
            </div>
          </div>
          <BarButton />
        </div>
      </div>
    </>
  );
};

export default WishlistRes;
