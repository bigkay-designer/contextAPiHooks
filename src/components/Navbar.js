import React, {useContext} from 'react'
import { BookContext } from '../contexts/BookContext'
import './css/main.css'
function Navbar() {
    const {books} = useContext(BookContext)
    return (
        <div className="navbar">
            <h1>khalid Reading List</h1>
            <p>Currenlty you have {books.length} books to read</p>
        </div>
    )
}

export default Navbar
