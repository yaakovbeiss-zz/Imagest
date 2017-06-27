json.array! @comments do |comment|
  json.id comment.id
  json.body comment.body
  json.points comment.points
  json.commenter_id comment.commenter_id
  json.commentable_type comment.commentable_type
  json.child_comments comment.child_comments
end
