const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Book = require('./models/book');

mongoose.connect('mongodb://localhost:27017/bookbazaar', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO ERROR!!!!")
        console.log(err)
    })

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get("/", (req, res)=>{
    res.render('index');
})

app.get("/books", async (req,res) =>{
    const books = await Book.find({});
    res.render('books', {books:books});
})

app.get("/books/:id", async (req,res) =>{
    const { id } = req.params;
    const book = await Book.findById(id);
    res.render('show', {book:book});
})

app.get('books/new', async (req,res) =>{
    res.render('new');
});

app.listen(3000, function(){
    console.log("Server started on port 3000.");
});