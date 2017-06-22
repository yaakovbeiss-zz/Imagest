import { values, get, pick } from 'lodash';

export const selectAllposts = ({ post }) => {
  if (values(post.entities).length > 0) {
    return post.entities
  } else {
    return [];
  }
}
