export const fetchImage = id => (
  $.ajax({
    method: 'GET',
    url: `api/images/${id}`,
  })
);

export const fetchImages = () => (
  $.ajax({
    method: 'GET',
    url: 'api/images',
  })
);

export const createImage = ( props ) => {
debugger
  return $.ajax({
    method: 'POST',
    url: 'api/images/',
    data: props ,
    contentType: false,
    processData: false,
  });
};
