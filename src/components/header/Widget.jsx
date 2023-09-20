import PropTypes from "prop-types";
import { Cell } from "../material/Index";
import Pill from "./Pill";
import heart from "../../assets/heart.svg";
import user from "../../assets/user.svg";
import cart from "../../assets/cart.svg";

const Widget = ({ className }) => {
  return (
    <>
      <Cell className={`list-inline ${className}`}>
        <Pill src={heart} count={3} alt="heart" />
        <Pill src={user} c alt="user" />
        <Pill src={cart} count={0} alt="cart" />
      </Cell>
    </>
  );
};

Widget.propTypes = {
  className: PropTypes.string,
};

export default Widget;
