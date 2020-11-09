import {applyMiddleware, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {verifyAuth} from './services/authService';
import rootReducer from './reducers';

export default function configureStore(persistedState) {
  const store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(thunkMiddleware),
  );
  store.dispatch(verifyAuth());
  return store;
}
