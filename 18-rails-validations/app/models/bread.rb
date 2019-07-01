class Bread < ApplicationRecord
  has_many :reviews, dependent: :destroy
  has_many :bakeries, through: :reviews

  validates :price, numericality: {:greater_than => 0}
  validates :name, presence: true, uniqueness: true
  validates :flavor, presence: true
  validate :name_cannot_be_ciabatta

  def name_cannot_be_ciabatta
    if name.downcase == "ciabatta"
      errors.add(:name, "cannot be Ciabatta. Nice try!")
    end
  end


end
