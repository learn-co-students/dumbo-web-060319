class StudentsController < ApplicationController

  # Index Action
  get '/students' do
    @studs = Student.all
    @tagline = "Don't Go JSON Waterfalls. 💦"
    # binding.pry
    erb :"students/index"
  end

  #New Action
  get '/students/new' do
    erb :"students/new"
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
    @dreams = Dream.all
    find_student
    erb :"students/show"
  end

  #Edit Action
  get "/students/:id/edit" do
    find_student
    erb :"students/edit"
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
    find_student
    @student.update(params[:student])
    redirect to "/students/#{@student.id}"
    # binding.pry
  end

  # Delete Action
  delete "/students/:id" do
    find_student
    @student.destroy
    redirect to "/students"
  end

  def find_student
    @student = Student.find(params[:id])
  end

end
