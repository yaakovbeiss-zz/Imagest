export const fetchAccount = id => (
  $.ajax({
    method: 'GET',
    url: `api/accounts/${id}`,
  })
);

export const fetchAccounts = () => (
  $.ajax({
    method: 'GET',
    url: 'api/accounts',
  })
);
