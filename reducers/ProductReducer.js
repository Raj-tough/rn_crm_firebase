import {STORE_PRODUCTS} from '../constant/productConstant';

export default (
  state = {
    productList: {},
  },
  action,
) => {
  switch (action.type) {
    case STORE_PRODUCTS:
      return {
        ...state,
        productList: action.data,
      };
    default:
      return state;
  }
};
