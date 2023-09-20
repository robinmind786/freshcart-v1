import {
  Cell,
  Font,
  Img,
  LinkBtn,
  List,
  ListItem,
  Col,
  Row,
} from "../material/Index";
import { langs } from "../../utils/constans";
import { useState } from "react";
import { useProductsContext } from "../../contexts/products_context";

const HeaderTop = () => {
  const [lang, setLang] = useState(langs[0]);
  const { isLangToggle, langToggle } = useProductsContext();

  const langValueSet = (i) => {
    setLang(langs[i]);
    langToggle();
  };

  return (
    <>
      <Cell className="bg-light py-1">
        <Cell className="container">
          <Row className="row">
            <Col className="col-md-6 col-12 text-center text-md-start">
              <Font
                variant="span"
                text="Super Value Deals - Save more with coupons"
              />
            </Col>
            <Col className="col-6 text-end d-none d-md-block">
              <Cell className="dropdown selectBox">
                <LinkBtn
                  className="dropdown-toggle selectValue text-reset"
                  onHandleClick={langToggle}
                >
                  <Font variant="span" className="me-1">
                    <Img src={lang.icon} alt={lang.text} />
                  </Font>
                  English
                </LinkBtn>
                <List
                  className="dropdown-menu"
                  desgin={
                    isLangToggle
                      ? {
                          position: "absolute",
                          inset: "0px auto auto 0px",
                          margin: " 0px",
                          transform: " translate3d(448.667px, 21.3333px, 0px)",
                          boxShadow: "var(--fc-dropdown-box-shadow)",
                          lineHeight: "1.375rem",
                          zIndex: "1021",
                          display: "block",
                        }
                      : null
                  }
                >
                  {langs.map((el, i) => {
                    return (
                      <ListItem key={el.id}>
                        <LinkBtn
                          className="dropdown-item"
                          onHandleClick={() => langValueSet(i)}
                        >
                          <Font variant="span" className="me-1">
                            <Img src={el.icon} alt={el.text} />
                          </Font>
                          English
                        </LinkBtn>
                      </ListItem>
                    );
                  })}
                </List>
              </Cell>
            </Col>
          </Row>
        </Cell>
      </Cell>
    </>
  );
};

export default HeaderTop;
