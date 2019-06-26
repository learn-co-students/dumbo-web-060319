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
    redirect to "/dreams/#{@dream.id}"

    # redirect to "/students/#{@dream.student.id}"
    # redirect to "/students/#{params[:dream][:student_id]}"
  end

  post "/students/:id/dreams" do
    # binding.pry
    @student = Student.find(params[:id])
    @student.student_dreams.create(dream_id: params[:dream_id])
    # StudentDream.create(student_id: params[:id], dream_id: params[:dream_id])
    redirect to "/students/#{params[:id]}"
  end








end
