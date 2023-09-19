import { Link } from "react-router-dom";
import heart from "../assets/heart.svg";
import WishlistPill from "./WishlistPill";

const WishlistHeart = () => {
  return (
    <>
      <Link to="/wishlist" className="text-muted position-relative">
        <img src={heart} alt="heart" />
        <WishlistPill count={3} msg="unread message" />
      </Link>
    </>
  );
};

export default WishlistHeart;
