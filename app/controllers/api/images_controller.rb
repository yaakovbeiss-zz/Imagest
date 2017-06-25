 class Api::ImagesController < ApplicationController


  def create

    @image = Image.new(image_params)
    if @image.save
      render :show
    else
      render json: @image.errors.full_messages, status: 422
    end

  end

  def index
    @images = Image.all
  end

  def show
    @image = Image.find(params[:id])
  end

  def destroy
    @image = Image.find(params[:id])

  end

  private

  def image_params
    params.require(:image).permit(:title, :post_id, :image, :description, :main_image)
  end

end
