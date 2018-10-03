import values from 'lodash/values';

export const selectEntries = state => values(state.entities.entries);
