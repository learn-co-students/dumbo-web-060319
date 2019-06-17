class CreatePokeballs < ActiveRecord::Migration[5.2]
  def change
    create_table :pokeballs do |t|
      t.integer :trainer_id, foreign_key: true
      t.integer :pokemon_id, foreign_key: true
      t.string  :nickname
    end
  end
end
