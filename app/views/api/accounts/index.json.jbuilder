json.array! @accounts do |account|
  json.id account.id
  json.username account.username
  json.points account.points
end
