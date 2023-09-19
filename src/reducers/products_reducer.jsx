import { LANG_TOGGLE, SIDENAV_OPEN, SIDENAV_CLOSE } from "../actions";

const products_reducer = (state, action) => {
  if (action.type === LANG_TOGGLE) {
    return {
      ...state,
      isLangOpen: !state.isLangOpen,
    };
  }

  if (action.type === SIDENAV_OPEN) {
    return {
      ...state,
      isSidebarOpen: true,
    };
  }

  if (action.type === SIDENAV_CLOSE) {
    return {
      ...state,
      isSidebarOpen: false,
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default products_reducer;
