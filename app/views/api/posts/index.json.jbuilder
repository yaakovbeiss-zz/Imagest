json.array! @posts do |post|
  json.extract! post, :id, :title, :account_id, :description, :created_at, :updated_at

end
