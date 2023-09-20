import { Cell } from "../material/Index";
import HeaderFill from "./HeaderFill";
import HeaderTop from "./HeaderTop";

const Header = () => {
  return (
    <>
      <Cell className="border-bottom">
        <HeaderTop />
        <HeaderFill />
      </Cell>
    </>
  );
};

export default Header;
