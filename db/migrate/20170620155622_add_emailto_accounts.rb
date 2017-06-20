class AddEmailtoAccounts < ActiveRecord::Migration[5.0]
  def change
    add_column :accounts, :email, :string
  end
end
