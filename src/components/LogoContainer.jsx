import { Logo, WishlistRes } from "./Index";

const LogoContainer = () => {
  return (
    <>
      <div className="col-xxl-2 col-lg-3">
        <Logo className="navbar-brand d-none d-lg-block" />
        <WishlistRes />
      </div>
    </>
  );
};

export default LogoContainer;
