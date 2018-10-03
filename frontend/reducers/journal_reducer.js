import merge from 'lodash/merge';

import { RECEIVE_ALL_ENTRIES, RECEIVE_SINGLE_ENTRY, DESTROY_ENTRY } from '../actions/journal_actions';

const entriesReducer = (state = {}, action) => {
  let newState = {};
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_ENTRIES:
      return merge({}, state, action.entries);
    case RECEIVE_SINGLE_ENTRY:
      return merge({}, state, { [action.entry.id]: action.entry });
    case DESTROY_ENTRY:
      newState = merge({}, state);
      delete newState[action.entry.id];
      return newState;
    default:
      return state;
  }
};

export default entriesReducer;
