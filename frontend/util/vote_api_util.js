export const createVote = vote => (
  $.ajax({
    method: 'POST',
    url: `api/votes`,
    data: { vote }
  })
);

export const updateVote = vote => (
  $.ajax({
    method: 'PATCH',
    url: `api/votes/${vote.id}`,
    data: { vote }
  })
);

export const destroyVote = ( vote ) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/votes/${vote.id}`,
    data: { post }
  });
};
