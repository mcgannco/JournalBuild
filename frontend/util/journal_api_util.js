export const fetchAllEntries = () => (
  $.ajax({
    method: 'GET',
    url: 'api/entries',
  })
);

export const fetchSingleEntry = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/entries/${id}`,
  })
);

export const createEntry = (entry) => (
  $.ajax({
    method: 'POST',
    url: '/api/entries',
    processData: false,
    contentType: false,
    dataType: 'json',
    data: entry
  })
);

export const deleteEntry = (id) => {
  return $.ajax({
      method: 'delete',
      url: `/api/entries/${id}`
  });
};
