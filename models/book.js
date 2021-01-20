const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema  = new Schema({
    title : String,
    price : Number,
    author : String,
    image: String,
    description : String,
    year : Number,
    genre: String
});


module.exports = mongoose.model('Book', BookSchema);