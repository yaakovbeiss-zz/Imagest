import { values, get, pick, isEmpty } from 'lodash';

export const selectAllPosts = ({ post }) => {
  const posts = Object.keys(post.entities).map( (id)=>{
    return post.entities[id];
  });
  return posts;
}

export const selectAllComments = ({ comment }, commentIds ) => {
    if(comment.entities) {
      return commentIds.map( id => comment.entities[id]);
    }
}
export const selectAccounts = (accounts) => {

  if(accounts){
    const accountsArray = Object.keys(accounts.entities).map( (id)=>{
      return accounts.entities[id];
    });
    return accountsArray;
  }
}

export const selectAccountPosts = ( post, ownProps ) => {
  const posts = [];
  Object.keys(post.entities).map( (id)=>{
    if(post.entities[id].account_id === parseInt(ownProps.match.params.accountId)){
      posts.push(post.entities[id]);
    }
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
