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

ActiveRecord::Schema.define(version: 20170623161342) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "accounts", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.string   "email"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["username"], name: "index_accounts_on_username", unique: true, using: :btree
  end

  create_table "images", force: :cascade do |t|
    t.integer  "post_id",                           null: false
    t.string   "title",                             null: false
    t.text     "description"
    t.datetime "created_at",                        null: false
    t.datetime "updated_at",                        null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.boolean  "main_image",         default: true
    t.index ["post_id"], name: "index_images_on_post_id", using: :btree
  end

  create_table "posts", force: :cascade do |t|
    t.string   "title",                   null: false
    t.text     "description"
    t.integer  "upvotes",     default: 0
    t.integer  "downvotes",   default: 0
    t.integer  "account_id",              null: false
    t.datetime "updated_at"
    t.datetime "created_at"
    t.index ["account_id"], name: "index_posts_on_account_id", using: :btree
    t.index ["title"], name: "index_posts_on_title", using: :btree
  end

end
