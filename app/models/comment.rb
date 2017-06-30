class Comment < ActiveRecord::Base
  validates :body, :commenter_id, :commentable_id, :commentable_type, :post_id, presence: true

  has_many :upvotes, -> { where vote_type: 'Upvote' }, as: :votable, class_name: 'Vote'
  has_many :downvotes, -> { where vote_type: 'Downvote' }, as: :votable, class_name: 'Vote'
  
  belongs_to :commentable, polymorphic: true

  belongs_to :post

  belongs_to :account,
    foreign_key: :commenter_id

  has_many :child_comments,
   class_name: :Comment,
   as: :commentable, dependent: :destroy

end
