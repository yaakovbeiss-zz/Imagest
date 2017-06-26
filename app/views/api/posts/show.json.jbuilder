json.extract! @post, :id, :title, :account_id, :description, :created_at, :updated_at

json.images @post.images do |image|
  json.url image.image.url
  json.title image.title
  json.description image.description
end
