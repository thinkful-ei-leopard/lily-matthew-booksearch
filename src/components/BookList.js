import React from 'react'
import Book from './Book'

function BookList(props){
  const books = props.books.map((book, index) => <Book book={book} key={index}/>)
  return(
    <div className="book-list">
      <ul>
        {books}
      </ul>
    </div>
  )
}

export default BookList