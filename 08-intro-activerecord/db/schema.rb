# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_06_17_140817) do

  create_table "pokeballs", force: :cascade do |t|
    t.integer "trainer_id"
    t.integer "pokemon_id"
    t.string "nickname"
  end

  create_table "pokemons", force: :cascade do |t|
    t.string "name"
    t.string "element_type"
    t.string "attack"
    t.string "next_evolution_form"
    t.integer "weight"
    t.integer "level"
  end

  create_table "trainers", force: :cascade do |t|
    t.string "name"
    t.integer "badge_count"
  end

end
