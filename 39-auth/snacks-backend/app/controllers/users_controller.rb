class UsersController < ApplicationController

  def show
    user_id = params[:id]
    if authorized?(user_id)
      user = User.find(user_id)
      render json: user, include: :snacks
    else
      render :json => { go_away: true }, :status => :unauthorized
    end
  end

  def create
    user = User.create(user_params)
    if user.valid?
      token = JWT.encode({ user_id: user.id }, ENV["JWT_SECRET_KEY"], 'HS256')
      render json: { token: token, username: user.username }
    else
      render json: { errors: user.errors.full_messages }
    end 
  end

  private

  def user_params
    params.permit(:username, :password)
  end

end
