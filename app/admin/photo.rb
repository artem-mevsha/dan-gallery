ActiveAdmin.register Photo do


  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # permit_params :list, :of, :attributes, :on, :model
  #
  # or
  #
  # permit_params do
  #   permitted = [:permitted, :attributes]
  #   permitted << :other if resource.something?
  #   permitted
  # end

  index do
    column :title
    column :description
    column :published
    column :category
    column :image do |image|
      image_tag image.image_url(:thumb)
    end
    actions
  end

  index as: :grid, default: true, columns: 5 do |photo|
    link_to image_tag(photo.image_url(:thumb)), edit_admin_photo_path(photo)
  end

  controller do

    def update
      update! do |format|
        format.html { redirect_to collection_path } if resource.valid?
      end
    end

    def create
      create! do |format|
        format.html { redirect_to collection_path } if resource.valid?
      end
    end

  end

  permit_params :title, :description, :category_id, :image, :published
end
