window.app = {
  cable: Cable.createConsumer("ws://" + location.hostname + ":" + location.port + "/websocket")
};

window.app.cable.subscriptions.create("BookNotificationsChannel",
    {
      received: (data) =>
                  ReactDOM.render(
                    <App books={data.books}/>,
                    document.getElementById('app')
                  )
    }
);

