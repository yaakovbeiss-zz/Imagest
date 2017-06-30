import * as APIUtil from '../util/vote_api_util';
import { receivePost } from './post_actions';

export const createVote = vote => dispatch => (
  APIUtil.createVote(vote)
  .then(post => dispatch(receivePost(post)))
);
export const updateVote = vote => dispatch => (
  APIUtil.updateVote(vote)
  .then(post => dispatch(receivePost(post)))
);
export const destroyVote = vote => dispatch => (
  APIUtil.destroyVote(vote)
  .then(post => dispatch(receivePost(post)))
);

export const toggleUpvote = (vote, voted) => dispatch => {
  if(voted){

    if(vote.vote_type === 'Upvote'){
      dispatch(destroyVote(vote));
    } else {
      vote.vote_type = 'Upvote';
      dispatch(updateVote(vote));
    }
  } else {

    dispatch(createVote(vote));
  }
}
export const toggleDownvote = (vote, voted) => dispatch => {
  if(voted){
    if(vote.vote_type === 'Downvote'){
      dispatch(destroyVote(vote));
    } else {
      vote.vote_type = 'Downvote';
      dispatch(updateVote(vote));
    }
  } else {
    dispatch(createVote(vote));
  }
}
