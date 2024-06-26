import mongoose from "mongoose";

const booksSchema = new mongoose.Schema({
    name:{type : String},
    author:{type: String, required: true},
    imageUrl: {type: String, required: true},
  
})

const booksModel = mongoose.model('Books',booksSchema)
export {booksModel as Books}