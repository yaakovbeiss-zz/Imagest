class ChangeTableNameFromVotingsToVotes < ActiveRecord::Migration[5.0]
  def change
    rename_table :votings, :votes
  end
end
