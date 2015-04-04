class CategoriesController < ApplicationController
  def index
    @categories = Category.all
    @photos = Photo.all
  end

  def show
    @categories = Category.all
    @category = Category.find(params[:id])
    @photos = @category.photos.published.order(id: :desc)
  end
end
