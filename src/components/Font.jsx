import PropTypes from "prop-types";

const Font = ({ variant, className, text, children }) => {
  return (
    <>
      {variant === "h1" ? (
        <h1 className={className}>
          {text}
          {children}
        </h1>
      ) : variant === "h2" ? (
        <h2 className={className}>
          {text}
          {children}
        </h2>
      ) : variant === "h3" ? (
        <h3 className={className}>
          {text}
          {children}
        </h3>
      ) : variant === "h4" ? (
        <h4 className={className}>
          {text}
          {children}
        </h4>
      ) : variant === "h5" ? (
        <h5 className={className}>
          {text}
          {children}
        </h5>
      ) : variant === "h6" ? (
        <h6 className={className}>
          {text}
          {children}
        </h6>
      ) : variant === "p" ? (
        <p className={className}>
          {text}
          {children}
        </p>
      ) : (
        <div className={className}>
          {text}
          {children}
        </div>
      )}
    </>
  );
};

Font.propTypes = {
  variant: PropTypes.any,
  className: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.any,
};

export default Font;
