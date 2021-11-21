import {combineReducers} from 'redux';

import authReducer from './auth/authReducer';
import adminReducer from './admin/adminReducer';

const rootReducer = combineReducers({
   authReducer,
   adminReducer
});

export default rootReducer;