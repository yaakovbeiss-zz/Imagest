export const fetchPost = id => (
  $.ajax({
    method: 'GET',
    url: `api/posts/${id}`,
  })
);

export const fetchPosts = () => (
  $.ajax({
    method: 'GET',
    url: 'api/posts',
  })
);

export const createPost = ( post ) => {
  return $.ajax({
    method: 'POST',
    url: 'api/posts/',
    data: { post }
  });
};
