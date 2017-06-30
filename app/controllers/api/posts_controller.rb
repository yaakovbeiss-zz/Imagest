class Api::PostsController < ApplicationController

  def create

    @post = Post.new(post_params)
    @post.account_id = current_user.id

    if @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def index
    @posts = Post.includes(:comments, :votes, :upvotes, :downvotes, :main_image).all
  end

  def show
    
    @post = Post.includes(:comments, :all_comments, :votes, :upvotes, :downvotes, :main_image).find(params[:id])
    render :show
  end

  def destroy
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:title, :description)
  end
end
