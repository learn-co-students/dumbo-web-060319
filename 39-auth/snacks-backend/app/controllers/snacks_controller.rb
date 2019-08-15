class SnacksController < ApplicationController

  def index
    if authenticated?
      snacks = Snack.all
      render json: snacks
    else
      render :json => { go_away: true }, :status => :unauthorized
    end
  end


end
