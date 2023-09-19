import { Link } from "react-router-dom";
import Cell from "../components/Cell";
import Chapter from "../components/Chapter";
import Container from "../components/Container";
import Major from "../components/Major";
import Row from "../components/Row";
import { details } from "../utils/constans";
import Img from "../components/Img";

import Font from "../components/Font";

const HomePage = () => {
  return (
    <>
      <Major>
        <Chapter className="my-lg-14 my-8">
          <Container>
            <Row>
              {details?.map((detail) => {
                return (
                  <Cell className="col-md-6 col-lg-3" key={detail.id}>
                    <Cell className="mb-8 mb-xl-0">
                      <Cell className="mb-6">
                        <Img src={detail.icon} alt={details.detail} />
                      </Cell>
                      <Font
                        variant="h3"
                        className="h5 mb-3"
                        text={detail.title}
                      />
                      <Font variant="p" text={detail.desc}>
                        {" "}
                        {detail.link && <Link to="/">policy</Link>}
                      </Font>
                    </Cell>
                  </Cell>
                );
              })}
            </Row>
          </Container>
        </Chapter>
      </Major>
    </>
  );
};

export default HomePage;
