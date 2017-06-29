class CreateVotings < ActiveRecord::Migration[5.0]
  def change
    create_table :votings do |t|
      t.integer :voter_id, null: false
      t.integer :votable_id, null: false
      t.string :votable_type, null: false
      t.timestamps
    end
  end
end
