class Patient < ApplicationRecord
  has_many :prescriptions, -> {order "medicine DESC"}
  has_many :physicians, -> {order "updated_at"}, through: :prescriptions

  has_many :appointments
  has_many :doctors, -> {order "updated_at"}, through: :appointments

  has_many :i_am_older, class_name: "Sibling", foreign_key: "older_id"
  has_many :younger_siblings, through: :i_am_older, source: :younger_sibling

  has_many :i_am_younger, class_name: "Sibling", foreign_key: "younger_id"
  has_many :older_siblings, through: :i_am_younger, source: :older_sibling
end
