class RemovePointsAndVotesFromPostsAndComments < ActiveRecord::Migration[5.0]
  def change
    remove_column :posts, :upvotes
    remove_column :posts, :downvotes
    remove_column :comments, :points
  end
end
