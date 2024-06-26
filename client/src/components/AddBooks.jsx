import React,{useState} from 'react'

import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddBooks = () => {



    const [name, setName] = useState('')
    const [author, setAuthor] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e)  => {
        e.preventDefault()
        axios.post('http://localhost:3001/books/add',{name,author,imageUrl,})
        .then(res =>{
            if(res.data.added){
                navigate('/books')

            }else{
                console.log(res) 
            }  
           
            

        })
        .catch(err => console.log(err))
    }
    return (
        <div className="Student-from-container">
            <form className="student-from" onSubmit={handleSubmit}>
                <h2>Add Books</h2>
                <div className="from-group">
                    <label htmlFor="books">Book Name:</label>
                    <input type="text" id="books" name="books"
                    onChange={(e) => setName (e.target.value)} />
                </div>
                <div className="from-group">
                    <label htmlFor="author">Author Name:</label>
                    <input type="text" id="author" name="author"
                    onChange={(e) => setAuthor (e.target.value)}  />
                </div>
                <div className="from-group">
                    <label htmlFor="image">Image URL:</label>
                    <input type="text" id="image" name="image"
                    onChange={(e) => setImageUrl(e.target.value)}  />
                </div>
                

                <button type="Submit">Add</button>

            </form>

        </div>
    )
}

export default AddBooks
