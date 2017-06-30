class Api::AccountsController < ApplicationController

  def create
    @account = Account.new(account_params)
    if @account.save
      login(@account)
      render :show
    else
      render json: @account.errors.full_messages, status: 422
    end
  end

  def show
    @account = Account.find(params[:id])
  end

  private

  def account_params
    params.require(:account).permit(:username, :email, :password)
  end


end
