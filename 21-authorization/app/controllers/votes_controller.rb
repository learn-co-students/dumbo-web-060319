class VotesController < ApplicationController
  before_action :authorized

  def index
    @votes = @current_user.votes
  end

  def create
      # Vote.create(color_id: params[:color_id], user_id: @user_id)
    if @can_vote
      @current_user.votes.create(color_id: params[:color_id])
    end
    redirect_to colors_path
  end

  def destroy
    @vote = @current_user.votes.find(params[:id])
    @vote.destroy
    redirect_to votes_path
  end

end
