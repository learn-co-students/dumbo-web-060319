class TokensController < ApplicationController

  def create
    # byebug
    user = User.find_by("lower(username) = ?", params[:username].downcase)
    if user && user.authenticate(params[:password])
      render json: auth_response_json(user) # see application_controller.rb
    else
      render json: { errors: [ "That didn't match any users WE know about 💁" ] }
    end
  end

  def persist
    if authenticated?
      render json: auth_response_json(user_who_is_logged_in)
    else
      tell_user_to_go_away!
    end
  end


end
