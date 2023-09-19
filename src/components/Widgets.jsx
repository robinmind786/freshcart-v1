import { WishlistCart, WishlistHeart, WishlistUser } from "./Index";

const Widgets = () => {
  return (
    <>
      <div className="col-md-2 col-xxl-2 text-end d-none d-lg-block">
        <div className="list-inline">
          <div className="list-inline-item me-5">
            <WishlistHeart />
          </div>
          <div className="list-inline-item me-5">
            <WishlistUser />
          </div>
          <div className="list-inline-item">
            <WishlistCart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Widgets;
