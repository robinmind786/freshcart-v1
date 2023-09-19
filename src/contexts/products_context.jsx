import { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";
import reducer from "../reducers/products_reducer";

import { LANG_TOGGLE, SIDENAV_OPEN, SIDENAV_CLOSE } from "../actions";

const initialState = {
  isLangOpen: false,
  isSidebarOpen: false,
};

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleLang = () => {
    dispatch({ type: LANG_TOGGLE });
  };

  const sidenavOpen = () => {
    dispatch({ type: SIDENAV_OPEN });
  };

  const sidenavClose = () => {
    dispatch({ type: SIDENAV_CLOSE });
  };

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        toggleLang,
        sidenavOpen,
        sidenavClose,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

ProductsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
