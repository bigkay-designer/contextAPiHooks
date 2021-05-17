import React, {useContext} from 'react'
import { BookContext } from '../contexts/BookContext'
import './css/main.css'

function BookList() {
    const {books, dispatch} = useContext(BookContext)
    return (
        <div className="books">
            {books.length ? (
                <ul>
                    {books.map(book => (
                        <li onClick={() => dispatch({type: 'REMOVE_BOOK', id: book.id})} key={book.id}>{book.title} <span>({book.author})</span></li>
                    ))}
                </ul>
            ): <div className="no__books"><p>no books to read.</p></div>}
        </div>
    )
}

export default BookList
