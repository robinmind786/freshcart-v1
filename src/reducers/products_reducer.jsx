import { LANG_TOGGLE } from "../actions";

const product_reducer = (state, action) => {
  if (action.type === LANG_TOGGLE) {
    return {
      ...state,
      isLangToggle: !state.isLangToggle,
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default product_reducer;
