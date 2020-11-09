// import {myFirebase} from '../firebase/firebase';
// import {fireDb} from '../firebase/firebase';
import {firebase} from '../firebase/firebase';

import {
  requestLogin,
  receiveLogin,
  loginError,
  signUpSuccess,
  requestLogout,
  receiveLogout,
  logoutError,
  verifySuccess,
  verifyRequest,
} from '../actions/authAction';

export const loginUser = (email, password) => (dispatch) => {
  dispatch(requestLogin());
  console.log('service function runs');
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      console.log(user);
      dispatch(receiveLogin(user));

      // getAndUpdateProductListDataToState(user.user.uid)
      // console.log('dispatched')
    })
    .catch((error) => {
      console.log(error);
      dispatch(loginError());
    });
};

export const handleSignUp = (email, password) => (dispatch) => {
  // dispatch(signUpRequest());
  // console.log()
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      dispatch(signUpSuccess(user));
      console.log(user.user.uid);
      fireDb
        .ref('users/' + user.user.uid)
        .set({user_id: user.user.uid, date: String(new Date())})
        .then(() => {
          console.log('created sucessfully');
        })
        .catch((errors) => {
          console.log(errors);
        });
    })
    .catch((error) => {
      dispatch(loginError());
    });
};

export const logoutUser = () => (dispatch) => {
  dispatch(requestLogout());
  firebase
    .auth()
    .signOut()
    .then(() => {
      dispatch(receiveLogout());
    })
    .catch((error) => {
      dispatch(logoutError());
    });
};

export const verifyAuth = () => (dispatch) => {
  dispatch(verifyRequest());
  firebase.auth().onAuthStateChanged((user) => {
    if (user !== null) {
      dispatch(receiveLogin(user));
    }
    dispatch(verifySuccess());
  });
};
