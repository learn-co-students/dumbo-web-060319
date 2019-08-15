class User < ApplicationRecord

  has_many :users_snacks
  has_many :snacks, through: :users_snacks
  
  has_secure_password


  def serializable_hash(opts)
    super(opts.merge(only: [:id, :username, :snacks]))
  end

end
