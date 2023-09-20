import { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";
import reducer from "../reducers/products_reducer";
import { LANG_TOGGLE } from "../actions";

const initialState = {
  isLangToggle: false,
};

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const langToggle = () => {
    dispatch({ type: LANG_TOGGLE });
  };

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        langToggle,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
// eslint-disable-next-line react-refresh/only-export-components
export const useProductsContext = () => {
  return useContext(ProductsContext);
};

ProductsProvider.propTypes = {
  children: PropTypes.element,
};
