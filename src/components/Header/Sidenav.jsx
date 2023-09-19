import { useProductsContext } from "../../contexts/products_context";
import { DepartmentsAll, LocationButton, Logo, Nav, Search } from "./Index";

const Sidenav = () => {
  const { sidenavClose } = useProductsContext();

  return (
    <>
      <div className="offcanvas-header pb-1">
        <Logo />
        <button
          type="button"
          className="btn-close"
          onClick={sidenavClose}
        ></button>
      </div>
      <div className="offcanvas-body">
        <Search className="d-block d-lg-none mb-4">
          <div className="mt-2">
            <LocationButton className="" btnClass="w-100" />
          </div>
        </Search>
        <DepartmentsAll />
        <Nav />
      </div>
    </>
  );
};

export default Sidenav;
