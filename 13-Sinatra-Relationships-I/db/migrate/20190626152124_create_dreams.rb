class CreateDreams < ActiveRecord::Migration
  
  def change
    create_table :dreams do |t|
      t.string :name
      t.integer :intensity
      t.integer :student_id
    end
  end

end
