import { connect } from 'react-redux';
import { requestSingleEntry, updateEntry } from '../../actions/journal_actions';
import EntryShow from './entry_show';

const msp = (state, ownProps) => {
  return({
    currentUser: state.session.id,
    entry: state.entities.entries[ownProps.match.params.entryId],
  })
};

const mdp = dispatch => {
  return({
    requestSingleEntry: (id) => dispatch(requestSingleEntry(id)),
    updateEntry: (id, entry) => dispatch(updateEntry(id, entry))
  })
};

export default connect(msp, mdp)(EntryShow);
