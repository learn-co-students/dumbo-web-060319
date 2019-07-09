class Doctor < ApplicationRecord
  has_many :appts, class_name: "Appointment", foreign_key: "doctor_id", inverse_of: :doctor
  has_many :people_i_treated, through: :appts, source: :patient

  has_many :prescrips, class_name: "Prescription"
  has_many :people_i_drugged, through: :prescrips, source: :person

    # ----
  # has_many :appointments
  # has_many :patients, through: :appointments

  # has_many :prescriptions
  # has_many :people_i_drugged, through: :prescriptions, source: :person
end
