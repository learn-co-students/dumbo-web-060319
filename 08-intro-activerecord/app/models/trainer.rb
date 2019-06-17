class Trainer < ActiveRecord::Base
  has_many :pokeballs
  has_many :pokemons, through: :pokeballs

end