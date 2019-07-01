class CreateBreads < ActiveRecord::Migration[5.2]
  def change
    create_table :breads do |t|
      t.string :name
      t.string :flavor

      t.timestamps
    end
  end
end
