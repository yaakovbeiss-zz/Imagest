json.array! @posts do |post|
  # json.extract! post, :id, :title, :account_id, :description, :created_at, :updated_at, :main_image
  json.id post.id
  json.title post.title
  json.created_at post.created_at
  json.image_url post.main_image.image
end
