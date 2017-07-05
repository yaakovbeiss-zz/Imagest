class Account < ActiveRecord::Base

  validates :username, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_many :posts

  has_many :comments,
    class_name: 'Comment',
    foreign_key: :commenter_id

  has_many :votes,
    class_name: 'Vote',
    foreign_key: :voter_id

  def points
    (self.posts.upvotes - self.posts.downvotes) + (self.comments.upvotes - self.comments.downvotes)
  end


  after_initialize :ensure_session_token

  attr_reader :password

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(username, password)
    account = Account.find_by(username: username)

    return account if account && account.is_password?(password)
    nil
  end

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end


end
