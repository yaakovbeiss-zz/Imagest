# Imagest

[Imagest live](https://imagest.herokuapp.com/#/)

Imagest is a full-stack web application clone of the popular image sharing site imgur.com. Imagest utilizes Ruby on Rails for the backend, a PostgreSQL database, and React.js alongside Redux for the frontend framework.

## Features & Implementation

### Account Creation - Frontend and Backend Authentication

Users can create an account which is stored in the database. Only users who are signed up can create posts and comment and posts or comments. This is implemented on the the frontend and backend:
Frontend - a Session Reducer keeps track of the current user slice of state. The current user is bootstrapped to the window and the Store is preloaded with that users information allowing the user to see his information immediately.
Backend - Users enter a password which stores a password-digest token in the database (using BCrypt library to generate secure passwords). User password information is not stored in the database. A session token is generated and stored in the database and is used to match the session token in the browser cookies to allow to user to remain logged in after closing the browser.

### Creating a Post

Posting images is a main feature of Imagest. Logged in users can upload images and give them a title and description. Once uploaded, other users can upvote or downvote. Users can select a file from their computer or drag and drop on in the form. Each post has a main-image association that designates a main picture to be displayed on the posts index page. Posts are stored in a post slice of redux state, and each post has information about who commented or voted on it.

![posting](https://github.com/yaakovbeiss/Imagest/blob/master/app/assets/images/posting.gif)

### Commenting on Posts and Comments

Comments are a main feature of imgur.com and of imagest.com. Users can express their thoughts on posts and comments by creating their own comments everything. Commenting on infinitely nested comments provides some challenges when it comes storage in redux state. Normalizing state solves this problem. Each comment and post has a list of comment Ids that commented on them, and they are associated via a polymorphic association. This association lets the database know if the thing being commented on (commentable) is a post or another comment. Each comment can then render a list of its child comments using its own commentIds array which is stored in state.

![commentable](https://github.com/yaakovbeiss/Imagest/blob/master/app/assets/images/comment%20on%20a%20comment.gif)

```javascript
posts: {
  1: {
    id: 1,
    title: "PhotoshoppedMichaelCeraEveryDay",
    description: "awesome description",
    points: 1000,
    account_id: "yaakovbeiss",
    comment_ids: [1,2,3]
  }
  comments: {
    1: {
      id: 1,
      body: "blah blah",
      points: 50,
      commenter_id: "yaakovbeiss",
      commentable_type: "comment",
      commentable_id: "",
      comment_ids: [1,2,3]
    }

childComments(){
    return this.state.hidechild ? <div></div> :
    <CommentsIndexContainer commentIds={this.props.commentIds} />
}
```
Child comments are conditionally rendered if the user chooses to expand the child comments on a particular comment.

### Votes
Voting is another feature of imgur.com that makes it loved by its users. Users can vote on posts and comments to determine which are the best. The votes table in the database also uses a polymorphic association for votes designating posts and comments as votable, allowing users to vote on both posts and comments. The votable_id and votable_type columns identify what is being voted on. A uniqueness restraint on the database prevents a user from voting twice on the same post/comment.  

### Features to be implemented soon
Users will be able to view all their own posts on a user home page, along with all the comments they've made on other posts/comments. Rankings will be listed for the user with the most points accumulated from votes on posts and comments.
