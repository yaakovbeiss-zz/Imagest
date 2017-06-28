import { values, get, pick, isEmpty } from 'lodash';

export const selectAllPosts = ({ post }) => {
  const posts = Object.keys(post.entities).map( (id)=>{
    return post.entities[id];
  });
  return posts;
}

export const selectAllComments = ({ comment }) => {
  if(!_.isEmpty(comment.entities)){
    const comments = Object.keys(comment.entities).map( id => {
      return comment.entities[id];
    });
    return comments;
  }
}

export const selectAllImages = ({ image }) => {
  if (values(image.entities).length > 0) {
    return image.entities
  } else {
    return [];
  }
}
