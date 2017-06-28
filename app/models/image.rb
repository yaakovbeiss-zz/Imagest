class Image < ApplicationRecord

  validates :post_id, presence: true
  belongs_to :post

  has_attached_file :image, default_url: "/assets/themummy.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/






end
