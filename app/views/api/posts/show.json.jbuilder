json.extract! @post, :id, :title, :account_id, :description, :comments, :created_at, :updated_at

json.images @post.images do |image|
  json.id image.id
  json.url image.image.url
  json.title image.title
  json.description image.description
end
