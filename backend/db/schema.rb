# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2023_03_30_193829) do

  create_table "shoes", force: :cascade do |t|
    t.string "model"
    t.float "size"
    t.string "brand"
    t.float "price"
    t.string "image"
    t.integer "user_id"
  end

  create_table "transactions", force: :cascade do |t|
    t.integer "user_id"
    t.integer "shoe_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "password_digest"
  end

end
