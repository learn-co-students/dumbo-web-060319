class Bakery < ApplicationRecord
  has_many :reviews, dependent: :destroy
  has_many :breads, through: :reviews

  validates :name, presence: true
  validates :address, presence: true, uniqueness: true
  # validates :address, uniqueness: true

  def address_name
    "#{self.name} - #{self.address}"
  end

end
