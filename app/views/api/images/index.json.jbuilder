# Render the show page partial for all the posts in the index
json.array! @posts do |post|

  json.title post.title
  json.description post.description
  json.upvotes post.upvotes
  json.downvotes post.downvotes
  json.account_id post.account_id
  json.main_image post.main_image
  json.images post.images
end
