@App = {}
App.cable = Cable.createConsumer "ws://" + location.hostname + ":" + location.port + "/websocket"

App.cable.subscriptions.create "BookNotificationsChannel",
  received: (data) ->
    id      = data.book.id;
    html    = data.html;
    element = $("#book-#{id}")

    switch data.action
      when "created"
        $("#books tbody").append(html);
      when "destroyed"
        element.remove();
      when "updated"
        element.replaceWith(html);
