class AccountsController < ApplicationController

  def new
  end

  def create
    @account = Account.new(account_params)
    if @account.save
      sign_in(@account)
      redirect_to tweets_url
    else
      flash[:errors] = ["invalid input"]
      render :new
    end
  end


  def account_params
    params.require(:account).permit(:username, :password)
  end


end
