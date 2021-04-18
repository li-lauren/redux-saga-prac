import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import counterReducer from './ducks/counter';
import userReducer from './ducks/user';
import { watcherSaga } from './sagas/rootSaga';

const reducer = combineReducers({
  counter: counterReducer, 
  user: userReducer
});

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

// Mount in on the store
const store = createStore(reducer, {}, applyMiddleware(...middleware));

// then run the saga
sagaMiddleware.run(watcherSaga);

export default store;