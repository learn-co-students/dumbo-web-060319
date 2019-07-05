class VotesController < ApplicationController

  def create

    if @can_vote
      vote_on_color
      @vote = Vote.create(color_id: params[:color_id])
      flash[:message] = "You voted on #{@vote.color.hex}!"
    else
      flash[:message] = "You're out of votes, silly."
    end
    redirect_to colors_path

  end

end
