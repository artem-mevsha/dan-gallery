class PhotosController < ApplicationController
  def index
    @categories = Category.all
    @photos = Category.find(1).photos.published.order(id: :desc)

  end

  def show
    @photo = Photo.find(params[:id])
  end
end
