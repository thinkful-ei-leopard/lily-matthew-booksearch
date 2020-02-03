import React from 'react';
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import BookList from './components/BookList'

import './styles/App.css'

class App extends React.Component{
  state = {
    books: [],
    error: null
  };

  fetchBooks = (query) => {
    const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?'
    fetch(BASE_URL + query)
      .then(res => {
        if(res.ok) {
          return res.json();
        }
        return Promise.reject('Error handling search request')
      })
      .then(books => this.setState({books: books.items}))
      .catch(error => {
        this.setState({error: error.message})
      });
  }

  render(){
    return (
      <main className='App'>
        <Header />
        <SearchBar 
          fetchBooks = {(query) => (this.fetchBooks(query))}
        />
        {this.state.error ? <div className='error'>{this.state.error}</div> : ''}
        <BookList books={this.state.books}/>
      </main>
    );
  }
}

export default App;