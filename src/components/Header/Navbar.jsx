import { useProductsContext } from "../../contexts/products_context";
import { Container, Sidenav } from "./Index";

const Navbar = () => {
  const { isSidebarOpen } = useProductsContext();

  return (
    <>
      <div className="navbar navbar-expand-lg navbar-light navbar-default py-0 pb-lg-4">
        <Container>
          <div
            className={`offcanvas offcanvas-start ${
              isSidebarOpen ? "show" : ""
            }`}
          >
            <Sidenav />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
