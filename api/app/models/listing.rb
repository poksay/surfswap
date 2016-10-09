class Listing < ApplicationRecord
  validates :name, :picture, :price, :presence => true
end
