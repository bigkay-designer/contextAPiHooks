import React, {useState, useContext} from 'react'
import { BookContext } from '../contexts/BookContext'
import './css/main.css'

function BookForm() {
    const {dispatch} = useContext(BookContext)
    const [bookTitle, SetBookTitle] = useState('')
    const [bookAuthor, setBookAuthor] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        
        dispatch({type: 'ADD_BOOK', book: {
            title: bookTitle, author: bookAuthor
        }})
        SetBookTitle('')
        setBookAuthor('')
    }
    return (
        <div className="book__form">
            <form onSubmit={submitHandler}>
                <input onChange={(e)=> SetBookTitle(e.target.value)} type="text" placeholder="Book name" value={bookTitle} required />
                <input onChange={(e)=> setBookAuthor(e.target.value)} type="text" placeholder="Book author" value={bookAuthor} required />
                <input type="submit" value="Add Book" />
            </form>
        </div>
    )
}

export default BookForm
