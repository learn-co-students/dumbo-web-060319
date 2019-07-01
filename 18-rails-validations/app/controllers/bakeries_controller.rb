class BakeriesController < ApplicationController
  before_action :find_bakery, only: [:show, :edit, :update, :destroy]

  def index
    @bakeries = Bakery.all
  end

  def show
    # @reviewz = @bakery.reviews
  end

  def new
    @bakery = Bakery.new
  end

  def create
    @bakery = Bakery.create(bakery_params)
    redirect_to bakery_path(@bakery)
  end

  def edit
  end

  def update
    @bakery.update(bakery_params)
    redirect_to bakery_path(@bakery)
  end

  def destroy
    @bakery.destroy
    redirect_to bakeries_path
  end

  private

  def bakery_params
    params.require(:bakery).permit(:name, :address)
  end

  def find_bakery
    @bakery = Bakery.find(params[:id])
  end
end
