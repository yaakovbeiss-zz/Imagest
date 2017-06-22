class CreatePosts < ActiveRecord::Migration[5.0]
  def change
    create_table :posts do |t|
      t.string :title, null: false
      t.text :description
      t.integer :upvotes, default: 0
      t.integer :downvotes, default: 0
      t.integer :author_id, null: false
    end
    add_index :posts, :title
    add_index :posts, :author_id
  end
end
