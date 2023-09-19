import { departments } from "../utils/constans";
import { DepartmentButton, Dropdown } from "./Index";

const DepartmentsAll = () => {
  return (
    <>
      <div className="dropdown me-3 d-none d-lg-block">
        <DepartmentButton />
        <Dropdown dropLinks={departments} />
      </div>
    </>
  );
};

export default DepartmentsAll;
