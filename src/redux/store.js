import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './rootReducers';

const store = createStore(
   rootReducer,
   composeWithDevTools(compose(applyMiddleware(thunk)))
);

export default store;