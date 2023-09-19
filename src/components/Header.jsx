import { HeaderTop, HeaderFill, Navbar } from "./Index";

const Header = () => {
  return (
    <>
      <div className="border-bottom">
        <HeaderTop />
        <HeaderFill />
        <Navbar />
      </div>
    </>
  );
};

export default Header;
