import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import './db.js'
import { AdminRouter } from './routes/auth.js'
import { studentRouter } from './routes/Student.js'
import { BooksRouter } from './routes/books.js'
import {Books} from './models/Books.js'
import { Student } from './models/Student.js'
import{Admin} from './models/Admin.js'

const  app = express()
app.use(express.json())
app.use(cors({
    origin :['http://localhost:5173'],
    credentials:true
}))
app.use(cookieParser())
dotenv.config()
app.use('/auth',AdminRouter)
app.use('/Student',studentRouter)
app.use('/Books',BooksRouter)


app.get('/Dashboard', async (req, res) => {
    try {
        const student = await Student.countDocuments()
        const admin = await Admin.countDocuments()
        const book = await Books.countDocuments()
        return res.json({ok: true, student, book, admin})
    } catch(err) {
        return res.json(err)
    }
})

app.listen(process.env.PORT, () =>{
    console.log("server is running");
})  