import React from 'react';
import { connect } from 'react-redux';


class BookList extends React.Component{
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item"> {book.title }</li>
      );
    }); 
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // Whatever gets returned will show up as props inside of BookList
  return {
    books: state.books
  };
}

export default connect(mapStateToProps)(BookList);

// 'Connect' takes a function and a component and creates a container
// A Container is aware of the state stored in Redux
