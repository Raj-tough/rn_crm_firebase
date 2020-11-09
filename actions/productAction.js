import {STORE_PRODUCTS} from '../constant/productConstant'

export const storeProductstoState = products => {
    return {
      type: STORE_PRODUCTS,
      data : products
    };
  };