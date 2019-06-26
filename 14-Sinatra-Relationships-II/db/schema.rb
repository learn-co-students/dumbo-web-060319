# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20190626175608) do

  create_table "dreams", force: :cascade do |t|
    t.string  "name"
    t.integer "intensity"
  end

  create_table "student_dreams", force: :cascade do |t|
    t.integer "student_id"
    t.integer "dream_id"
  end

  create_table "students", force: :cascade do |t|
    t.string  "name"
    t.integer "age"
    t.string  "anxiety"
  end

end
