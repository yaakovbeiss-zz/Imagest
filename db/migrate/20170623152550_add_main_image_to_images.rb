class AddMainImageToImages < ActiveRecord::Migration[5.0]
  def change
    add_column :images, :main_image, :boolean, default: true
  end
end
