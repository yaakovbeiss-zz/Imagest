class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  def current_user
    return nil unless session[:session_token]
    @current_user ||= Account.find_by(session_token: session[:session_token])
  end

  def login(account)
    account.reset_session_token
    session[:session_token] = account.session_token
    @current_user = account
  end

  def logout
    current_user.reset_session_token
    session[:session_token] = nil
    @current_user = nil
  end

  def logged_in?
    !!current_user
  end

  def require_logged_in
    render json: {base: ['invalid credentials']}, status: 401 if !current_user
  end

end
