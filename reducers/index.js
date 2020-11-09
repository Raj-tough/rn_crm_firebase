import {combineReducers} from 'redux';
import authReducer from './authReducer';
import CustomerReducer from './CustomerReducer';
import ProductReducer from './ProductReducer';

export default combineReducers({
  authReducer,
  CustomerReducer,
  ProductReducer,
});
