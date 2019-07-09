class Sibling < ApplicationRecord
  belongs_to :younger_sibling, class_name: "Patient", foreign_key: "younger_id"
  belongs_to :older_sibling, class_name: "Patient", foreign_key: "older_id"
end
