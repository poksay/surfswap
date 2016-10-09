class Api::ListingsController < ApplicationController
  def index
    @listings = Listing.all
    render json:@listings
  end

  def create
    @listing = Listing.create(listing_params)

    if @listing.save
      render json: @listing
    end

    head :ok
    
  end

  private
    def listing_params
      params.require(:listing).permit(:name, :price, :picture) if params[:listing]
    end

end
