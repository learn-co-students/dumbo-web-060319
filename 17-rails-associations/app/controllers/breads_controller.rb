class BreadsController < ApplicationController

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
    @bread = Bread.find(params[:id])
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
    @bread = Bread.find(params[:id])
  end

  def update
    @bread = Bread.find(params[:id])
    @bread.update(bread_params)
    redirect_to bread_path(@bread)
  end

  def destroy
    @bread = Bread.find(params[:id])
    @bread.destroy
    redirect_to breads_path
  end

  private

  def bread_params
    return params.require(:bread).permit(:name, :flavor, :price)
  end

end
