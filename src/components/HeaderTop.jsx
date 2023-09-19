import { useRef, useState } from "react";
import { langs } from "../utils/constans";
import { Container, Row } from "./Index";
import { Link } from "react-router-dom";
import { useProductsContext } from "../contexts/products_context";

const HeaderTop = () => {
  const langRef = useRef();
  const [lang, setLang] = useState(langs[0]);
  const { isLangOpen, toggleLang } = useProductsContext();

  const handleLang = (index) => {
    setLang(langs[index]);
    toggleLang();
  };

  return (
    <>
      <div className="bg-light py-1">
        <Container>
          <Row>
            <div className="col-md-6 col-12 text-center text-md-start">
              <span> Super Value Deals - Save more with coupons</span>
            </div>
            <div className="col-6 text-end d-none d-md-block relative">
              <div className="dropdown selectBox">
                <Link
                  className="dropdown-toggle selectValue text-reset text-capitalize"
                  onClick={toggleLang}
                  ref={langRef}
                >
                  <span className="me-1">
                    <img src={lang.icon} alt={lang.text} />
                  </span>
                  {lang.text}
                </Link>
                <ul
                  className="dropdown-menu"
                  style={
                    isLangOpen
                      ? {
                          position: "absolute",
                          right: "-2rem",
                          top: "100%",
                          minWidth: "130px",
                          boxShadow: "var(--fc-dropdown-box-shadow)",
                          lineHeight: "1.375rem",
                          zIndex: "1021",
                          display: "block",
                        }
                      : { display: "none" }
                  }
                >
                  {langs.map((lang, index) => {
                    return (
                      <li key={lang.id}>
                        <Link
                          className="dropdown-item"
                          onClick={() => handleLang(index)}
                        >
                          <span className="me-1">
                            <img src={lang.icon} alt={lang.text} />
                          </span>
                          English
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default HeaderTop;
