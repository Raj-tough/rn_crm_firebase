import {
    STORE_CUSTOMERS
  } from '../constant/CustomerConstant';
  
  export default (
    state = {
      customerData : {}
    },
    action,
  ) => {
    switch (action.type) {
      case STORE_CUSTOMERS:
        return {
          ...state,
          customerData : action.data
        };
      default:
        return state;
    }
  };
  