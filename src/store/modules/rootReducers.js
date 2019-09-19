import { combineReducers } from 'redux';

import user from './user/reducers';

const rootReducers = combineReducers({ user });
export default rootReducers;
