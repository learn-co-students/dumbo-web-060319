class ApplicationController < ActionController::Base
  before_action :setup_voting_stuff

  def setup_voting_stuff
    session["vote-count"] ||= 10
    @votes_remaining = session["vote-count"]
    @can_vote = @votes_remaining > 0
  end

  def vote_on_color
    session["vote-count"] -= 1
  end

end
