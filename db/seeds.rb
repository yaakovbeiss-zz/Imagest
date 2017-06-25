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
Image.delete_all
#
# guest = Account.create!({username: 'yaakovbeiss', password: 'password'})
#
# post = Post.create!({title: 'seeded post', account_id: guest.id})
#
# image = Image.create!({title: 'seeded image', post_id: post.id})

25.times do
  a = Account.create!({username: Faker::Name.name, password: 'password'})
  b = Post.create!({title: Faker::ChuckNorris.fact, account_id: a.id})
  c = Image.create!({title: Faker::Friends.quote, post_id: b.id, image: Faker::LoremPixel.image })
end
