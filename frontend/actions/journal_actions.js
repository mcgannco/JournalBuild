import * as APIUtil from '../util/journal_api_util';
export const RECEIVE_ALL_ENTRIES  = 'RECEIVE_ALL_ENTRIES ';
export const RECEIVE_SINGLE_ENTRY  = 'RECEIVE_SINGLE_ENTRY ';
export const RECEIVE_ERRORS  = 'RECEIVE_ERRORS ';
export const DESTROY_ENTRY  = 'DESTROY_ENTRY ';

export const receiveAllEntries = (entries) => (
  {
    type: RECEIVE_ALL_ENTRIES,
    entries
  }
);

export const receiveSingleEntry = (entry) => (
  {
    type: RECEIVE_SINGLE_ENTRY,
    entry
  }
);

export const receiveErrors = (errs) => (
  {
    type: RECEIVE_ERRORS,
    errs
  }
);

export const receiveDestroyedEntry = entry => ({
  type: DESTROY_ENTRY,
  entry
});

export const requestAllEntries = () => dispatch => (
  APIUtil.fetchAllEntries().then(entries => (dispatch(receiveAllEntries(entries)))
));

export const requestSingleEntry = (id) => dispatch => (
  APIUtil.fetchSingleEntry(id).then(entry => (dispatch(receiveSingleEntry(entry)))
));

export const createEntry = entry => dispatch => {
  return(APIUtil.createEntry(entry).then(entry => (
    dispatch(receiveSingleEntry(entry))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
)
};

export const deleteEntry = (entryId) => dispatch => {
  return APIUtil.deleteEntry(entryId).then(entry => dispatch(receiveDestroyedEntry(entry)));
};

export const updateEntry = (id,entry) => dispatch => {
  return(
    APIUtil.updateEntry(id,entry).then(entry => dispatch(receiveSingleEntry(entry)),
  err => dispatch(receiveErrors(err.responseJSON))));
};
