import {STORE_CUSTOMERS} from "../constant/CustomerConstant"


export const storeCustomersToState = customers => {
    return {
      type: STORE_CUSTOMERS,
      data : customers
    };
  };