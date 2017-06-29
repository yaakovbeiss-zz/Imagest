class Post < ActiveRecord::Base

  validates :title, :account, presence: true

  has_many :upvotes, -> { where vote_type: 'Upvote' }, as: :votable, class_name: 'Vote'
  has_many :downvotes, -> { where vote_type: 'Downvote' }, as: :votable, class_name: 'Vote'

  belongs_to :account
  has_many :all_comments,
    class_name: :Comment

  has_many :images
  has_many :comments, as: :commentable, dependent: :destroy

  has_one :main_image,
  -> { where main_image: true },
    class_name: 'Image',
    foreign_key: :post_id


end
