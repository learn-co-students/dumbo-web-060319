class SnacksController < ApplicationController

  def index
    if authenticated? # see application_controller.rb
      snacks = Snack.all
      render json: snacks
    else
      tell_user_to_go_away! # see application_controller.rb
    end
  end

  # Creating a Snack_User
  # def snack_user
    # if authenticated?
      # UserSnack.create(user: user_who_is_logged_in, snack_id: params[:id])
      ## user_who_is_logged_in.user_snacks.create(snack_id: 2)
    # end
  # end


end
