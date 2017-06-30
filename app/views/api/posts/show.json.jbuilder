json.post do
  json.extract! @post, :id, :title, :account_id, :description, :created_at, :updated_at
  json.username @post.account.username
  json.upvotes @post.upvotes.count
  json.donwvotes @post.downvotes.count
  json.points @post.upvotes.count - @post.downvotes.count

  if current_user
    vote = Vote.all.find_by(voter_id: current_user.id, votable_id: @post.id)
    if vote
      json.voted true
      json.vote vote
    else
      json.voted false
    end
  end
  json.images @post.images do |image|
    json.id image.id
    json.url image.image.url
    json.title image.title
    json.description image.description
  end
  json.comment_ids @post.comments.map { |comment| comment.id }
end

json.comments do
  @post.all_comments.map do |comment|
    json.set! comment.id do
      json.partial! 'api/comments/show', comment: comment
    end
  end
end
