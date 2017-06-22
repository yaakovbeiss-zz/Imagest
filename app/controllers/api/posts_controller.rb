class Api::PostsController < ApplicationController

  def create
    @post = Post.new(post_params)

    if @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def index
    @posts = Post.all
  end

  def show
    @post = Post.find(params[:id])
  end

  def destroy
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:title, :account_id, :description)
  end
end
