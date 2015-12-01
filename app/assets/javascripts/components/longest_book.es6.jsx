class LongestBook extends React.Component {
  get longest_book_title() {
    let sorted_books = this.props.books.sort((a,b) => { return b.pages - a.pages });

    if (sorted_books.length > 0)
    {
      return sorted_books[0].title;
    }
    else
    {
      return "N/A";
    }
  }

  render () {
    return (
      <div>{this.longest_book_title}</div>
    );
  }
}

