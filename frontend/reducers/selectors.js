import { values, get, pick, isEmpty } from 'lodash';

export const selectAllPosts = ({ post }) => {
  const posts = Object.keys(post.entities).map( (id)=>{
    return post.entities[id];
  });
  return posts;
}

export const selectAllComments = ({ comment, post }) => {
  const currentPostId = post.currentPost;
  if(!_.isEmpty(comment.entities)){
    const comments = [];
    Object.keys(comment.entities).map( id => {
      if(comment.entities[id].commentable_id === currentPostId ) {
        comments.push(comment.entities[id]);
      }
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
