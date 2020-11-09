
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  VERIFY_REQUEST,
  VERIFY_SUCCESS,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS, 
  TOGGLE_THEME
} from '../constant/authConstants'

export const requestLogin = () => {
  return {
    type: LOGIN_REQUEST
  };
};

export const receiveLogin = user => {
  return {
    type: LOGIN_SUCCESS,
    user: user
  };
};

export const loginError = () => {
  return {
    type: LOGIN_FAILURE
  };
};

export const requestLogout = () => {
  return {
    type: LOGOUT_REQUEST
  };
};

export const receiveLogout = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};

export const logoutError = () => {
  return {
    type: LOGOUT_FAILURE
  };
};

export const verifyRequest = () => {
  return {
    type: VERIFY_REQUEST
  };
};

export const verifySuccess = () => {
  return {
    type: VERIFY_SUCCESS
  };
};

export const signUpRequest = () => {
  return {
    type : SIGN_UP_REQUEST
  }
}

export const signUpSuccess = (user) => {
  return {
    type : SIGN_UP_SUCCESS,
    user_signedup : user
  }
}

export const toggleTheme = (isDarkTheme) => {
  return {
    type : TOGGLE_THEME,
    isDarkTheme : isDarkTheme
  }
}