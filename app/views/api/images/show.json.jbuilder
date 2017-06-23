json.extract! @image, :id, :post_id, :title, :description, :created_at, :updated_at, :image
json.image_url asset_path(@image.image.url)
