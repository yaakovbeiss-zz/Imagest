json.array! @posts do |post|
  json.extract! post, :title, :account_id, :description, :created_at, :updated_at

end
