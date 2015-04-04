class Photo < ActiveRecord::Base
  validates :title, presence: true
  validates :category_id, presence: true
  validates :image, presence: true

  belongs_to :category

  # attr_accessible :title, :description, :category_id, :image, :published
  mount_uploader :image, PhotoUploader

  scope :published, -> { where(published: true) }

end
