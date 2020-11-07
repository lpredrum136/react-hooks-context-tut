import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { BookContext } from '../contexts/BookContext'

const BookList = () => {
  // Load context
  const context = useContext(ThemeContext)
  const { isLightTheme, light, dark } = context

  const books = useContext(BookContext)

  // Decide theme
  const bookListTheme = isLightTheme ? light : dark
  const { syntax, ui, bg } = bookListTheme

  const bookListStyle = {
    color: syntax,
    background: bg
  }

  const singleBookStyle = {
    background: ui
  }

  return (
    <div className="book-list" style={bookListStyle}>
      <ul>
        {books.map(book => (
          <li key={book.id} style={singleBookStyle}>
            {book.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BookList
