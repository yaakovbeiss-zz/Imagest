class Api::SessionsController < ApplicationController

	def create

		@account = Account.find_by_credentials(
      params[:account][:username],
      params[:account][:password]
    )

    if @account
			login(@account)
			render "api/accounts/show"
		else
			render(
        json: ["Invalid username/password combination"],
        status: 401
      )
		end
	end

	def destroy
		@account = current_user
		if @account
			logout
			render "api/accounts/show"
		else
			render(
        json: ["Nobody signed in"],
        status: 404
      )
		end
	end

  def session_params
    params.require(:account).permit(:username, :password)
  end
end
