class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  def current_user
    @current_user ||= Account.find_by(session_token: session[:session_token])
  end

  def login(account)
    session[:session_token] = account.reset_session_token
    @current_user = account
  end

  def logout
    @current_user.try(:reset_session_token)
    session[:session_token] = nil
  end

  def logged_in?
    !!current_user
  end

  def require_logged_in
    redirect_to new_session_url unless logged_in?
  end

end
