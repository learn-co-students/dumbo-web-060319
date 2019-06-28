class BreadsController < ApplicationController

  def index
    @breads = Bread.all
    # render :index
  end

  def show
    # byebug
    @bread = Bread.find(params[:id])
  end

end
