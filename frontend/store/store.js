import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/root_reducer';

// const preloadedState = {
//   post: {
//     entities: {
//       1: {
//         id: 1,
//         title: 'title',
//         description: 'description',
//         account_id: 1,
//         upvotes: 0,
//         downvotes: 0,
//       }
//     },
//     currentPost: null,
//   },
//   session: {},
// }

const configureStore = ( state ) => (
  createStore(RootReducer, applyMiddleware(thunk))
);

export default configureStore;
