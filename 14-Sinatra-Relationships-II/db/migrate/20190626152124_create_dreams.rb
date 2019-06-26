class CreateDreams < ActiveRecord::Migration

  def change
    create_table :dreams do |t|
      t.string :name
      t.integer :intensity
    end
  end

end
