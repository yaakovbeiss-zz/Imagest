json.extract! account, :id, :username

json.posts account.posts
json.comments account.comments
json.votes account.votes
