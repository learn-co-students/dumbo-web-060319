class CreateStudentDreams < ActiveRecord::Migration

  def change
    create_table :student_dreams do |t|
      t.integer :student_id
      t.references :dream
    end
  end
  
end
