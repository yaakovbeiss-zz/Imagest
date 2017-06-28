import { values, get, pick, isEmpty } from 'lodash';

export const selectAllPosts = ({ post }) => {
  const posts = Object.keys(post.entities).map( (id)=>{
    return post.entities[id];
  });
  return posts;
}

export const selectAllComments = ({ comment }, commentIds ) => {
  return commentIds.map( id => comment.entities[id]);
}

// export const selectChildComments = ({ comment }) => {
//
// }

export const selectAllImages = ({ image }) => {
  if (values(image.entities).length > 0) {
    return image.entities
  } else {
    return [];
  }
}
