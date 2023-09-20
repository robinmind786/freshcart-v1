import { footers } from "../../utils/constans";
import { Cell, Container, Row } from "../material/Index";
import FooterNav from "./FooterNav";

const Footer = () => {
  return (
    <>
      <Cell className="footer">
        <Container>
          <Row className="g-4 py-4">
            <Cell className="col-12 col-md-12 col-lg-4">
              <h6 className="mb-4">Categories</h6>
            </Cell>
            <Cell className="col-12 col-md-12 col-lg-8">
              <Row className="row g-4">
                {footers?.map((item) => {
                  return <FooterNav key={item.id} {...item} />;
                })}
              </Row>
            </Cell>
          </Row>
        </Container>
      </Cell>
    </>
  );
};

export default Footer;
