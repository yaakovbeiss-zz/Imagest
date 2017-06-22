class Post < ActiveRecord::Base

  validates :title, :account, presence: true

  belongs_to :account
  has_many :images
  has_many :comments


end
