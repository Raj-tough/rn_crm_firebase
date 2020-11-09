import {firebase} from '../firebase/firebase';
import {storeProductstoState} from '../actions/productAction';

export const addProduct = (
  productData,
  userId,
  cbForSuccessSnackBar,
  cbForCloseModal,
  onPressResetButton,
) => {
  console.log('product adding');
  firebase
    .database()
    .ref()
    .child('products/' + userId)
    .push(productData)
    .then(() => {
      onPressResetButton();
      cbForSuccessSnackBar();
      cbForCloseModal();
    })
    .catch((error) => console.log(error));
};

export const deleteProductFromDatabase = (productId, userId) => {
  console.log(productId, userId);
  firebase
    .database()
    .ref(`products/${userId}/${productId}`)
    .remove(() => {
      console.log('deleted');
    });
};

// export const getProductList = (userId) => {
//     return new Promise( resolve => {
//         fireDb.ref('products/' + userId).on('value',
//             (data) => {
//                 resolve(data.val())
//             })
//         })
//     // .then((data) => {console.log(data)})
//     // .catch((error) => {console.log(error)})
//     // console.log(dbData)
// }

export const getAndUpdateProductListDataToState = (userId) => (dispatch) => {
  // console.log(userId)
  firebase
    .database()
    .ref('products/' + userId)
    .on('value', (data) => {
      if (!data.val() || data.val === undefined) {
        dispatch(storeProductstoState([]));
      }
      if (data && data.val()) {
        dispatch(storeProductstoState(data.val()));
      }
    });
};

export const cleanProductList = () => (dispatch) => {
  dispatch(cleanProductListAction());
};
