require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
    set :method_override, true
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

  #New Action
  get '/students/new' do
    erb :new
  end

  #Create Action
  post '/students' do
    # binding.pry
    @student = Student.create(params)
    # erb :show
    redirect to "/students/#{@student.id}"
  end

  #Show Action
  get "/students/:id" do
    # binding.pry
    @student = Student.find(params[:id])
    erb :show
  end

  #Edit Action
  get "/students/:id/edit" do
    @student = Student.find(params[:id])
    erb :edit
  end

 # OLD PARAMS
 #  {"_method"=>"PUT",
 # "name"=>"Kevin \"No\" Lai",
 # "age"=>"10",
 # "anxiety"=>"Coding Challenge",
 # "id"=>"14"}

 # NEW PARAMS
 #  {"_method"=>"PUT",
 #    student => {
 #    "name"=>"Kevin \"No\" Lai",
 #    "age"=>"10",
 #    "anxiety"=>"Coding Challenge"
 #    },
 #    "id"=>"14"
 #  }


  #Update Action
  put "/students/:id" do
    @student = Student.find(params[:id])
    @student.update(params[:student])
    redirect to "/students/#{@student.id}"
    # binding.pry
  end

  # Delete Action
  delete "/students/:id" do
    @student = Student.find(params[:id])
    @student.destroy
    redirect to "/students"
  end







end
