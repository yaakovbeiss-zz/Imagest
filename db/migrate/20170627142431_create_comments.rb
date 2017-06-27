class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.string :body, null: false
      t.integer :points, default: 0
      t.integer :commenter_id, null: false
      t.integer :commentable_id, null: false
      t.string :commentable_type, null: false
      t.timestamps
    end
    add_index :comments, [:commentable_type, :commentable_id]
  end
end
