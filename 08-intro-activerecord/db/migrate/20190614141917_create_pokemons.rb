class CreatePokemons < ActiveRecord::Migration[5.2]
  def change
    create_table :pokemons do |table|
      table.string :name
      table.string :element_type
      table.string :attack
      table.string :next_evolution_form
      
      table.integer :weight
      table.integer :level
    end
  end
end

bulb = Pokemon.new({name: "Bulbasaur", element_type: "grass", attack: "razorleaf 🍃🍃", next_evolution_form: "Ivysaur", weight: 6, level: 12 })
mewtwo = Pokemon.new({name: "Mewtwo", element_type: "psychic", attack: "shadowball 🔮🔮", next_evolution_form: "n/a", weight: 100, level: 269 })

