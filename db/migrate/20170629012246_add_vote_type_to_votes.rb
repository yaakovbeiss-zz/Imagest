class AddVoteTypeToVotes < ActiveRecord::Migration[5.0]
  def change
    add_column :votings, :vote_type, :string, null: false
  end
end
