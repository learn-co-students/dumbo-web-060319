class ReviewsController < ApplicationController

  def new
    @review = Review.new
    @bakeries = Bakery.all
    @breads = Bread.all
  end

  def create
    # byebug
    @review = Review.create(review_params)
    redirect_to bakery_path(@review.bakery)
  end

  def edit
    @review = Review.find(params[:id])
    @bakeries = Bakery.all
    @breads = Bread.all
  end

  def update
    @review = Review.find(params[:id])
    @review.update(review_params)
    redirect_to bakery_path(@review.bakery)
  end

  def destroy
    @review = Review.find(params[:id])
    @bakery = @review.bakery
    @review.destroy
    redirect_to bakery_path(@bakery)
  end

  private

  def review_params
    return params.require(:review).permit(:content, :bakery_id, :bread_id)
  end

end
