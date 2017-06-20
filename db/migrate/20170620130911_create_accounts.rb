class CreateAccounts < ActiveRecord::Migration[5.0]
  def change
    create_table :accounts do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
    end
    add_index :accounts, :username, unique: true
  end
end
