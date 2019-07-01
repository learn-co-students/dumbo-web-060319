class Bread < ApplicationRecord
  has_many :reviews, dependent: :destroy
  has_many :bakeries, through: :reviews
end
