import { Button, Cell, Col, Container, Icon, Row } from "../material/Index";

import Logo from "../Logo";
import Search from "./Search";
import Widget from "./Widget";
import Resnav from "./Resnav";

const HeaderFill = () => {
  return (
    <>
      <Cell className="py-5">
        <Container>
          <Row className="w-100 align-items-center gx-lg-2 gx-0">
            {/* Logo */}
            <Col className="col-xxl-2 col-lg-3">
              <Logo />
              <Resnav />
            </Col>

            {/* Search */}
            <Col className="col-xxl-5 col-lg-5 d-none d-lg-block">
              <Search />
            </Col>

            {/* Location button */}
            <Col className="col-md-2 col-xxl-3 d-none d-lg-block">
              <Button
                className="btn  btn-outline-gray-400 text-muted"
                type="button"
              >
                <Icon className="fa-regular fa-location-crosshairs me-2" />
                Location
              </Button>
            </Col>
            {/* Widget */}
            <Col className="col-md-2 col-xxl-2 text-end d-none d-lg-block">
              <Widget />
            </Col>
          </Row>
        </Container>
      </Cell>
    </>
  );
};

export default HeaderFill;
