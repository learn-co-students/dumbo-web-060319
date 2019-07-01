class Bakery < ApplicationRecord
  has_many :reviews, dependent: :destroy
  has_many :breads, through: :reviews

  def address_name
    "#{self.name} - #{self.address}"
  end

end
