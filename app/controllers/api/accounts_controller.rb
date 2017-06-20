class Api::AccountsController < ApplicationController

  def create
    @account = Account.new(account_params)
    if @account.save
      login(@account)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def account_params
    params.require(:account).permit(:username, :password)
  end


end
