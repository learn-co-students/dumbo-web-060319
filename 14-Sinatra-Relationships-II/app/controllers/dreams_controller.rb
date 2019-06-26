class DreamsController < ApplicationController

  get "/dreams/new" do
    @students = Student.all
    erb :"dreams/new"
  end

  get "/dreams/:id" do
    erb :"dreams/show"
  end

  post "/dreams" do
    # binding.pry
    @dream = Dream.create(params[:dream])
    redirect to "/students/#{@dream.student_id}"

    # redirect to "/students/#{@dream.student.id}"
    # redirect to "/students/#{params[:dream][:student_id]}"
  end

end
