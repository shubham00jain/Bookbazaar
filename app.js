const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override')

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

app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));


app.get("/", (req, res)=>{
    res.render('index');
})

app.get("/books", async (req,res) =>{
    const books = await Book.find({});
    res.render('books', {books:books});
})

app.post("/books", async (req,res) =>{
    const newbook = new Book(req.body);
    await newbook.save();
    res.redirect('/books');
});

app.get('/books/new', (req,res) =>{
    res.render('new');
});

app.get("/books/:id", async (req,res) =>{
    const { id } = req.params;
    const book = await Book.findById(id);
    res.render('show', {book:book});
})

app.get("/books/:id/edit", async (req,res) =>{
    const { id } = req.params;
    const book = await Book.findById(id);
    res.render('edit', {book:book});
})

app.put('/books/:id', async (req,res) =>{
    const id = req.params.id;
    await Book.findByIdAndUpdate(id, req.body);
    res.redirect('/books');
})

app.delete()
app.listen(3000, function(){
    console.log("Server started on port 3000.");
});