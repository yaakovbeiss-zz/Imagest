class AddMoreTimeStampsToAccountsAndPosts < ActiveRecord::Migration[5.0]
  def change
    add_column :accounts, :updated_at, :datetime
    add_column :posts, :created_at, :datetime

  end
end
