import React from 'react';
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import BookList from './components/BookList'

class App extends React.Component{
  state = {
    books: []
  };

  fetchBooks = (query) => {
    const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?'
    fetch(BASE_URL + query)
      .then(res => res.json())
      .then(books => this.setState({books: books.items}));
  }

  render(){
    return (
      <main className='App'>
        <Header />
        <SearchBar 
          fetchBooks = {(query) => (this.fetchBooks(query))}
        />
        <BookList books={this.state.books}/>
      </main>
    );
  }
}

export default App;