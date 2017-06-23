import { values, get, pick } from 'lodash';

export const selectAllPosts = ({ post }) => {
  if (values(post.entities).length > 0) {
    return post.entities
  } else {
    return [];
  }
}
export const selectAllImages = ({ image }) => {
  if (values(image.entities).length > 0) {
    return image.entities
  } else {
    return [];
  }
}
