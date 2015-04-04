class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.string :title
      t.string :description
      t.integer :category
      t.boolean :published

      t.timestamps null: false
    end
  end
end
