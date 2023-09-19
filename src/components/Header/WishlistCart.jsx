import cart from "../../assets/cart.svg";
import { Link } from "react-router-dom";
import { WishlistPill } from "./Index";

const WishlistCart = () => {
  return (
    <>
      <Link to="/cart" className="text-muted position-relative ">
        <img src={cart} alt="cart" />
        <WishlistPill count={1} msg="unread message" />
      </Link>
    </>
  );
};

export default WishlistCart;
