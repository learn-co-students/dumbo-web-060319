class StudentDreamsController < ApplicationController

  get "/student_dreams/new" do
    @dreams = Dream.all
    @students = Student.all
    erb :"student_dreams/new"
  end

  post "/student_dreams" do
    @sd = StudentDream.create(params[:student_dream])
    redirect to "/students/#{@sd.student_id}"
    # redirect to "/students/#{params[:student_dream][:student_id]}"
  end

end
