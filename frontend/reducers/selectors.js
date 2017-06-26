import { values, get, pick } from 'lodash';

export const selectAllPosts = ({ post }) => {
  const posts = Object.keys(post.entities).map( (id)=>{
    return post.entities[id];
  });
  return posts;
}
export const selectAllImages = ({ image }) => {
  if (values(image.entities).length > 0) {
    return image.entities
  } else {
    return [];
  }
}
