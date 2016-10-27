class Api::ListingsController < ApplicationController

  def index
    @listings = Listing.all
    render json:@listings
  end

  def create
    @listing = Listing.new(listing_params)
    if @listing.save
      render json: @listing
    end

    head :ok

  end

  private
    def listing_params
      json_params = params.require(:listing)
      JSON.parse(json_params)
    end

end
