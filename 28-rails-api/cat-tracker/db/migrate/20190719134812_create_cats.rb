class CreateCats < ActiveRecord::Migration[5.2]
  def change
    create_table :cats do |t|
      t.string :name
      t.decimal :tail_length

      t.timestamps
    end
  end
end
