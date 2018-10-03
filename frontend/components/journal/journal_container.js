import { connect } from 'react-redux';
import { requestAllEntries,createEntry,deleteEntry } from '../../actions/journal_actions';
import { selectEntries } from '../../reducers/selectors';

import Journal from './journal';

const msp = state => {
  return({
    currentUser: state.entities.users[state.session.id],
    entries: selectEntries(state)
  })
};

const mdp = dispatch => {
  return({
    requestAllEntries: () => dispatch(requestAllEntries()),
    createEntry: (entry) => dispatch(createEntry(entry)),
    deleteEntry: (entryId) => dispatch(deleteEntry(entryId))
  })
};

export default connect(msp, mdp)(Journal);
