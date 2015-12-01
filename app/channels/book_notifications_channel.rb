class BookNotificationsChannel < ApplicationCable::Channel
  def subscribed
    stream_from "book_notifications"
  end
end

