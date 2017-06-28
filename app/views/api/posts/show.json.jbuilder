json.post do
  json.extract! @post, :id, :title, :account_id, :description, :created_at, :updated_at
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
