class Api::SearchController < ApplicationController
  def index
    
    if params[:query].present?
      @posts = Post.where('lower(title) LIKE (?)', "%#{params[:query].downcase}%")
    else
      []
    end
  end

end
