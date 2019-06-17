class Pokemon < ActiveRecord::Base
  has_many :pokeballs
  has_many :trainers, through: :pokeballs
end