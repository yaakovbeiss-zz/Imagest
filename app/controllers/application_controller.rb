class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :signed_in?

  def current_user
    @current_user ||= Account.find_by(session_token: session[:session_token])
  end

  def sign_in(account)
    @current_user = account
    session[:session_token] = account.reset_session_token
  end

  def sign_out
    @current_user.try(:reset_session_token)
    session[:session_token] = nil
  end

  def signed_in?
    !!current_user
  end

  def require_signed_in
    redirect_to new_session_url unless signed_in?
  end

end
