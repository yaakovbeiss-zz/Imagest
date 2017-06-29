# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

Account.destroy_all
Post.destroy_all
Image.destroy_all
Vote.destroy_all
#
guest = Account.create!({username: 'guest', password: 'password'})
#
# post = Post.create!({title: 'seeded post', account_id: guest.id})
#
# image = Image.create!({title: 'seeded image', post_id: post.id})

# e = Account.create!({username: Faker::Name.name, password: 'password'})
# f = Post.create!({title: Faker::ChuckNorris.fact, description: Faker::ChuckNorris.fact, account_id: e.id})
# g = Image.create!({title: Faker::Friends.quote, post_id: f.id, image: Giphy.trending(limit: 1)})

25.times do
  a = Account.create!({username: Faker::Name.name, password: 'password'})
  ab = Account.create!({username: Faker::Name.name, password: 'password'})
  ac = Account.create!({username: Faker::Name.name, password: 'password'})
  b = Post.create!({title: Faker::ChuckNorris.fact, description: Faker::ChuckNorris.fact, account_id: a.id})
  c = Image.create!({title: Faker::Friends.quote, post_id: b.id, image: Faker::LoremPixel.image })
  c = Image.create!({title: Faker::Friends.quote, post_id: b.id, image: Faker::LoremPixel.image, main_image: false })
  d = Comment.create!({body: Faker::Friends.quote, post_id: b.id, commenter_id: a.id, commentable_id: b.id, commentable_type: 'Post'})
  d = Comment.create!({body: Faker::Friends.quote, post_id: b.id, commenter_id: a.id, commentable_id: d.id, commentable_type: 'Comment'})

  Vote.create!({voter_id: a.id, votable_id: b.id, votable_type: 'Post', vote_type: 'Upvote'})
  Vote.create!({voter_id: ab.id, votable_id: b.id, votable_type: 'Post', vote_type: 'Upvote'})
  Vote.create!({voter_id: a.id, votable_id: d.id, votable_type: 'Comment', vote_type: 'Upvote'})
  Vote.create!({voter_id: ab.id, votable_id: d.id, votable_type: 'Comment', vote_type: 'Upvote'})


  Vote.create!({voter_id: ac.id, votable_id: b.id, votable_type: 'Post', vote_type: 'Downvote'})
  Vote.create!({voter_id: ac.id, votable_id: d.id, votable_type: 'Comment', vote_type: 'Downvote'})

end
