class Comment < ActiveRecord::Base
  validates :body, :commenter_id, :points, :commentable_id, :commentable_type, presence: true

  belongs_to :commentable, polymorphic: true

  has_many :child_comments,
   class_name: :Comment,
   as: :commentable, dependent: :destroy

end
