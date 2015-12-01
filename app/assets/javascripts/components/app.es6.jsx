class App extends React.Component {
  render () {
    return (
        <div>
          <Books books={this.props.books}/>
          <LongestBook books={this.props.books}/>
        </div>
    );
  }
}

// TODO: Make this native JS
$(document).on("page:change", () => {
  let app_dom = document.getElementById('app');
  if (app_dom)
  {
    let books = JSON.parse(app_dom.dataset.reactProps);

    ReactDOM.render(
      <App books={books}/>,
      app_dom
    );
  }
});

