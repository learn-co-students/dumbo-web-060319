class User < ApplicationRecord

  has_secure_password
  has_many :votes
  has_many :colors, through: :votes

  validates_uniqueness_of :username
  # validates :username, unique: true

  # def password=(plain_text_password)
  #   self.password_digest = BCrypt::Password.create(plain_text_password)
  # end
  #
  # def authenticate(plain_text_password)
  #   BCrypt::Password.new(self.password_digest) == plain_text_password
  # end

def remaining_votes
  10 - self.votes.count
end

















end
