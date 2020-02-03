import React from "react";

import "../styles/Book.css";

function Book(props) {
  let book = props.book;
  return (
    <div className="book" onClick={(event) => {
      window.open(book.volumeInfo.infoLink);
    }}>
      <h2>{book.volumeInfo.title}</h2>
      <div className="info-container">
        <img src={book.volumeInfo.imageLinks.thumbnail} alt="thumbnail"></img>
        <div className="info">
          <p>Author: {book.volumeInfo.authors}</p>
          <p>
            Price:
            {book.saleInfo.listPrice
              ? " $" + book.saleInfo.listPrice.amount
              : " Not for sale!"}
          </p>
          <p>
            {book.searchInfo
              ? book.searchInfo.textSnippet
              : "No description found"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Book;
