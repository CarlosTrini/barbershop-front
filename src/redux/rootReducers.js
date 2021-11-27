import {combineReducers} from 'redux';

import authReducer from './auth/authReducer';
import adminReducer from './admin/adminReducer';
import clientReducer from './client/clientReducer';

const rootReducer = combineReducers({
   authReducer,
   adminReducer,
   clientReducer
});

export default rootReducer;