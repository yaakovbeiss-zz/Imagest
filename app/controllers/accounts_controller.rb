class AccountsController < ApplicationController

  def new
  end

  def create
    @account = Account.new(account_params)
    if @account.save
      sign_in(@account)
      render :show
    else
      render :show
    end
  end


  def account_params
    params.require(:account).permit(:username, :password)
  end


end
