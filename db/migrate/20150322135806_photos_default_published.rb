class PhotosDefaultPublished < ActiveRecord::Migration
  def change
    change_column :photos, :category_id, :integer, :default => 1
    change_column :photos, :published, :boolean, :default => true
  end
end
