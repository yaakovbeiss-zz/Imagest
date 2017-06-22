class RenameAuthorIdToAccountId < ActiveRecord::Migration[5.0]
  def change
    rename_column :posts, :author_id, :account_id
  end
end
