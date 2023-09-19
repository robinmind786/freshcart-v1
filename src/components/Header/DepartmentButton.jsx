import grid from "../../assets/grid.svg";

const DepartmentButton = () => {
  return (
    <>
      <button className="btn btn-primary px-6 " type="button">
        <span className="me-1">
          <img src={grid} alt="grid" />
        </span>
        All Departments
      </button>
    </>
  );
};

export default DepartmentButton;
