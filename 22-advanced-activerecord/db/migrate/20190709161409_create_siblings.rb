class CreateSiblings < ActiveRecord::Migration[5.2]
  def change
    create_table :siblings do |t|
      t.integer :younger_id
      t.integer :older_id

      t.timestamps
    end
  end
end
