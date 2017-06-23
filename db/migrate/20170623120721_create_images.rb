class CreateImages < ActiveRecord::Migration[5.0]
  def change
    create_table :images do |t|
      t.integer :post_id, null: false
      t.string :image_url, null: false
      t.string :title, null: false
      t.text :description
      t.timestamps
    end
    add_index :images, :post_id
  end
end
