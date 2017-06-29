class Comment < ActiveRecord::Base
  validates :body, :commenter_id, :points, :commentable_id, :commentable_type, :post_id, presence: true

  belongs_to :commentable, polymorphic: true
  belongs_to :post

  has_many :child_comments,
   class_name: :Comment,
   as: :commentable, dependent: :destroy

end
