class UsersController < ApplicationController

  def show
    user_id = params[:id]
    if authorized?(user_id) # see application_controller.rb
      user = User.find(user_id)
      render json: user, include: :snacks
    else
      tell_user_to_go_away!
    end
  end

  def create
    user = User.create(user_params)
    if user.valid?
      render json: auth_response_json(user) # see application_controller.rb
    else
      render json: { errors: user.errors.full_messages }
    end 
  end

  private

  def user_params
    params.permit(:username, :password)
  end

end
