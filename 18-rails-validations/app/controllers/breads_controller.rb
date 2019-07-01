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
    if @bread.valid?
      redirect_to bread_path(@bread)
    else
      flash[:errors] = @bread.errors.full_messages
      redirect_to new_bread_path
    end
    ## Pick your poison
    # redirect_to @bread
    # redirect_to "/breads/#{@bread.id}"
  end

  def edit
  end

  def update
    if @bread.update(bread_params)
      redirect_to bread_path(@bread)
    else
      flash[:errors] = @bread.errors.full_messages
      redirect_to edit_bread_path(@bread)
    end
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
