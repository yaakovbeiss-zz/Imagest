class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def index
    @comments = Comment.all

  end

  def show
    @comment = Comment.find(params[:id])
  end

  def destroy
    @comment = Comment.find(params[:id])
  end

  def comment_params
    params.require(:comment).permit(:body, :commenter_id, :commentable_id, :commentable_type, :post_id)
  end
end
