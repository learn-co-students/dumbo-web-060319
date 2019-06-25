require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/" do
    # "<h1>¡¡¡Turn up!!! Don't go json waterfalls. 💦</h1> <p> Welcome to DGJSONW's homepage!</p>"
    erb :welcome
  end

  # Index Action
  get '/students' do
    @studs = Student.all
    @tagline = "Don't Go JSON Waterfalls. 💦"
    # binding.pry
    erb :index
  end

  get '/students/new' do
    erb :new
  end

  post '/students' do
    # binding.pry
    @student = Student.create(params)
    # erb :show
    redirect to "/students/#{@student.id}"
  end

  get "/students/:id" do
    # binding.pry
    @student = Student.find(params[:id])
    erb :show
  end











end
