export const search = query => (
  $.ajax({
    method: 'GET',
    url: `api/search/`,
    data: { query } ,
  })
);
