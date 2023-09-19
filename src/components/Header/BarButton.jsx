import bar from "../../assets/bar.svg";
import { useProductsContext } from "../../contexts/products_context";
import Backdrop from "./Backdrop";

const BarButton = () => {
  const { isSidebarOpen, sidenavOpen, sidenavClose } = useProductsContext();
  return (
    <>
      {isSidebarOpen && <Backdrop hideBackdrop={sidenavClose} />}
      <button
        className="navbar-toggler collapsed"
        type="button"
        onClick={sidenavOpen}
      >
        <img src={bar} alt="bar" />
      </button>
    </>
  );
};

export default BarButton;
