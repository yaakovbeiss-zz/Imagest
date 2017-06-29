json.extract! comment, :id, :body, :commenter_id, :commentable_type, :commentable_id
json.comment_ids comment.child_comments.map { |child_comment| child_comment.id }
