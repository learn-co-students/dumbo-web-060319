class CreatePrescriptions < ActiveRecord::Migration[5.2]
  def change
    create_table :prescriptions do |t|
      t.references :doctor, foreign_key: true
      t.references :patient, foreign_key: true
      t.string :medicine

      t.timestamps
    end
  end
end
