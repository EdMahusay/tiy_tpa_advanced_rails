class Book extends React.Component {
  render () {
    return (
      <tr>
        <td>{this.props.title}</td>
        <td>{this.props.pages}</td>
        <td>
          <i className={`fa fa-check book-approved-${this.props.approved}`}></i>
        </td>
        <td><a href={`/books/${this.props.id}`}>Show</a></td>
        <td><a href={`/books/${this.props.id}/edit`}>Edit</a></td>
        <td><a data-method="delete" data-confirm="Sure you want to delete" href={`/books/${this.props.id}`}>Destroy</a></td>
      </tr>
    );
  }
}

Book.propTypes = {
  id: React.PropTypes.number,
  title: React.PropTypes.string,
  pages: React.PropTypes.number,
  approved: React.PropTypes.bool
};

