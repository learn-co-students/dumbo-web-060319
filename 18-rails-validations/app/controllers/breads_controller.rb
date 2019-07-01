class BreadsController < ApplicationController
  before_action :find_bread, only: [:show, :edit, :update, :destroy]

  def index
    if params[:search_term]
      @breads = Bread.where(name: params[:search_term])
      # @breads = Bread.where("name like ?", "%#{params[:search_term]}%")
    else
      @breads = Bread.all
    end
    # render :index
  end

  def show
    # byebug
  end

  def new
    @bread = Bread.new
  end

  def create
    # byebug
    @bread = Bread.create(bread_params)

    ## Pick your poison
    # redirect_to @bread
    redirect_to bread_path(@bread)
    # redirect_to "/breads/#{@bread.id}"
  end

  def edit
  end

  def update
    @bread.update(bread_params)
    redirect_to bread_path(@bread)
  end

  def destroy
    @bread.destroy
    redirect_to breads_path
  end

  private

  def find_bread
    @bread = Bread.find(params[:id])
  end

  def bread_params
    return params.require(:bread).permit(:name, :flavor, :price)
  end

end
