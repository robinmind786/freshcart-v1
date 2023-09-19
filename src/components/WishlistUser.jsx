import { Link } from "react-router-dom";
import user from "../assets/user.svg";

const WishlistUser = () => {
  return (
    <>
      <Link to="/user" href="#!" className="text-muted">
        <img src={user} alt="user" />
      </Link>
    </>
  );
};

export default WishlistUser;
