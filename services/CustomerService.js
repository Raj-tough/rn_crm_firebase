// import {myFirebase} from '../firebase/firebase';
// import {fireDb} from '../firebase/firebase';
import {firebase} from '../firebase/firebase';
import {storeCustomersToState} from '../actions/customersAction';

export const addCustomer = (userId, customer) => {
  console.log('customer adding');
  if (customer !== null) {
    firebase
      .database()
      .ref('customers/' + userId)
      .set(customer)
      .then((data) => {
        firebase
          .database()
          .ref('/customers/' + userId)
          .once('value')
          .then((data) => console.log(data.val()));
      })
      .catch((error) => {
        console.log(error);
      });
  }
};

export const getCustomers = (userId) => (dispatch) => {
  // console.log('customer getting');
  firebase
    .database()
    .ref('customers/' + userId)
    .on('value', (data) => {
      let firstCustomer = [];
      // console.log(data.val());
      // console.log(data.val().length);
      if (data.val() && data.val().length === undefined) {
        firstCustomer.push(data.val());
        // console.log(firstCustomer);
        dispatch(storeCustomersToState(firstCustomer));
      } else {
        // console.log('nothing');
        dispatch(storeCustomersToState(data.val()));
      }
    });
};
