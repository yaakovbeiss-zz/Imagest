class Post < ActiveRecord::Base

  validates :title, :account, presence: true


  belongs_to :account
  has_many :images
  has_many :comments

  has_one :main_image,
  -> { where main_image: true },
    class_name: 'Image',
    foreign_key: :post_id


end
