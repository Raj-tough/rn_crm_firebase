import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  VERIFY_REQUEST,
  VERIFY_SUCCESS,
  SIGN_UP_SUCCESS,
  SIGN_UP_REQUEST,
  TOGGLE_THEME,
} from '../constant/authConstants';

export default (
  state = {
    isLoggingIn: false,
    isLoggingOut: false,
    isVerifying: false,
    loginError: false,
    logoutError: false,
    isAuthenticated: false,
    isDarkTheme: false,
    userName: null,
    userToken: null,
    user: {},
    userId: null,
    signed_up_user: {},
  },
  action,
) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoggingIn: true,
        loginError: false,
      };
    case SIGN_UP_REQUEST:
      return {
        ...state,
        isLoggingIn: true,
        loginError: false,
        isAuthenticated: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: true,
        isVerifying: false,
        user: action.user,
        signed_up_user: {},
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: false,
        user: action.user,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: false,
        loginError: true,
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        isLoggingOut: true,
        logoutError: false,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggingOut: false,
        isAuthenticated: false,
        user: {},
        signed_up_user: {},
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        isLoggingOut: false,
        logoutError: true,
      };
    case VERIFY_REQUEST:
      return {
        ...state,
        isVerifying: true,
        verifyingError: false,
      };
    case VERIFY_SUCCESS:
      return {
        ...state,
        isVerifying: false,
      };
    case TOGGLE_THEME:
      return {
        ...state,
        isDarkTheme: action.isDarkTheme,
      };
    default:
      return state;
  }
};
