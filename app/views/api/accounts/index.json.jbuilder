@accounts.each do |account|
  json.set! account.id do
    json.id account.id
    json.username account.username
    json.points account.points
  end
end
