class AuthController < ApplicationController
  def new
  end

  def create
    @user = User.find_by(username: params[:username])
    if @user && @user.authenticate(params[:password])
      flash[:message] = "Logging in #{@user.name}."
      redirect_to colors_path
    else
      flash[:message] = "Invalid Username or Password."
      redirect_to new_auth_path
    end
  end

end
