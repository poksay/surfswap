class ListingsController < ApplicationController
  def index
    @listings = Listings.all
    return @listing.to_json
  end
end
