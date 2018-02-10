import  { createStore } from 'redux';
import mainReducer, { initialState } from './reducers';

let store = createStore(
  mainReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
