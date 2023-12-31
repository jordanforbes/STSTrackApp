# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_07_24_213851) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "adminpack"
  enable_extension "plpgsql"

  create_table "sts_runs", id: :serial, force: :cascade do |t|
    t.string "character", limit: 100
    t.integer "floor"
    t.boolean "victory", default: false
    t.string "killed_by"
    t.integer "ascension", default: 0
    t.integer "gold", default: 0
    t.integer "max_hp", default: 0
    t.jsonb "damage_taken", default: []
    t.text "master_deck", default: "[]"
    t.text "relics", default: "[]"
    t.string "seed"
    t.boolean "heart_kill", default: false
    t.bigint "local_time"
    t.string "play_id"
    t.string "run_id"
    t.text "notes"
    t.check_constraint "ascension >= 0 AND ascension <= 20", name: "check_ascension_range"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
