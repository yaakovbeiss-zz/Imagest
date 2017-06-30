json.extract! comment, :id, :body, :commenter_id, :commentable_type, :commentable_id
json.username comment.account.username
json.points comment.upvotes.count - comment.downvotes.count
json.comment_ids comment.child_comments.map { |child_comment| child_comment.id }

if current_user
  vote = Vote.all.find_by(voter_id: current_user.id, votable_id: comment.id)
  if vote
    json.voted true
    json.vote vote
  else
    json.voted false
  end
end
