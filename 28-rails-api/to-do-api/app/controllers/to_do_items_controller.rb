class ToDoItemsController < ApplicationController

  def index
    @to_do_items = ToDoItem.all
    render json: @to_do_items, except: to_do_except
  end 

  def show
    @to_do_item = ToDoItem.find params[:id] 
    render json: @to_do_item, except: to_do_except
  end 

  def create
    @to_do_item = ToDoItem.create(to_do_params)
    if @to_do_item.valid?
      render json: @to_do_item
    else
      render json: { errors: @to_do_item.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private 

  def to_do_except
    [:created_at, :updated_at]
  end

  def to_do_params
    params.require(:to_do_item).permit(:title, :done)
  end

end
