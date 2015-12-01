class Books extends React.Component {
  get books() {
    return this.props.books.map(
      (book) =>
        <Book key={`book-${book.id}`}
              id={book.id}
              title={book.title}
              pages={book.pages}
              approved={book.approved}/>
    )
  }

  render() {
    return (
      <div className="table-responsive">
        <table className="table table-striped table-bordered table-hover" id="books">
          <thead>
            <tr>
              <th>Title</th>
              <th>Pages</th>
              <th>Approved</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.books}
          </tbody>
        </table>
      </div>
    );
  }
}
