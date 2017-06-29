class Api::VotesController < ApplicationController
  def create
    vote = Vote.new(vote_params)
    vote.account_id = current_user.id

    if(vote.save)
      if vote.votable_type == "Post"
        @post = vote.votable
      else
        @post = vote.votable.post
      end
      render "api/posts/show"
    else
      @errors = vote.errors.full_messages
      render json: @vote.errors.full_messages, status: 422
    end
  end

  def update
    vote = Vote.find_by(params[:id])

    if vote.update(vote_params)
      if vote.votable_type == "Post"
        @post = vote.votable
      else
        @post = vote.votable.post
      end
      render "api/posts/show"
    else
      @errors = vote.errors.full_messages
      render json: @vote.errors.full_messages, status: 422
    end
  end

  def destroy
    vote = Vote.find_by(params[:id])

    if(vote.destroy)
      if vote.votable_type == "Post"
        @post = vote.votable
      else
        @post = vote.votable.post
      end
      render "api/posts/show"
    else
      @errors = vote.errors.full_messages
      render json: @vote.errors.full_messages, status: 422
    end
  end

  private
  def vote_params
    params.require(:vote).permit(:vote_type, :votable_id, :votable_type)
  end
end
