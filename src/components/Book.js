import React from "react";

function Book(props){
  let book = props.book
  return(
    <div className="book">
      <h2>{book.volumeInfo.title}</h2>
      <img src={book.volumeInfo.imageLinks.thumbnail} alt="thumbnail"></img>
      <div className="book-info">
        
      </div>
    </div>
  )
}

export default Book