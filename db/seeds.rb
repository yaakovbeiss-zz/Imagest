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

guest = Account.create!({username: 'guest', password: 'password'})


25.times do
  a = Account.create!({username: Faker::Name.name, password: 'password'})
  ab = Account.create!({username: Faker::Name.name, password: 'password'})
  ac = Account.create!({username: Faker::Name.name, password: 'password'})
  b = Post.create!({title: Faker::ChuckNorris.fact, description: Faker::ChuckNorris.fact, account_id: a.id})
  c = Image.create!({title: Faker::ChuckNorris.fact, post_id: b.id, image: Faker::LoremPixel.image })
  c = Image.create!({title: Faker::ChuckNorris.fact, post_id: b.id, image: Faker::LoremPixel.image, main_image: false })
  d = Comment.create!({body: Faker::ChuckNorris.fact, post_id: b.id, commenter_id: a.id, commentable_id: b.id, commentable_type: 'Post'})
  d = Comment.create!({body: Faker::ChuckNorris.fact, post_id: b.id, commenter_id: a.id, commentable_id: d.id, commentable_type: 'Comment'})

  Vote.create!({voter_id: a.id, votable_id: b.id, votable_type: 'Post', vote_type: 'Upvote'})
  Vote.create!({voter_id: ab.id, votable_id: b.id, votable_type: 'Post', vote_type: 'Upvote'})
  Vote.create!({voter_id: a.id, votable_id: d.id, votable_type: 'Comment', vote_type: 'Upvote'})
  Vote.create!({voter_id: ab.id, votable_id: d.id, votable_type: 'Comment', vote_type: 'Upvote'})


  Vote.create!({voter_id: ac.id, votable_id: b.id, votable_type: 'Post', vote_type: 'Downvote'})
  Vote.create!({voter_id: ac.id, votable_id: d.id, votable_type: 'Comment', vote_type: 'Downvote'})

end
