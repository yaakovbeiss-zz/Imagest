## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**NewPost**
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
          * ImagesIndex  (Bonus)
            * ImagesIndexItem

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
