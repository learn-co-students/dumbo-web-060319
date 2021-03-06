class User < ApplicationRecord

  has_many :users_snacks
  has_many :snacks, through: :users_snacks
  
  has_secure_password # setter for password= && User#authenticate

  validates_presence_of :username
  validates_uniqueness_of :username, :case_sensitive => false

  def serializable_hash(opts)
    super(opts.merge(only: [:id, :username, :snacks]))
  end

end
