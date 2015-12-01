class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :ensure_action_cable_identifier

  protected

  def ensure_action_cable_identifier
    cookies.signed[:uuid] ||= SecureRandom.uuid
  end
end

