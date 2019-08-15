class TokensController < ApplicationController

  def create
    user = User.find_by("lower(username) = ?", params[:username].downcase)
    if user && user.authenticate(params[:password])
      render json: auth_response_json(user) # see application_controller.rb
    else
      render json: { errors: [ "That didn't match any users WE know about 💁" ] }
    end 
  end


end
