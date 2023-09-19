import {
  Container,
  LocationButton,
  LogoContainer,
  Row,
  Search,
  Widgets,
} from "./Index";

const HeaderFill = () => {
  return (
    <>
      <div className="py-5">
        <Container>
          <Row className="w-100 align-items-center gx-lg-2 gx-0">
            <LogoContainer />
            <Search />
            <LocationButton />
            <Widgets />
          </Row>
        </Container>
      </div>
    </>
  );
};

export default HeaderFill;
