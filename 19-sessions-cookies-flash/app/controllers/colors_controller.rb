class ColorsController < ApplicationController
  # skip_before_action :setup_voting_stuff, only: [:index]

  def index
    # byebug
    # SETTING THE COOKIE
    # response.headers["cookie_from_server"] = "test"
    # response.headers["Set-Cookie"] = "yeet=yeetus\;"

    # PULLING THE COOKIE
    # request.headers["cookie"]

    if request.path != colors_path
      redirect_to colors_path
    end
    @colors = Color.includes(:votes).all
  end

end
