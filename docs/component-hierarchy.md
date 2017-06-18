## Component Hierarchy

1) RootContainer
  The root that renders the header, SortBar, and all the posts (PostsIndex).

2) Header
  Component that contains the SearchBar, buttons to Sign in/ Sign Up,
  a button to go to the home page, a drop down menu, and a button to
  render the NewPostModul.

3) PostShow
  Component that renders a single post, along with all of the comments
  on that post, all images associated with that post, and a form to create a new comment.

4) SortBar
  Component that allows the user to sort posts by different criteria.

5) PostsIndex/PostsIndexContainer
  Component that houses a list of all the posts.

6) PostsIndexItem
  Component that contains information (image and detail components) for a single post.

7) ImagesIndex/ImagesIndexContainer
  Component that contains all the images for a single post.

8) ImagesIndexItem
  Component that renders a single image in the ImagesIndex.

9) PostIndexItemDetails/PostIndexItemDetailsContainer
  Component that contains the details for a specific post, such as upvotes/downvotes.

10) CommentForm/CommentsFormContainer
  Component that allows the user to comment on a post.

11) CommentsIndex/CommentsIndexContainer
  Component that contains a list of all the comments for a single post.

12) CommentsIndexItem
  Component that contains a single comment for a post or comment.

13) CommentsDetail/CommentsDetailContainer
  Component that renders details about a single comment, such as upvotes/downvotes.

14) NewPostModul
  A container modul that allows the user to upload a post via a form.

15) AuthForm
  Component form that allows a user to sign in.

16) AuthForm
  Component form that allows a user to sign up.


**AuthFormContainer**
 - AuthForm
  * Sign In
  * Sign Up

**NewPostModul**
  * NewPostForm

**RootContainer** (Home Page)
  * Header
  * SortBar
  * PostsIndex
    * PostIndexItem
      * ImagesIndex
        * ImagesIndexItem
    * PostIndexItemDetails

**Header**
  * SearchBar
  - Sign In/ Sign Up
  - Imgur(home Button)
  - New Post

**PostShow**
  * PostIndexItem
    * PostIndexItemDetails
    * ImagesIndex
      * ImagesIndexItem
    * CommentForm
    * CommentsIndex
      * CommentsIndexItem
        * CommentsDetail
          * ImagesIndex  (Bonus for comments)
            * ImagesIndexItem (Bonus for comments)

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/posts" | "PostsIndex" |
| "/posts/postsId" | "PostShow" |
| "/posts/postId/images" | "ImagesIndex" |
| "/posts/postId/comments" | "CommentsIndex" |
| "/posts/postsId/comments/commentId" | "CommentDetail" |
| "/post/new/" | "NewPost" |
| "/search" | "Search" |
