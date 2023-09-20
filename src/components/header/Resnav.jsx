import Logo from "../Logo";
import { Button, Cell, Img } from "../material/Index";
import Widget from "./Widget";

import bar from "../../assets/bar.svg";

const Resnav = () => {
  return (
    <>
      <Cell className="d-flex justify-content-between w-100 d-lg-none">
        <Logo className="navbar-brand" />
        <Cell className="d-flex align-items-center lh-1">
          <Widget className="me-4" />
          <Button className="navbar-toggler collapsed">
            <Img src={bar} alt="bar" />
          </Button>
        </Cell>
      </Cell>
    </>
  );
};

export default Resnav;
