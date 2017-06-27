export const fetchComment = id => (
  $.ajax({
    method: 'GET',
    url: `api/comments/${id}`,
  })
);

export const fetchComments = () => (
  $.ajax({
    method: 'GET',
    url: 'api/comments',
  })
);

export const createComment = ( comment ) => {
  return $.ajax({
    method: 'POST',
    url: 'api/comments/',
    data: { comment }
  });
};
