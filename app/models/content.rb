class Content < ApplicationRecord

  belongs_to :user

  validates :text, :image, :prefectues, :title, presence: true
  mount_uploader :image, ImageUploader
  
end
