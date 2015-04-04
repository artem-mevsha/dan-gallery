class RenameCatetoryToCategoryId < ActiveRecord::Migration
  def change
    rename_column :photos, :category, :category_id
  end
end
