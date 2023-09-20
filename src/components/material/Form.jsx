import PropTypes from "prop-types";

const Form = ({ children, action, className, onHandleSubmit }) => {
  return (
    <>
      <form action={action} onSubmit={onHandleSubmit} className={className}>
        {children}
      </form>
    </>
  );
};

Form.propTypes = {
  children: PropTypes.element,
  action: PropTypes.string,
  className: PropTypes.string,
  onHandleSubmit: PropTypes.func,
};

export default Form;
