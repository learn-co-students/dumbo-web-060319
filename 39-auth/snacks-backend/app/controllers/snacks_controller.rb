class SnacksController < ApplicationController

  def index
    if authenticated? # see application_controller.rb
      snacks = Snack.all
      render json: snacks
    else
      tell_user_to_go_away! # see application_controller.rb
    end
  end


end
