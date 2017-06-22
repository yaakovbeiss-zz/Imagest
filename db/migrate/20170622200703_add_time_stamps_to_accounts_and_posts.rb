class AddTimeStampsToAccountsAndPosts < ActiveRecord::Migration[5.0]
  def change
    add_column :accounts, :created_at, :datetime
    add_column :posts, :updated_at, :datetime
  end
end
