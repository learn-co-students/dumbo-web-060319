class Prescription < ApplicationRecord
  belongs_to :physician, class_name: "Doctor", foreign_key: "doctor_id"
  belongs_to :person, class_name: "Patient", foreign_key: "patient_id", touch: true
  # belongs_to :doctor
  # belongs_to :patient
end
