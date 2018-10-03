import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import entriesReducer from './journal_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  entries: entriesReducer,
});

export default entitiesReducer;
