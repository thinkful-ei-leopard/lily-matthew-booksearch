import React from 'react'

export default class SearchBar extends React.Component {
  render(){
    return(
      <div className="search-container">
        <form className="search-book-form" onSubmit={(event) => {
          event.preventDefault();
          let searchWord = `q=${document.getElementById("search").value}`
          let printType = `printType=${document.getElementById("print-type").value}`
          let filter = `fiter=${document.getElementById("book-type").value}`
          let query = `${searchWord}&${printType}&${filter}`
          this.props.fetchBooks(query)
        }}>
          <label htmlFor="search">Search:</label>
          <input 
            type="text"
            name="search"
            id="search"
            placeholder="henry"
            />
          <button type="submit">Search</button>
          <label htmlFor="print-type">Print Type:</label>
          <select id="print-type">
            <option value="all">All</option>
            <option value="books">Books</option>
            <option value="magazines">Magazines</option>
          </select>
          <label htmlFor="book-type">Book Type:</label>
          <select id="book-type">
            <option value="ebooks">eBooks</option>
            <option value="free-ebooks">Free eBooks</option>
            <option value="full">Full Books</option>
            <option value="paid-ebooks">Paid eBooks</option>
            <option value="partial">Partial Books</option>
          </select>
        </form>
      </div>
    )
  }
}