class Vote < ActiveRecord::Base

validates :vote_type, :voter_id, :votable_type, presence: true
validates :voter_id, uniqueness: { scope: [:votable_id, :votable_type] }

belongs_to :voter, class_name: "Account"
belongs_to :votable, polymorphic: true

end
