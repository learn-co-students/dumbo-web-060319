class AuthController < ApplicationController
  def new
  end

  def create
    @user = User.find_by(username: params[:username])
    if @user && @user.authenticate(params[:password])
      flash[:message] = "Logging in #{@user.name}."
      session[:user_id] = @user.id
      redirect_to colors_path
    else
      flash[:message] = "Invalid Username or Password."
      redirect_to "/login"
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to colors_path
  end

end
